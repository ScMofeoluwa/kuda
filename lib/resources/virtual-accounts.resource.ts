import { IConfig, IkudaResponseData } from "../interfaces";
import KudaRequest from "./base.resource";
import { serviceTypeEnums } from "../interfaces/service-types.interface";

class VirtualAccounts extends KudaRequest {
  constructor(private options: IConfig) {
    super({ ...options });
  }

  private getTrackingReference({ lastName, firstName, email }: { lastName: string; firstName: string; email: string }) {
    return this.generateTrackingReference(lastName, firstName, email);
  }

  async getOne(data: { email: string; lastName: string; firstName: string }) {
    const trackingReference = this.getTrackingReference(data);
    return (await this.request({
      serviceType: serviceTypeEnums.ADMIN_RETRIEVE_SINGLE_VIRTUAL_ACCOUNT,
      requestRef: this.generateRequestReference(),
      data: {
        trackingReference,
      },
    })) as IkudaResponseData;
  }

  async getBalance(data: { email: string; lastName: string; firstName: string }) {
    const trackingReference = this.getTrackingReference(data);
    return (await this.request({
      serviceType: serviceTypeEnums.RETRIEVE_VIRTUAL_ACCOUNT_BALANCE,
      requestRef: this.generateRequestReference(),
      data: {
        trackingReference,
      },
    })) as IkudaResponseData;
  }

  async create(data: { email: string; phoneNumber: string; lastName: string; firstName: string }) {
    return (await this.request({
      serviceType: serviceTypeEnums.ADMIN_CREATE_VIRTUAL_ACCOUNT,
      requestRef: this.generateRequestReference(),
      data: { ...data, trackingReference: this.generateTrackingReference(data.lastName, data.firstName, data.email) },
    })) as IkudaResponseData;
  }

  async transactions(data: { email: string; lastName: string; firstName: string }) {
    const trackingReference = this.getTrackingReference(data);
    return (await this.request({
      serviceType: serviceTypeEnums.ADMIN_VIRTUAL_ACCOUNT_TRANSACTIONS,
      requestRef: this.generateRequestReference(),
      data: { trackingReference, pageSize: 1, pageNumber: 1 },
    })) as IkudaResponseData;
  }

  //yet to figure out the datetype
  async filterTransactions(data: {
    email: string;
    lastName: string;
    firstName: string;
    startDate: string;
    endDate: string;
  }) {
    const trackingReference = this.generateTrackingReference(data.lastName, data.email, data.firstName);
    return (await this.request({
      serviceType: serviceTypeEnums.ADMIN_VIRTUAL_ACCOUNT_FILTERED_TRANSACTIONS,
      requestRef: this.generateRequestReference(),
      data: { trackingReference, pageSize: 1, pageNumber: 1, startDate: data.startDate, endDate: data.endDate },
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
