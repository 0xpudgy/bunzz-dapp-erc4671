## How to use module

1. Prepare the metadata for your tokens and upload them to a storage solution like s3 or IPFS (both centralized and decentralized solutions works).

2. After you upload your metadata on s3 in return you will receive a link.

3. When deploying the contract, you need to prepare 3 arguments, the first argument is a string and represents the name of the token, the second argument is a string and represents the symbol of the token, the third argument represents the base URI of the collection metadata, basically the link you received from s3.

4. Call the “mint” function (it can only be called by the owner), with the only argument being the address that will receive the token.

5. The metadata of a token can be retrieved by calling the “tokenURI” function, in which the only argument is the id of the token.

6. The “transfer” and “transferFrom” functions do not work, the call will revert.

7. To mark a token as invalid, basically, to revoke it from the user, you need to call the function “revoke”, this function has only one argument and that one argument is the id of the token you want to make invalid.

8. To check if a token is valid or invalid, you can call the function “isValid”, it has only one argument, and that one argument is the id of the token.

9. To check if a user has any valid tokens, you can call the function “hasValid”, the function have only one argument, and that one argument represents the address of the user you want to check if it has any valid tokens.