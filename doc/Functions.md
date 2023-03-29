# WRITE(main)

## mint

Mint new sould bound tokens

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|owner|address|The address that will received the sould bond token and own it||N/A|

## revoke

Revoke a token id from a token owner making it invalid

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|tokenId|uint256|The token id that will be revoked, marked as invalid||N/A|

# READ(main)

## tokenURI

Retrieves the URI for a sould bond token id

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The id of the token|

## tokenOfOwnerByIndex

Retrieves the token of a certain token owner by the index from his balance

|Name|Type|Description|
|--- |---|---|
|owner|address|The owner of the tokens|
|index|uint256|The index of the token in the owner balance|

## tokenByIndex

Retrieves the token by the index from the user balance

|Name|Type|Description|
|--- |---|---|
|index|uint256|The index of the token from the owner balance|

## symbol

Retrieves the symbol of the sould bond token collection

## supportsInterface

Retrieves wheter the contract supports an interface

|Name|Type|Description|
|--- |---|---|
|interfaceId|bytes4|The id of the interface as bytes|

## ownerOf

Retrieves the owner of a certain sould bond token id

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The tokenId you want to check the owner of|

## name

Retrieves the name of the sould bond tokens collection

## isValid

Retrieves if a token id is a valid sould bond token or not'

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The token id of the sould bond token you want to check|

## holdersCount

Retrieves the number of sould bound tokens holders

## hasValid

Check if the address has a valid sould bond token

|Name|Type|Description|
|--- |---|---|
|owner|address|The owner of the tokens|

## emittedCount

Retrieves the account that have the role to emit tokens

## baseURI

Retrieves the base URI of the whole sould bond tokens collection

## balanceOf

Retrieves the balance of an address

|Name|Type|Description|
|--- |---|---|
|owner|address|The owner of the tokens|

## _creator

Retrieves the creator address

