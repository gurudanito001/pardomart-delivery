import api from "./api";
import type { Wallet } from "../api-client/models/wallet";
import type { TransactionWithRelations } from "../api-client/models/transaction-with-relations";

async function getWallet(): Promise<Wallet> {
  const walletApi = api.getWalletApi();
  const resp = await walletApi.walletMeGet();
  return resp.data as Wallet;
}

async function getTransactions(): Promise<TransactionWithRelations[]> {
  const walletApi = api.getWalletApi();
  const resp = await walletApi.walletMeTransactionsGet();
  return resp.data as TransactionWithRelations[];
}

export default {
  getWallet,
  getTransactions,
};


