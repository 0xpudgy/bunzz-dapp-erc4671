import { Button, Col, Container, Row, Form, Spinner } from "react-bootstrap";
import React, { useState, useCallback } from "react";
import useBunzz from "../hooks/useBunzz";
import { getERC4671Contract, mint, revoke } from "../contracts/utils";
import { useWeb3React } from "@web3-react/core";

const Main = () => {
  const bunzz = useBunzz();
  const { account } = useWeb3React();
  const erc4671Contract = getERC4671Contract(bunzz);
  const [mintOwner, setMintOwner] = useState('');
  const [revokeTokenId, setRevokeTokenId] = useState(0);
  const [pendingMint, setPendingMint] = useState(false);
  const [pendingRevoke, setPendingRevoke] = useState(false);

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col lg="4" md="4" xs="12">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Input Owner Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                value={mintOwner}
                onChange={(val) => setMintOwner(val.target.value)}
              />
            </Form.Group>
            {!pendingMint ? (
              <Button
                variant="dark"
                onClick={async () => {
                  setPendingMint(true);
                  try {
                    const txHash = await mint(erc4671Contract, mintOwner, account);
                    console.log(txHash);
                    setPendingMint(false);
                  } catch (e) {
                    console.log(e);
                    setPendingMint(false);
                  }
                }}
              >
                Mint
              </Button>
            ) : (
              <Button variant="dark">
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                {` `} Mint
              </Button>
            )}
          </Form>
          <br></br>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Input Revoke Token Id</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter token id"
                value={revokeTokenId}
                onChange={(val) => setRevokeTokenId(val.target.value)}
              />
            </Form.Group>
            {!pendingRevoke ? (
              <Button
                variant="dark"
                onClick={async () => {
                  setPendingRevoke(true);
                  try {
                    const txHash = await revoke(erc4671Contract, revokeTokenId, account);
                    console.log(txHash);
                    setPendingRevoke(false);
                  } catch (e) {
                    console.log(e);
                    setPendingRevoke(false);
                  }
                }}
              >
                Revoke
              </Button>
            ) : (
              <Button variant="dark">
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                {` `} Revoke
              </Button>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
