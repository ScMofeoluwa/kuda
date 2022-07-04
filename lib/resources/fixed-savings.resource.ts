import { IConfig, IkudaResponseData } from "../interfaces";
import { serviceTypeEnums } from "../interfaces/service-types.interface";
import KudaRequest from "./base.resource";

class FixedSavings extends KudaRequest {
  constructor(private options: IConfig) {
    super({ ...options });
  }

  async create(data: {
    SavingsTrackingReference: string;
    Name: string;
    VirtualAccountTrackingReference: string;
    Amount: number;
    Duration: number;
    StartNow: boolean;
    StartDate: string;
    IsInterestEarning: boolean;
  }) {
    return (await this.request({
      serviceType: serviceTypeEnums.CREATE_FIXED_SAVINGS,
      requestRef: this.generateRequestReference(),
      data,
    })) as IkudaResponseData;
  }

  async getOne(data: { TrackingReference: string }) {
    return (await this.request({
      serviceType: serviceTypeEnums.GET_FIXED_SAVINGS,
      requestRef: this.generateRequestReference(),
      data,
    })) as IkudaResponseData;
  }

  async getByCustomer(data: { PrimaryAccountNumber: string }) {
    return (await this.request({
      serviceType: serviceTypeEnums.GET_ALL_CUSTOMER_FIXED_SAVINGS,
      requestRef: this.generateRequestReference(),
      data,
    })) as IkudaResponseData;
  }

  async getAll() {
    return (await this.request({
      serviceType: serviceTypeEnums.GET_FIXED_SAVINGS,
      requestRef: this.generateRequestReference(),
      data: {},
    })) as IkudaResponseData;
  }

  async complete(data: { Amount: number; TrackingReference: string }) {
    return (await this.request({
      serviceType: serviceTypeEnums.COMPLETE_FIXED_SAVINGS_WITHDRAWAL,
      requestRef: this.generateRequestReference(),
      data: data,
    })) as IkudaResponseData;
  }

  async getTransactions(data: { TrackingReference: string }) {
    return (await this.request({
      serviceType: serviceTypeEnums.RETRIEVE_FIXED_SAVINGS_TRANSACTIONS,
      requestRef: this.generateRequestReference(),
      data: { ...data, PageSize: 1, PageNumber: 1 },
    })) as IkudaResponseData;
  }
}

export default FixedSavings;
