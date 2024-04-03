
/* To connect using MetaMask */
async function connect() {
    if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        window.web3 = new Web3(window.ethereum);
    } else {
        console.log("No wallet");
    }
}

// Add an event listener to the "Connect Wallet" button
const connectWalletButton = document.getElementById("connectWalletButton");
connectWalletButton.addEventListener("click", connect);
