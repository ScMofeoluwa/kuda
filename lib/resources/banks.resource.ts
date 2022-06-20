import { IConfig } from "../interfaces";
import KudaRequest from "./base.resource";
import { serviceTypeEnums } from "../interfaces/service-types.interface";

class Banks extends KudaRequest {
  constructor(private options: IConfig) {
    super({ ...options });
  }

  async list() {
    return await this.request({ serviceType: serviceTypeEnums.BANK_LIST, requestRef: this.generateRequestReference() });
  }
}

export default Banks;
