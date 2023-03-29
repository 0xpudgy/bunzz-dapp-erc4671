import BigNumber from "bignumber.js";
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});

export const getERC4671Contract = (bunzz) => {
  return bunzz && bunzz.contracts && bunzz.contracts.erc4671;
};

export const setERC4671ContractAddress = (bunzz, address) => {
  bunzz.contracts.erc4671.options.address = address;
};

export const mint = async (erc4671Contract, owner, account) => {
  return erc4671Contract.methods
    .Mint(owner)
    .send({ from: account })
    .on("transactionHash", (tx) => {
      console.log(tx);
      return tx.transactionHash;
    });
};

export const revoke = async (erc4671Contract, amount, account) => {
  return erc4671Contract.methods
    .Revoke(new BigNumber(amount))
    .send({ from: account })
    .on("transactionHash", (tx) => {
      console.log(tx);
      return tx.transactionHash;
    });
};
