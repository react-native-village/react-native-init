// SPDX-License-Identifier: MIT

// Файлы Solidity должны начинаться с этой pragma.
// Он будет использоваться компилятором Solidity для проверки своей версии.
pragma solidity ^0.8.17;

// Это основной строительный блок для смарт-контрактов.
contract Token {
    // Некоторые переменные строкового типа для идентификации токена.
    string public name = "My Hardhat Token";
    string public symbol = "MHT";

    // Фиксированное количество токенов, хранящихся в переменной целочисленного типа без знака.
    uint256 public totalSupply = 1000000;

    // Переменная типа адреса используется для хранения учетных записей ethereum.
    address public owner;

    // Mapping(сопоставление) - это карта ключ/значение. Здесь мы храним баланс каждого аккаунта.
    mapping(address => uint256) balances;

    // Событие передачи помогает автономным приложениям понять,
    // что происходит в рамках вашего контракта.
    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    /**
     * Contract initialization.
     */
    constructor() {
        // totalSupply присваивается отправителю транзакции,
        // который является учетной записью, развертывающей контракт.
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    /**
     * Функция для передачи токенов.
     *
     * Модификатор `external` делает функцию *только* вызываемой *извне*
     * контракта
     */
    function transfer(address to, uint256 amount) external {
        // Проверьте, достаточно ли токенов у отправителя транзакции.
        // Если первый аргумент `require` принимает значение `false',
        // то транзакция будет отменена.
        require(balances[msg.sender] >= amount, "Not enough tokens");

        // Переведите сумму.
        balances[msg.sender] -= amount;
        balances[to] += amount;

        // Уведомите о переводе сторонние приложения.
        emit Transfer(msg.sender, to, amount);
    }

    /**
     * Функция только для чтения для получения токенового баланса данной учетной записи.
     *
     * Модификатор `view` указывает, что он не изменяет состояние
     * контракта, что позволяет нам вызывать его без выполнения транзакции.
     */
    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}
