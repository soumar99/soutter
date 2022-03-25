
(async () => {
    const abi = [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "name": "Completed",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "content",
              "type": "string"
            }
          ],
          "name": "Created",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_content",
              "type": "string"
            }
          ],
          "name": "createTweet",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_id",
              "type": "uint256"
            }
          ],
          "name": "toggleCompleted",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "tweetCount",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "tweets",
          "outputs": [
            {
              "internalType": "string",
              "name": "name_of_tweet",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "content",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "isCompleted",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ];

    // Soutter contract
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const address = "0xDb89D043b5adC41239FD4cB79f689544Be44C167";
    const signer = provider.getSigner(0);
    const contract = new ethers.Contract(address, abi, signer);
  
    // connect MetaMask
    document.getElementById("connect").addEventListener("click", async () => {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      document.getElementById(
        "account_address"
      ).textContent = `address: ${accounts[0]}`;
    });

    // create tweet 
    document.getElementById("go").addEventListener("click", async () => {
        let user_name_ob = document.getElementById("user_name");
        let content_ob = document.getElementById("content");
        let user_name = user_name_ob.value;
        let content = content_ob.value;
        await contract.createTweet(user_name, content);
        let tweetCount = await contract.textContent();
        alert("contract count:", tweetCount);
        $("div").append("<ul id='ul'><li>NAME: <strong>"+user_name+"</strong></li><li>CONTENT:  <strong>"+content+" </strong></ul>");
        user_name_ob.value = null;
        content_ob.value = null;
    });

    document.getElementById("delete").addEventListener("click", async () => {
        alert("delete");
    });
  
  })();
  