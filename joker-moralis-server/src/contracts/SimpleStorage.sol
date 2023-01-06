// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

contract StandardContract {
    uint storedValue;

    function store(uint myInt) public {
        storedValue = myInt;
    }
}
