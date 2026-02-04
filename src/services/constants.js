// BAYC contract addresses on Ethereum mainnet
export const CONTRACTS = {
  BAYC: '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
  MAYC: '0x60E4d786628Fea6478F785A6d7e704777c86a7c6',
  BAKC: '0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623',
  OTHERSIDE: '0x34d85c9CDeB23FA97cb08333b511ac86E1C4E258',
};

// Membership granting contracts (BAYC + MAYC)
export const MEMBERSHIP_CONTRACTS = [CONTRACTS.BAYC, CONTRACTS.MAYC];

// Chain configuration
export const CHAIN_ID = 1; // Ethereum mainnet

// External URLs
export const EXTERNAL_URLS = {
  STORE: 'https://store.boredapeyachtclub.com',
  OPENSEA_BAYC: 'https://opensea.io/collection/boredapeyachtclub',
  OPENSEA_MAYC: 'https://opensea.io/collection/mutant-ape-yacht-club',
};
