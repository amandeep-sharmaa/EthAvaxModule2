// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Crowdfunding {
    address payable public owner;
    uint256 public totalFunds;

    event Contribution(address indexed contributor, uint256 amount);
    event Withdrawal(address indexed withdrawer, uint256 amount);

    constructor() {
        owner = payable(msg.sender);
        totalFunds = 0;
    }

    function contribute() public payable {
        require(msg.value > 0, "Contribution must be more than 0");
        totalFunds = totalFunds+msg.value;
        emit Contribution(msg.sender, msg.value);
    }

    function withdraw(uint256 _amount) public {
        require(msg.sender == owner, "Only the owner can withdraw funds");
        require(_amount <= totalFunds, "Insufficient funds");

        totalFunds =totalFunds- _amount;
        (bool success, ) = owner.call{value: _amount}("");
        require(success, "Withdrawal failed");
        emit Withdrawal(msg.sender, _amount);
    }

    function getTotalFunds() public view returns (uint256) {
        return totalFunds;
    }
}
