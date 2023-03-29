## About

Extension of ERC20 to support Compound-like voting and delegation.
ERC20Votes is an ERC20 contract with additional functionality that allows it to be used as a "weighted voting token" in voting contracts that apply vote weights based on token balances.

Delegation means an address can loan their voting power to another address without transferring their tokens to that address.


## Features

- ERC20 Votes does not actually handle conducting the poll, it’s still a regular ERC20 token with snapshot and delegated voting abilities. Voting is usually handled by governance contracts.
- Unlike ERC20 Snapshot, it does not keep snapshots of the token balances, but keeps snapshots of the voting power of the addresses.
- This extension keeps a history (checkpoints) of each account's vote power. Vote power can be delegated either by calling the {delegate}function directly, or by providing a signature to be used with {delegateBySig}. Voting power can be queried through the public accessors {getVotes} and {getPastVotes}.
- By default, token balance does not account for voting power.


## Use case

This allows passive shareholders to participate in governance by delegating their voting power

Accounts with small balances can vote without spending gas, because the delegatee is using voting on their behalf. This saves gas at an ecosystem level. If all participants have delegated to 5 delegatees, then only 5 votes happen for an item to be voted on, instead of possibly thousands.

And of course, snapshotting (checkpointing) is necessary to prevent double voting, just like ERC20 Snapshot does.

## Sample dApp
- github repo URL
    https://github.com/john082Coder/BunzzERC20VotesModuleTest
- simple dapp URL
    https://bunzz-erc-20-votes-module-test.vercel.app/


---
## Review report
- [JCoder's report](https://docs.google.com/document/d/1dG83T5-PFgcDAB3SnCAqH74jbK8mpUPUA8nHZXldJB4/edit?usp=sharing)