// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

contract ProjectTask {
    // тут храниться адресс работодателя
    address payable public employer;
    uint public work_cost;

    enum Status {
        PENDING_PERFORMER, // ожидаются и рассмотриваются исполнители
        IN_PROGRESS, // задача отдана на исполнение
        ON_REVIEW, // задача на проверке
        REJECTED, // задача была закрыта не выполненной
        COMPLETED, // задача выполнена исполнителем(после моментально оплачена)
        CONFLICT // исполнителем открыт конфликт с заказчиком
    }

    // с самого начала задача находится в статусе ожидания исполнителей
    Status public status = Status.PENDING_PERFORMER;
    // список адресов исполнителей, которые хотят выполнить задачу
    mapping(address => bool) public wishing_performers;
    // address[] public wishing_performers;
    address payable public selected_performer;

    constructor() payable {
        // тот кто сделал контракт тот и работодатель
        employer = payable(msg.sender);
        // при создании контракта, в него должны перевести деньги
        work_cost = msg.value;
    }

    // функция которую вызывают исполнители, чтобы попасть в список желающих
    function assignRequest(address performer) external {
        // проверка что статус задачи ожидает исполнителей
        require(
            status == Status.PENDING_PERFORMER,
            "Task is not pending performer"
        );
        // проверка что исполнитель не является работодателем
        require(performer != employer, "Employer can't be performer");
        // проверка что исполнитель не является исполнителем
        require(
            wishing_performers[performer] == false,
            "Performer already in list"
        );

        // добавление исполнителя в список
        wishing_performers[performer] = true;
    }

    function assignPerformer(address performer) external onlyEmployer {
        // проверка что статус задачи ожидает исполнителей
        require(
            status == Status.PENDING_PERFORMER,
            "Task is not pending performer"
        );
        // проверка что есть исполнитель
        require(wishing_performers[performer], "Performer not found");
        // перевод задачи в статус исполнения
        status = Status.IN_PROGRESS;
        selected_performer = payable(performer);
    }

    function rejectTask() external onlyEmployer {
        // проверка что статус задачи ожидает исполнителей
        require(
            status == Status.PENDING_PERFORMER,
            "The assigned task cannot be closed"
        );
        // перевод задачи в статус отклоненной
        status == Status.REJECTED;
        selfdestruct(employer);
    }

    function completeTask() external onlyEmployer {
        // проверка что статус задачи ожидает исполнителей
        require(
            status == Status.ON_REVIEW && status != Status.PENDING_PERFORMER,
            "The task is still in progress"
        );
        // перевод задачи в статус выполненной
        status = Status.COMPLETED;
        // перевод денег работодателю
        employer.transfer(work_cost);
        selfdestruct(selected_performer);
    }

    modifier onlyEmployer() {
        require(msg.sender == employer, "Only employer can call this function");
        _;
    }
}
