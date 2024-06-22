import { useState, useEffect } from "react";
import { ethers } from "ethers";
import crowdfunding_abi from "../artifacts/contracts/Crowdfunding.sol/Crowdfunding.json";

export default function CrowdfundingPage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [crowdfunding, setCrowdfunding] = useState(undefined);
  const [totalFunds, setTotalFunds] = useState(undefined);
  const [contributionAmount, setContributionAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; 
  const crowdfundingABI = crowdfunding_abi.abi;

  useEffect(() => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }
  }, []);

  useEffect(() => {
    if (ethWallet) {
      const fetchAccounts = async () => {
        const accounts = await ethWallet.request({ method: "eth_accounts" });
        handleAccount(accounts);
      };
      fetchAccounts();
    }
  }, [ethWallet]);

  const handleAccount = (accounts) => {
    if (accounts.length > 0) {
      console.log("Account connected: ", accounts[0]);
      setAccount(accounts[0]);
    } else {
      console.log("No account found");
    }
  };

  const connectAccount = async () => {
    if (!ethWallet) {
      alert("MetaMask wallet is required to connect");
      return;
    }
    const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
    handleAccount(accounts);
    getCrowdfundingContract();
  };

  const getCrowdfundingContract = () => {
    const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
    const signer = provider.getSigner();
    const crowdfundingContract = new ethers.Contract(contractAddress, crowdfundingABI, signer);
    setCrowdfunding(crowdfundingContract);
  };

  const getTotalFunds = async () => {
    if (crowdfunding) {
      const funds = await crowdfunding.getTotalFunds();
      setTotalFunds(ethers.utils.formatEther(funds));
    }
  };

  const contribute = async () => {
    if (crowdfunding && contributionAmount) {
      const amountInWei = ethers.utils.parseEther(contributionAmount);
      try {
        const tx = await crowdfunding.contribute({ value: amountInWei });
        await tx.wait();
        getTotalFunds();
      } catch (error) {
        console.error("Error contributing: ", error);
      }
    }
  };

  const withdraw = async () => {
    if (crowdfunding && withdrawAmount) {
      const amountInWei = ethers.utils.parseEther(withdrawAmount);
      const contractBalance = await crowdfunding.getTotalFunds();
      if (contractBalance.lt(amountInWei)) {
        alert("Insufficient funds in the contract for withdrawal");
        return;
      }
      try {
        const tx = await crowdfunding.withdraw(amountInWei);
        await tx.wait();
        getTotalFunds();
      } catch (error) {
        console.error("Error withdrawing: ", error);
      }
    }
  };

  const initUser = () => {
    if (!ethWallet) {
      return <p>Please install MetaMask to use this Crowdfunding platform.</p>;
    }

    if (!account) {
      return <button className="btn" onClick={connectAccount}>Connect your MetaMask wallet</button>;
    }

    if (totalFunds === undefined) {
      getTotalFunds();
    }

    return (
      <div>
        <p>Your Account: {account}</p>
        <p>Total Funds: {totalFunds} ETH</p>
        <input
          type="text"
          placeholder="Enter amount to contribute in ETH"
          value={contributionAmount}
          onChange={(e) => setContributionAmount(e.target.value)}
        />
        <button className="btn" onClick={contribute}>Contribute</button>
        <input
          type="text"
          placeholder="Enter amount to withdraw in ETH"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
        />
        <button className="btn" onClick={withdraw}>Withdraw</button>
      </div>
    );
  };

  return (
    <main className="container">
      <header><h1>Welcome to Crowdfunding Platform!</h1></header>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center;
        }
      `}</style>
    </main>
  );
}
