import { IConfig } from "../interfaces";
import KudaRequest from "./base.resource";

class MainAccount extends KudaRequest {
  constructor(private options: IConfig) {
    super({ ...options });
  }
}

export default MainAccount;
