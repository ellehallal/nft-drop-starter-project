import React, { useEffect, useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import { Program, Provider, web3 } from "@project-serum/anchor";
import { MintLayout, TOKEN_PROGRAM_ID, Token } from "@solana/spl-token";
import { programs } from "@metaplex/js";
import "./CandyMachine.css";
import {
  candyMachineProgram,
  TOKEN_METADATA_PROGRAM_ID,
  SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
} from "./helpers";
import { MintedItems } from "../components/mintedItems";
import { MintNftButton } from "../components/mintNftButton";
import { NftStats } from "../components/nftStats";
const {
  metadata: { Metadata, MetadataProgram },
} = programs;

// Declare getCandyMachineState as an async method
const getCandyMachineState = async () => {
  const provider = getProvider();

  // Get metadata about your deployed candy machine program
  const idl = await Program.fetchIdl(candyMachineProgram, provider);

  // Create a program that you can call
  const program = new Program(idl, candyMachineProgram, provider);

  // Fetch the metadata from your candy machine
  const candyMachine = await program.account.candyMachine.fetch(
    process.env.REACT_APP_CANDY_MACHINE_ID
  );

  // Parse out all our metadata and log it out
  const itemsAvailable = candyMachine.data.itemsAvailable.toNumber();
  const itemsRedeemed = candyMachine.itemsRedeemed.toNumber();
  const itemsRemaining = itemsAvailable - itemsRedeemed;
  const goLiveData = candyMachine.data.goLiveDate.toNumber();

  // We will be using this later in our UI so let's generate this now
  const goLiveDateTimeString = `${new Date(
    goLiveData * 1000
  ).toLocaleDateString()} @ ${new Date(
    goLiveData * 1000
  ).toLocaleTimeString()}`;

  setMachineStats({
    itemsAvailable,
    itemsRedeemed,
    itemsRemaining,
    goLiveData,
    goLiveDateTimeString,
  });

  console.log({
    itemsAvailable,
    itemsRedeemed,
    itemsRemaining,
    goLiveData,
    goLiveDateTimeString,
  });

  const data = await fetchHashTable(
    process.env.REACT_APP_CANDY_MACHINE_ID,
    true
  );

  if (data.length !== 0) {
    for (const mint of data) {
      // Get URI
      const response = await fetch(mint.data.uri);
      const parse = await response.json();
      console.log("Past Minted NFT", mint);

      // Get image URI
      if (!mints.find((mint) => mint === parse.image)) {
        setMints((prevState) => [...prevState, parse.image]);
      }
    }
  }
};
