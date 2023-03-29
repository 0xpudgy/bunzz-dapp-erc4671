# WRITE(main)

## aprove
Gives an certain address permission to move tokens for the token owner

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|spender|address|The operator of the tokens balance||N/A|
|amount|uint256|The amount of the tokens the spender is approved to spend||N/A|

## increaseAllowance
Increase an certain address permission to move tokens for the token owner

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|spender|address|The tokens spender||N/A|
|addedValue|uint256|The value that will be added to the spender approval||N/A|

## decreaseAllowance
Decrease an certain address permission to move tokens for the token owner

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|spender|address|The spender of the tokens||N/A|
|subtractedValue|uint256|The amount that will be substracted from the spender permission||N/A|

## delegate
This function allows msg.sender to delegate their voting power to delegatee and the delegatee will vote on behalf of msg.sender. 

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|delegatee|address|The address of delegatee||N/A|


## delegateBySig
The function delegateBySig allows for a user to delegate voting power through a gasless transaction and have another account pay the gas fee and execute the transaction.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|delegatee|address|The address of delegatee||N/A|
|nonce|uint256|Signatures require a nonce to prevent replay attacks||N/A|
|expiry|uint256|The expiring sets the time over which the delegation is valid||N/A|
|v|uint8|Components of the Elliptic Curve Digital Signature||N/A|
|r|bytes32|Components of the Elliptic Curve Digital Signature||N/A|
|s|bytes32|Components of the Elliptic Curve Digital Signature||N/A|


## transferFrom
Transfer a particular amount of tokens from the tokens owner to an certai address if the caller have the permision to transfer it

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|sender|address|The sender of tokens||N/A|
|recipient|address|The tokens receiver||N/A|
|amount|uint256|The amount of tokens that will be sent||N/A|


## transfer
Transfer a particular amount of tokens from caller balance to another user balance

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|recipient|address|The tokens receiver||N/A|
|amount|uint256|The amount of tokens that will be sent||N/A|

## mint
Mint new tokens for a user

|Name|Type|Description|
|--- |---|---|
|to|address|The tokens receiver|
|amount|uint256|The amount of tokens that will be minted|


# READ(main)

## totalSupply
Returns the amount of tokens in existence

## symbol
Returns the token symbol

## decimals
Returns the decimals of the token

## delegates
Get the address `account` is currently delegating to.

|Name|Type|Description|
|--- |---|---|
|account|address|The address of target account|

## allowance
Returns the remaining number of tokens that spender will be allowed to spend on behalf of owner through transferFrom

|Name|Type|Description|
|--- |---|---|
|owner|address|The tokens owner|
|spender|address|The tokens spender|

## balanceOf
Returns the token amount owned by an address

|Name|Type|Description|
|--- |---|---|
|account|address|The account you want to check the balance|

## checkpoints
Returns the checkpoint for account

|Name|Type|Description|
|--- |---|---|
|account|address|The account you want to check the checkpoints|
|pos|uint32|The position which you want to check|

## getVotes
This function takes the address of an account and returns the total voting power it has. 

|Name|Type|Description|
|--- |---|---|
|account|address|The account you want to check the voting power|


## getPastVotes
This function takes the address of an account and returns the past voting power at the specific timepoint

|Name|Type|Description|
|--- |---|---|
|account|address|The account you want to check the voting power|
|blockNumber|uint256|The block number which will indicate timepoint|


