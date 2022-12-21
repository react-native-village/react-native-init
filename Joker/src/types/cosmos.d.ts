export enum CosmosTxV1beta1ModeInfoSingle {
  SIGN_MODE_UNSPECIFIED = 'SIGN_MODE_UNSPECIFIED',
  SIGN_MODE_DIRECT = 'SIGN_MODE_DIRECT',
  SIGN_MODE_TEXTUAL = 'SIGN_MODE_TEXTUAL',
  SIGN_MODE_LEGACY_AMINO_JSON = 'SIGN_MODE_LEGACY_AMINO_JSON',
}

export interface CosmosTxV1beta1ModeInfoMulti {
  bitarray: {
    extra_bits_stored: number;
    elems: string;
  };
  mode_infos: Array<CosmosTxV1beta1ModeInfo>;
}

export interface CosmosTxV1beta1ModeInfo {
  single: CosmosTxV1beta1ModeInfoSingle;
  multi: CosmosTxV1beta1ModeInfoMulti;
}

export interface CosmosTxV1beta1SignerInfo {
  public_key: {
    type_url: string;
    value: string;
  };
  mode_info: CosmosTxV1beta1ModeInfo;
  sequence: string;
}

export interface CosmosTxAmount {
  denom: string;
  amount: string;
}

export interface CosmosTxV1beta1AuthInfo {
  signer_infos: Array<CosmosTxV1beta1SignerInfo>;
  fee: {
    amount: Array<CosmosTxAmount>;
    gas_limit: string;
    payer: string;
    granter: string;
  };
}

export interface CosmosTxV1beta1TxMsgDelegate {
  '@type': '/cosmos.staking.v1beta1.MsgDelegate';
  delegator_address: string;
  validator_address: string;
  amount: CosmosTxAmount;
}

export interface CosmosTxV1beta1TxExtensionOptionsWeb3Tx {
  '@type': '/ethermint.types.v1.ExtensionOptionsWeb3Tx';
  typed_data_chain_id: string;
  fee_payer: string;
  fee_payer_sig: string;
}

export type CosmosTxV1beta1TxMessages = CosmosTxV1beta1TxMsgDelegate;

export type CosmosTxV1beta1TxExtensionOptions =
  CosmosTxV1beta1TxExtensionOptionsWeb3Tx;

export interface CosmosTxV1beta1Tx {
  body: {
    messages: Array<CosmosTxV1beta1TxMessages>;
    memo: string;
    timeout_height: string;
    extension_options: Array<CosmosTxV1beta1TxExtensionOptions>;
    non_critical_extension_options: Array<{}>;
  };
  auth_info: CosmosTxV1beta1AuthInfo;
  signatures: Array<string>;
}

export interface CosmosTxV1beta1TxResponse {
  height: string;
  txhash: string;
  codespace: string;
  code: number;
  data: string;
  raw_log: string;
  logs: Array<{
    msg_index: number;
    log: string;
    events: Array<{
      type: string;
      attributes: Array<{
        key: string;
        value: string;
      }>;
    }>;
  }>;
  info: string;
  gas_wanted: string;
  gas_used: string;
  tx: {
    type_url: string;
    value: string;
  };
  timestamp: string;
}

export interface CosmosTxV1beta1GetTxResponse {
  tx: CosmosTxV1beta1Tx;
  tx_response: CosmosTxV1beta1TxResponse;
}
