import { IConfig, IkudaResponseData } from "../interfaces";
import KudaRequest from "./base.resource";
import { serviceTypeEnums } from "../interfaces/service-types.interface";

class VirtualAccounts extends KudaRequest {
  constructor(private options: IConfig) {
    super({ ...options });
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

  private getTrackingReference({ lastName, firstName, email }: { lastName: string; firstName: string; email: string }) {
    return this.generateTrackingReference(lastName, firstName, email);
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

  async transactions() {}

  async filterTransactions() {}

  async fund() {}

  async withdraw() {}
}

export default VirtualAccounts;
