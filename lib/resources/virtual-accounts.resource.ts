import { IConfig, IkudaResponseData } from "../interfaces";
import KudaRequest from "./base.resource";
import { serviceTypeEnums } from "../interfaces/service-types.interface";

class VirtualAccounts extends KudaRequest {
  constructor(private options: IConfig) {
    super({ ...options });
  }

  async getOne(data: { trackingReference: string }) {
    return (await this.request({
      serviceType: serviceTypeEnums.ADMIN_RETRIEVE_SINGLE_VIRTUAL_ACCOUNT,
      requestRef: this.generateRequestReference(),
      data: data,
    })) as IkudaResponseData;
  }

  async getBalance(data: { trackingReference: string }) {
    return (await this.request({
      serviceType: serviceTypeEnums.RETRIEVE_VIRTUAL_ACCOUNT_BALANCE,
      requestRef: this.generateRequestReference(),
      data: data,
    })) as IkudaResponseData;
  }

  async create(data: { email: string; phoneNumber: string; lastName: string; firstName: string }) {
    return (await this.request({
      serviceType: serviceTypeEnums.ADMIN_CREATE_VIRTUAL_ACCOUNT,
      requestRef: this.generateRequestReference(),
      data: { ...data, trackingReference: this.generateTrackingReference(data.lastName, data.firstName, data.email) },
    })) as IkudaResponseData;
  }

  async transactions(data: { trackingReference: string }) {
    return (await this.request({
      serviceType: serviceTypeEnums.ADMIN_VIRTUAL_ACCOUNT_TRANSACTIONS,
      requestRef: this.generateRequestReference(),
      data: { ...data, pageSize: 1, pageNumber: 1 },
    })) as IkudaResponseData;
  }

  async filterTransactions(data: { trackingReference: string; startDate: string; endDate: string }) {
    // date string must be ISO 8601 Extended format
    return (await this.request({
      serviceType: serviceTypeEnums.ADMIN_VIRTUAL_ACCOUNT_FILTERED_TRANSACTIONS,
      requestRef: this.generateRequestReference(),
      data: { ...data, pageSize: 1, pageNumber: 1 },
    })) as IkudaResponseData;
  }

  async fund(data: { amount: number; narration: string; trackingReference: string }) {
    return (await this.request({
      serviceType: serviceTypeEnums.FUND_VIRTUAL_ACCOUNT,
      requestRef: this.generateRequestReference(),
      data: data,
    })) as IkudaResponseData;
  }

  async withdraw(data: { amount: number; narration: string; trackingReference: string }) {
    return (await this.request({
      serviceType: serviceTypeEnums.WITHDRAW_VIRTUAL_ACCOUNT,
      requestRef: this.generateRequestReference(),
      data: data,
    })) as IkudaResponseData;
  }
}

export default VirtualAccounts;
