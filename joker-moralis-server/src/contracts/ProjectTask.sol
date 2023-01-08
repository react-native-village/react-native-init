// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

contract ProjectTask {
    // тут храниться адресс работодателя
    address payable public employer;
    // цена задачи
    uint public task_cost;
    // цена задачи
    string public task_description_link;
    string public short_title;

    // с самого начала задача находится в статусе ожидания исполнителей
    Status public status = Status.PENDING_PERFORMER;
    // список адресов исполнителей, которые хотят выполнить задачу
    mapping(address => bool) public wishing_performers;
    // address[] public wishing_performers;
    address payable public selected_performer;

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

    // функция которую вызывают исполнители, чтобы попасть в список желающих
    function assignRequest() external allowOnPending {
        // проверка что исполнитель не является работодателем
        if (msg.sender == employer) revert EmployerCannotBePerformer();

        // проверка что исполнитель не является исполнителем
        if (wishing_performers[msg.sender] == true)
            revert PerformerAlreadyWish();

        // добавление исполнителя в список
        wishing_performers[msg.sender] = true;
    }

    function assignPerformer(
        address performer
    ) external onlyEmployer allowOnPending {
        // проверка что исполнитель желает выполнить задачу
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
            revert AssignedTaskCannotBeClosed();

        // перевод задачи в статус отклоненной
        status == Status.REJECTED;
        selfdestruct(employer);
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
    CONFLICT // исполнителем открыт конфликт с заказчиком
}

error TaskNotPendingPerformer();
error PerformerIsNotWishingDoThis();
error AssignedTaskCannotBeClosed();
error EmployerCannotBePerformer();
error PerformerAlreadyWish();
error TaskIsStillInProgress();
error OnlyEmployerCanDoThis();
error OnlyPerformerCanDoThis();
error TaskIsNotInProgress();
