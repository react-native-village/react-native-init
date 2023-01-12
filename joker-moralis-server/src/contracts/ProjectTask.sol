// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract ProjectTask {
    // тут храниться адресс работодателя
    address payable public employer;
    // цена задачи
    uint public task_cost;
    // информация о задаче
    string public task_description_link;
    string public short_title;

    // с самого начала задача находится в статусе ожидания исполнителей
    Status public status = Status.PENDING_PERFORMER;
    // список адресов исполнителей, которые хотят выполнить задачу
    mapping(address => bool) public wishing_performers;
    // address[] public wishing_performers;
    address payable public selected_performer;

    event RequestForChanges(
        address recipient,
        string message,
        string additionalLink
    );
    event RefusalTaskByPerformer(address employerAddr, string message);

    constructor(
        string memory _short_title,
        string memory _task_description_link
    ) payable {
        // тот кто сделал контракт тот и работодатель
        employer = payable(msg.sender);
        task_description_link = _task_description_link;
        short_title = _short_title;
        // при создании контракта, в него должны перевести деньги на стоимость задачи
        task_cost = msg.value;
    }

    receive() external payable {
        task_cost += msg.value;
    }

    // функция которую вызывают исполнители, чтобы попасть в список желающих
    function assignRequest() external allowOnPending {
        // проверка что исполнитель не является работодателем
        if (msg.sender == employer) revert EmployerCannotBePerformer();

        // проверка что исполнитель еще не в списке
        if (wishing_performers[msg.sender] == true)
            revert PerformerAlreadyWish();

        // добавление исполнителя в список
        wishing_performers[msg.sender] = true;
    }

    function revokeAssignRequest() external allowOnPending {
        // проверка что исполнитель не является работодателем
        if (msg.sender == employer) revert EmployerCannotBePerformer();

        // проверка что исполнитель сейчас хочет стать исполнителем
        if (wishing_performers[msg.sender] == false)
            revert PerformerIsNotWishingDoThis();

        // удаление исполнителя из списка
        wishing_performers[msg.sender] = false;
    }

    function renounceTaskWithMessage(
        string memory message
    ) external onlyPerformer {
        // перевод задачи в статус ожидания исполнителей
        status = Status.PENDING_PERFORMER;
        // удаление назначеного исполнителя
        selected_performer = payable(address(0));
        // удаление исполнителя из списка желающих
        wishing_performers[msg.sender] = false;
        // отправка сообщения работодателю
        emit RefusalTaskByPerformer(employer, message);
    }

    function assignPerformer(
        address performer
    ) external onlyEmployer allowOnPending {
        // проверка что исполнитель желает выполнить задачу
        if (performer == employer) revert EmployerCannotBePerformer();
        if (!wishing_performers[performer])
            revert PerformerIsNotWishingDoThis();

        // перевод задачи в статус исполнения
        status = Status.IN_PROGRESS;
        selected_performer = payable(performer);
    }

    function sendTaskToReview() external onlyPerformer allowOnlyInProgress {
        // перевод задачи в статус на проверке
        status = Status.ON_REVIEW;
    }

    function rejectTask() external onlyEmployer {
        // проверка что статус задачи ожидает исполнителей
        if (status != Status.PENDING_PERFORMER)
            revert AssignedTaskCannotBeRejected();

        // перевод задачи в статус отклоненной
        status == Status.REJECTED;
        selfdestruct(employer);
    }

    function requestChanges(
        string memory message,
        string memory additional_link
    ) external onlyEmployer {
        // проверка что статус задачи "на проверке"
        if (status != Status.ON_REVIEW) revert TaskIsNotOnReview(status);

        // перевод задачи в статус в прогрессе
        status = Status.REQUESTED_CHANGES;
        emit RequestForChanges(selected_performer, message, additional_link);
    }

    function completeTask() external onlyEmployer {
        // проверка что задача на проверке
        if (status != Status.ON_REVIEW) {
            revert TaskIsStillInProgress();
        }

        // перевод задачи в статус выполненной
        status = Status.COMPLETED;
        // перевод денег исполнителю
        selected_performer.transfer(task_cost);
        selfdestruct(selected_performer);
    }

    modifier onlyPerformer() {
        if (msg.sender != selected_performer) revert OnlyPerformerCanDoThis();
        _;
    }
    modifier onlyEmployer() {
        if (msg.sender != employer) revert OnlyEmployerCanDoThis();
        _;
    }
    modifier allowOnPending() {
        // проверка что статус задачи ожидает исполнителей
        if (status != Status.PENDING_PERFORMER)
            revert TaskNotPendingPerformer();
        _;
    }
    modifier allowOnlyInProgress() {
        // проверка что статус задачи "в прогрессе"
        if (status != Status.IN_PROGRESS) revert TaskIsNotInProgress();
        _;
    }
}

enum Status {
    PENDING_PERFORMER, // ожидаются и рассмотриваются исполнители
    IN_PROGRESS, // задача отдана на исполнение
    ON_REVIEW, // задача на проверке
    REJECTED, // задача была закрыта не выполненной
    COMPLETED, // задача выполнена исполнителем(после моментально оплачена)
    CONFLICT, // исполнителем открыт конфликт с заказчиком
    REQUESTED_CHANGES // задача проверенна, но исполнитель просит внести изменения
}

error TaskNotPendingPerformer();
error PerformerIsNotWishingDoThis();
error AssignedTaskCannotBeRejected();
error EmployerCannotBePerformer();
error PerformerAlreadyWish();
error TaskIsStillInProgress();
error OnlyEmployerCanDoThis();
error OnlyPerformerCanDoThis();
error TaskIsNotInProgress();
error TaskIsNotOnReview(Status status);
error YouHaveNotWishing();
