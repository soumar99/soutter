//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.0;

import "hardhat/console.sol"; 

contract Soutter{

    event Created(uint id, string content);
    event Completed(uint id);

    struct Tweet{
        string name_of_tweet;
        string content;
        bool isCompleted;
    }

    uint256 public tweetCount = 0;
    mapping(uint => Tweet) public tweets;


    function createTweet(string memory _name, string memory _content) public {
        tweetCount ++;
        tweets[tweetCount] = Tweet(_name, _content, false);
        emit Created(tweetCount, _content);
    }

    function toggleCompleted(uint _id) public {
        Tweet memory _tweet = tweets[_id];
        console.log("tweet name:", _tweet.name_of_tweet);
        console.log("tweet content:", _tweet.content);
        console.log("before change:", _tweet.isCompleted);
        _tweet.isCompleted = true;
        console.log("after change:", _tweet.isCompleted);
        tweets[_id] = _tweet;
        emit Completed(_id);
    }

}