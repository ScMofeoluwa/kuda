import { IConfig } from "../interfaces";
import KudaRequest from "./base.resource";

class Savings extends KudaRequest {
  constructor(private options: IConfig) {
    super({ ...options });
  }
}

export default Savings;
