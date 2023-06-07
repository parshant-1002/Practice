import React from 'react';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig,useAccount } from 'wagmi';
import { arbitrum, mainnet, polygon } from 'wagmi/chains';
import HomePage from './Component/loginDetails';
import { getAccount } from '@wagmi/core';
import Charts from './Component/Charts';


const chains = [arbitrum, mainnet, polygon];
const projectId = '5380ffb901624cfb8e5b09c1a697b293';

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);


export default function App() {

  return (
    <>

      <WagmiConfig config={wagmiConfig}>
        <HomePage />
      </WagmiConfig>

      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        themeMode="light"
        explorerRecommendedWalletIds={[
          'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
          'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
          '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0'
        ]}
        explorerExcludedWalletIds={'ALL'}
        themeVariables={{
          '--w3m-font-family': 'Roboto, sans-serif',
          '--w3m-accent-fill-color': '#ffffff',
          '--w3m-accent-color': '#000000',
          '--w3m-background-color': '#909090'
        }}
      />
      <Charts/>
    </>
  );
}