import { IConfig, IkudaResponseData } from "../interfaces";
import { serviceTypeEnums } from "../interfaces/service-types.interface";
import KudaRequest from "./base.resource";

class PlainSavings extends KudaRequest {
  constructor(private options: IConfig) {
    super({ ...options });
  }

  async getAll() {
    // all plain savings created by all your customers
    return (await this.request({
      serviceType: serviceTypeEnums.GET_PLAIN_SAVINGS,
      requestRef: this.generateRequestReference(),
      data: {},
    })) as IkudaResponseData;
  }

  async getOne(data: { TrackingReference: string }) {
    // a specific plain savings
    return (await this.request({
      serviceType: serviceTypeEnums.GET_PLAIN_SAVINGS,
      requestRef: this.generateRequestReference(),
      data,
    })) as IkudaResponseData;
  }

  async create(data: { SavingsTrackingReference: string; Name: string; VirtualAccountTrackingReference: string }) {
    return (await this.request({
      serviceType: serviceTypeEnums.CREATE_PLAIN_SAVINGS,
      requestRef: this.generateRequestReference(),
      data,
    })) as IkudaResponseData;
  }

  async getByCustomer(data: { PrimaryAccountNumber: string }) {
    // all plain savings on a customers account
    return (await this.request({
      serviceType: serviceTypeEnums.GET_ALL_CUSTOMER_PLAIN_SAVINGS,
      requestRef: this.generateRequestReference(),
      data,
    })) as IkudaResponseData;
  }

  async getTransactions(data: { TrackingReference: string }) {
    return (await this.request({
      serviceType: serviceTypeEnums.RETRIEVE_PLAIN_SAVINGS_TRANSACTIONS,
      requestRef: this.generateRequestReference(),
      data: { ...data, PageSize: 1, PageNumber: 1 },
    })) as IkudaResponseData;
  }

  async update(data: { TrackingReference: string; Status: number }) {
    return (await this.request({
      serviceType: serviceTypeEnums.UPDATE_PLAIN_SAVINGS,
      requestRef: this.generateRequestReference(),
      data,
    })) as IkudaResponseData;
  }

  async addFunds(data: { TrackingReference: string; Amount: number; Narration: string }) {
    // Transaction Type c - stands for credit
    return (await this.request({
      serviceType: serviceTypeEnums.PLAIN_SAVINGS_TRANSACTIONS,
      requestRef: this.generateRequestReference(),
      data: { ...data, TransactionType: "c" },
    })) as IkudaResponseData;
  }

  async removeFunds(data: { TrackingReference: string; Amount: number; Narration: string }) {
    // Transaction Type d - stands for debit
    return (await this.request({
      serviceType: serviceTypeEnums.PLAIN_SAVINGS_TRANSACTIONS,
      requestRef: this.generateRequestReference(),
      data: { ...data, TransactionType: "d" },
    })) as IkudaResponseData;
  }
}

export default PlainSavings;
