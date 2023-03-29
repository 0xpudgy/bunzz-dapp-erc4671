import * as Types from "./types.js";
import { contractAddresses } from "./constants.js";

import ERC4671Abi from "./abi/erc4671.json";

export class Contracts {
  constructor(provider, networkId, web3, options) {
    this.web3 = web3;
    this.defaultConfirmations = options.defaultConfirmations;
    this.autoGasMultiplier = options.autoGasMultiplier || 1.5;
    this.confirmationType =
      options.confirmationType || Types.ConfirmationType.Confirmed;
    this.defaultGas = options.defaultGas;
    this.defaultGasPrice = options.defaultGasPrice;
    this.erc4671 = new this.web3.eth.Contract(ERC4671Abi);
    this.setProvider(provider, networkId);
    this.setDefaultAccount(this.web3.eth.defaultAccount);
  }

  setProvider(provider, networkId) {
    const setProvider = (contract, address) => {
      contract.setProvider(provider);
      if (address) contract.options.address = address;
      else console.error("Contract address not found in network", networkId);
    };

    setProvider(this.erc4671, contractAddresses.erc4671[networkId]);
  }
}
