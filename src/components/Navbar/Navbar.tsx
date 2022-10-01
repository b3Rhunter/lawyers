import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ethers} from "ethers";
import React, { useState } from "react";
import { TextDecrypt } from "../TextDecrypt";

import logo from "./logo white.png";
import "./Navbar.css";




declare var window: any

export const Navbar = () => {

  const [isConnected, connected] = useState(false);
  const [show, setShow] = useState(true);
  const [name, setName] = useState("");


  function changeState() {
    setShow(!show);
  }

  async function connect() {
  
    const provider = new ethers.providers.Web3Provider(window.ethereum)
     await provider.send("eth_requestAccounts", []);
     const signer = provider.getSigner()
     const address = await signer.getAddress()
     const ens = await provider.lookupAddress(address);
     var length = 6;
     if (ens !== null) {
      setName(ens)
    } else {
      setName(address.substring(0,length) + "...")
    }
    connected(true)
    changeState()
  }

  return (
    <div className="nav">
    <input type="checkbox" id="nav-check"></input>
    <div className="nav-header">
      <div className="nav-title">
        <a href="./">
        <img src={logo} alt=""></img>
        </a>
      </div>
    </div>
    <div className="nav-btn">
      <label htmlFor="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    <div className="nav-links">
      <a href="#MemberBenefits">Benefits</a>
      <a href="directory" target="_blank" rel="noreferrer">Directory</a>
      <a href="articles" target="_blank" rel="noreferrer">Articles</a>
      <a href="mailto:info@blockchainlawyers.group">Contact</a>
      <a href="https://medium.com/@BlockchainLG/web3-and-the-quest-for-a-global-legal-advisory-introducing-the-blockchain-lawyers-group-165c55c12859" target="_blank" rel="noreferrer">Whitepaper</a>
    </div>

    {show ? (
          <button className="connectButton" onClick={connect}>
            <TextDecrypt text="Connect"></TextDecrypt></button>
          ) : (
            <button className="connectButton textGradient" onClick={connect}>
              <TextDecrypt text={name}></TextDecrypt></button>
          )}

  </div>
  );
}