import { IConfig } from "./interfaces";
import Banks from "./resources/banks.resource";

class Kuda {
  public bank: Banks;
  private options: IConfig;

  constructor(
    private publicKey: string,
    private privateKey: string,
    private clientKey: string,
    private isProduction: boolean = false,
  ) {
    this.options = { publicKey, privateKey, clientKey, isProduction };
    this.bank = new Banks(this.options);
  }
}

export default Kuda;
