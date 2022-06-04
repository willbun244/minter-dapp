require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
<<<<<<< HEAD
const namePrefix = "lildanny.xyz";
const description = "The Little Danny NFT Project is a collection of Pixel Art images that aim to appeal to Pixel Art lovers and minters.";
=======
const namePrefix = "lilkittycat.xyz";
const description = "This is Little Kitty Cat Collection Project";
>>>>>>> 13be2a602d4938a08d589eb5327bcb59856e7972
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
<<<<<<< HEAD
    growEditionSizeTo: 1000,
    layersOrder: [
      { name: "Background" },
      { name: "Head" },
      { name: "Body One" },
      { name: "Leg One" },
=======
    growEditionSizeTo: 5000,
    layersOrder: [
      { name: "Background" },  
      { name: "Body" },
      { name: "Eyes" }, 
      { name: "Necklace" },
>>>>>>> 13be2a602d4938a08d589eb5327bcb59856e7972
    ],
  },
  {
    growEditionSizeTo: 3000,
    layersOrder: [
      { name: "Background" },
      { name: "Head" },
      { name: "Body Two" },
      { name: "Leg Two" },
    ],
  }, 
  {
    growEditionSizeTo: 5000,
    layersOrder: [
      { name: "Background" },
      { name: "Head" },
      { name: "Body Three" },
      { name: "Leg Three" },
    ],
  },  
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1536,
  height: 1536,
  smoothing: false,
};

const extraMetadata = {
<<<<<<< HEAD
  external_url: "https://lildanny.xyz", // Replace with your website or remove this line if you do not have one.
=======
  external_url: "https://lilkittycat.xyz", // Replace with your website or remove this line if you do not have one.
>>>>>>> 13be2a602d4938a08d589eb5327bcb59856e7972
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'polygon'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
<<<<<<< HEAD
const CONTRACT_NAME = 'lildanny.xyz';
const CONTRACT_SYMBOL = 'LDR';
=======
const CONTRACT_NAME = 'lilkittycat.xyz';
const CONTRACT_SYMBOL = 'LKC';
>>>>>>> 13be2a602d4938a08d589eb5327bcb59856e7972
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0xB24c59eCd6444c446707e693971aF5d78321F93a';
const TREASURY_ADDRESS = '0xB24c59eCd6444c446707e693971aF5d78321F93a';
const MAX_SUPPLY = 5000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 150; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 10; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
<<<<<<< HEAD
const PUBLIC_MINT_START_DATE = "2022-06-06T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-06-05T11:30:48+00:00"; // Optional. Eg: 2022-02-08T11:30:48+00:00
=======
const PUBLIC_MINT_START_DATE = "2022-05-21T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-05-19T11:30:48+00:00"; // Optional. Eg: 2022-02-08T11:30:48+00:00
>>>>>>> 13be2a602d4938a08d589eb5327bcb59856e7972
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0xB24c59eCd6444c446707e693971aF5d78321F93a"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = ["0xB24c59eCd6444c446707e693971aF5d78321F93a"]; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
<<<<<<< HEAD
const GENERIC_DESCRIPTION = "Which Pixel Art do you want to get?"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafkreif2li5imuivtby5vvdobp2jsmlveadzqcselm6kmg7u3ycy46ngsi"; // Replace with your generic image that will display for all NFTs pre-reveal.
=======
const GENERIC_DESCRIPTION = "Choose a Cat from the collection"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafkreiaa2efgztmu3xqevyke47ftqr7wqejdkdwovs65azh7jtp4w4imie"; // Replace with your generic image that will display for all NFTs pre-reveal.
>>>>>>> 13be2a602d4938a08d589eb5327bcb59856e7972

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
