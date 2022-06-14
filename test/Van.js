const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { arrayify, parseEther } = require("ethers/lib/utils");
const { ethers } = require("hardhat");

describe("MetaTokenTransfer", function() {
    it("Should let user transfer tokens through a relayer with different nonces", async function() {
        // Deploy the contracts
        const RandomTokenFactory = await ethers.getContractFactory("VansCollection");
        const VansCollection = await RandomTokenFactory.deploy();
        await VansCollection.deployed();

        console.log(VansCollection.address);

    });
});