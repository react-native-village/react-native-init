declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MORALIS_API_KEY: string;
      POLYGON_TESTNET_RPC_PROVIDER: string;
      PRIVATE_SECRET_KEY_1?: string;
      PRIVATE_SECRET_KEY_2?: string;
    }
  }
}

export {};
