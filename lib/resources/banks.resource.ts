import { IConfig, IkudaResponseData } from "../interfaces";
import KudaRequest from "./base.resource";
import { serviceTypeEnums } from "../interfaces/service-types.interface";

class Banks extends KudaRequest {
  constructor(private options: IConfig) {
    super({ ...options });
  }

  async list() {
    return (await this.request({
      serviceType: serviceTypeEnums.BANK_LIST,
      requestRef: this.generateRequestReference(),
    })) as IkudaResponseData;
  }

  async confirmTransferRecipient(data: {
    beneficiaryAccountNumber: string;
    beneficiaryBankCode: string;
    isRequestFromVirtualAccount: boolean;
    SenderTrackingReference?: string;
  }) {
    if (data.isRequestFromVirtualAccount && !data.SenderTrackingReference) {
      throw Error("'sender tracking reference' is required");
    }

    const payload = data.isRequestFromVirtualAccount
      ? data
      : // @ts-ignore
        Object.keys(data).reduce((acc, curr) => {
          // @ts-ignore
          if (curr !== "SenderTrackingReference") return { ...acc, [curr]: data[curr] };
        }, {});
    return (await this.request({
      serviceType: serviceTypeEnums.NAME_ENQUIRY,
      requestRef: this.generateRequestReference(),
      data: {},
    })) as IkudaResponseData;
  }
}

export default Banks;
