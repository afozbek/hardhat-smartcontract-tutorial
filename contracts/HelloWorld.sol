//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract HelloWorld {
    string private message;

    constructor() {
        console.log("Deploying a HelloWorld with message:");
        message = "Hello World";
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory _message) public {
        console.log("Changing message from '%s' to '%s'", message, _message);
        message = _message;
    }
}
