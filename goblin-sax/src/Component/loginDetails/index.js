import React from 'react';
import { Web3Button } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig,useAccount, useDisconnect } from 'wagmi';
import './styles.css';
export default function HomePage() {
  const {address, connector,isConnected }=useAccount()
  const { disconnect } = useDisconnect()
 console.log(address,  connector )
  return (
    <div className='buttonWalletConnect'>
      <div className='buttonWalletConnect-Container'>
        {!isConnected && <Web3Button/>}
        {<label>{address}</label>}
        {isConnected && <button onClick={disconnect}>Disconnect</button>}
      </div>
    </div>
  );
}
