import { IConfig, IkudaResponseData } from "../interfaces";
import { serviceTypeEnums } from "../interfaces/service-types.interface";
import KudaRequest from "./base.resource";

class MainAccount extends KudaRequest {
  constructor(private options: IConfig) {
    super({ ...options });
  }

  async transfer(data: {
    beneficiaryBankCode: string;
    beneficiaryAccount: string;
    beneficiaryName: string;
    amount: number;
    narration: string;
    nameEnquirySessionID: string;
    senderName: string;
  }) {
    return (await this.request({
      serviceType: serviceTypeEnums.SINGLE_FUND_TRANSFER,
      requestRef: this.generateRequestReference(),
      data: data,
    })) as IkudaResponseData;
  }

  async getBalance() {
    return (await this.request({
      serviceType: serviceTypeEnums.ADMIN_RETRIEVE_MAIN_ACCOUNT_BALANCE,
      requestRef: this.generateRequestReference(),
    })) as IkudaResponseData;
  }

  async getTransactions() {
    return (await this.request({
      serviceType: serviceTypeEnums.ADMIN_MAIN_ACCOUNT_TRANSACTIONS,
      requestRef: this.generateRequestReference(),
      data: { pageSize: 1, pageNumber: 1 },
    })) as IkudaResponseData;
  }

  async filterTransactions(data: { startDate: string; endDate: string }) {
    // date string must be ISO 8601 Extended format
    return (await this.request({
      serviceType: serviceTypeEnums.ADMIN_MAIN_ACCOUNT_FILTERED_TRANSACTIONS,
      requestRef: this.generateRequestReference(),
      data: { ...data, pageSize: 1, pageNumber: 1 },
    })) as IkudaResponseData;
  }
}

export default MainAccount;
