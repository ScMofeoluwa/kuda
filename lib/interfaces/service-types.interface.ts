export enum serviceTypeEnums {
  BANK_LIST = "BANK_LIST",

  NAME_ENQUIRY = "NAME_ENQUIRY",
  ADMIN_RETRIEVE_MAIN_ACCOUNT_BALANCE = "ADMIN_RETRIEVE_MAIN_ACCOUNT_BALANCE",

  ADMIN_MAIN_ACCOUNT_FILTERED_TRANSACTIONS = "ADMIN_MAIN_ACCOUNT_FILTERED_TRANSACTIONS",
  ADMIN_MAIN_ACCOUNT_TRANSACTIONS = "ADMIN_MAIN_ACCOUNT_TRANSACTIONS",
  TRANSACTION_STATUS_QUERY = "TRANSACTION_STATUS_QUERY",
  SINGLE_FUND_TRANSFER = "SINGLE_FUND_TRANSFER",

  // Virtual Accounts

  ADMIN_VIRTUAL_ACCOUNT_FILTERED_TRANSACTIONS = "ADMIN_VIRTUAL_ACCOUNT_FILTERED_TRANSACTIONS",
  ADMIN_RETRIEVE_SINGLE_VIRTUAL_ACCOUNT = "ADMIN_RETRIEVE_SINGLE_VIRTUAL_ACCOUNT",
  ADMIN_VIRTUAL_ACCOUNT_TRANSACTIONS = "ADMIN_VIRTUAL_ACCOUNT_TRANSACTIONS",
  ADMIN_CREATE_VIRTUAL_ACCOUNT = "ADMIN_CREATE_VIRTUAL_ACCOUNT",
  RETRIEVE_VIRTUAL_ACCOUNT_BALANCE = "RETRIEVE_VIRTUAL_ACCOUNT_BALANCE",
  WITHDRAW_VIRTUAL_ACCOUNT = "WITHDRAW_VIRTUAL_ACCOUNT",
  RETRIEVE_SINGLE_VIRTUAL_ACCOUNT = "RETRIEVE_SINGLE_VIRTUAL_ACCOUNT",
  FUND_VIRTUAL_ACCOUNT = "FUND_VIRTUAL_ACCOUNT",
  VIRTUAL_ACCOUNT_FUND_TRANSFER = "VIRTUAL_ACCOUNT_FUND_TRANSFER",
  UPDATE_VIRTUAL_ACCOUNT_LIMIT = "UPDATE_VIRTUAL_ACCOUNT_LIMIT",

  // Plain Savings

  CREATE_PLAIN_SAVINGS = "CREATE_PLAIN_SAVINGS",
  GET_PLAIN_SAVINGS = "GET_PLAIN_SAVINGS",
  GET_ALL_CUSTOMER_PLAIN_SAVINGS = "GET_ALL_CUSTOMER_PLAIN_SAVINGS",
  RETRIEVE_PLAIN_SAVINGS_TRANSACTIONS = "RETRIEVE_PLAIN_SAVINGS_TRANSACTIONS",
  UPDATE_PLAIN_SAVINGS = "UPDATE_PLAIN_SAVINGS",
  PLAIN_SAVINGS_TRANSACTIONS = "PLAIN_SAVINGS_TRANSACTIONS",
}
