import {EvmChain} from '@moralisweb3/common-evm-utils';
import Moralis from 'moralis';

interface getDemoDataProps {
  address: string;
  chain: EvmChain;
}

export async function getDemoData({address, chain}: getDemoDataProps) {
  // Get native balance
  const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
    address,
    chain,
  });

  // Format the native balance formatted in ether via the .ether getter
  const native = nativeBalance.result.balance.ether;

  // Get token balances
  const tokenBalances = await Moralis.EvmApi.token.getWalletTokenBalances({
    address,
    chain,
  });

  // Format the balances to a readable output with the .display() method
  const tokens = tokenBalances.result.map(token => token.display());

  // Get the nfts
  const nftsBalances = await Moralis.EvmApi.nft.getWalletNFTs({
    address,
    chain,
    limit: 10,
  });

  // Format the output to return name, amount and metadata
  const nfts = nftsBalances.result.map(nft => ({
    name: nft.result.name,
    amount: nft.result.amount,
    metadata: nft.result.metadata,
  }));

  return {native, tokens, nfts};
}
