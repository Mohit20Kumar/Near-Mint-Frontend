import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Card, Container, Row, Alert } from "react-bootstrap";
import { keys } from "regenerator-runtime";
const BN = require("bn.js");

const MintingTool = (props) => {
  const mintNFT = async () => {
    await window.contract.nft_mint(
      {
        token_id: `${window.accountId}-go-team-token`,
        metadata: {
          title: "My Non Fungible Team Token",
          description: "The Team Most Certainly Goes :)",
          media:
            // "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif",
            "https://bafybeiek6hnec22xix2wes7slve5nry7eoozbvmziuuajnkbemgst5vi2a.ipfs.nftstorage.link/",
        },
        receiver_id: window.accountId,
      },
      300000000000000, // attached GAS (optional)
      new BN("1000000000000000000000000")
    );
  };

  return (
    <Card style={{ padding: "2vh" }}>
      <Container>
        <Row style={{ marginBottom: "2vh" }}>
          <p>
            After you have logged in, hit this button to mint your "Go
            Team" Token and go your{" "}
            <a href='https://wallet.testnet.near.org/'> wallet</a> and see your
            NFT
          </p>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Button
            disabled={props.userNFTStatus || window.accountId === ""}
            onClick={mintNFT}
            style={{ width: "50vw" }}
          >
            Mint NFT
          </Button>
        </Row>
        <Row className='d-flex justify-content-center'>
          {console.log(props.userNFTStatus)}
          {props.userNFTStatus ? (
            <Alert variant='danger' style={{ marginTop: "2vh" }}>
              <p style={{ textAlign: "center" }}>
                You have an NFT already. You can see it{" "}
                <a href={"https://wallet.testnet.near.org/?tab=collectibles"}>
                  here!
                </a>
                :)
              </p>
            </Alert>
          ) : null}
        </Row>
      </Container>
    </Card>
  );
};

MintingTool.propTypes = {};

export default MintingTool;
