import { ethers } from 'ethers';

export function createProvider() {
  const url = process.env.REACT_APP_MUMBAI_URL;
  return new ethers.providers.JsonRpcProvider(url);
}