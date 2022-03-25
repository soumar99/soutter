const { inputToConfig } = require("@ethereum-waffle/compiler");
const {expect} = require("chai");
const { ethers } = require("hardhat");

describe("Soutter contract", function(){
    it("Confirm deployment", async function() {
        const Soutter = await ethers.getContractFactory("Soutter");
        const soutter = await Soutter.deploy();

        console.log("Contract address:", soutter.address);
        console.log("tweet count", await soutter.tweetCount());
        expect(await soutter.tweetCount()).to.equal("0");
    });

    it("Create tweet", async function() {
        const Soutter = await ethers.getContractFactory("Soutter");
        const soutter = await Soutter.deploy();

        await soutter.createTweet("sou", "I am good! how are you?");
        const tweet = await soutter.tweets(1);
        expect(await tweet.name_of_tweet).to.equal("sou");
        expect(await tweet.content).to.equal("I am good! how are you?");
        expect(await soutter.tweetCount()).to.equal("1");
    });

    it("Confirm toggleCompleted", async function() {
        const Soutter = await ethers.getContractFactory("Soutter");
        const soutter = await Soutter.deploy();
        await soutter.createTweet("sou", "I am good! how are you?");
        const tweet = await soutter.tweets(1);
        expect(await tweet.isCompleted).to.equal(false);
        soutter.toggleCompleted(1);
        const new_tweet = await soutter.tweets(1);
        expect(await new_tweet.isCompleted).to.equal(true);
    });
});