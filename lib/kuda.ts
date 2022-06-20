import { IConfig } from "./interfaces";
import Banks from "./resources/banks.resource";
import MainAccount from "./resources/main-account.resource";
import Savings from "./resources/savings.resource";
import VirtualAccounts from "./resources/virtual-accounts.resource";

class Kuda {
  public bank: Banks;
  public mainAccount: MainAccount;
  public savings: Savings;
  public virtualAccount: VirtualAccounts;
  private options: IConfig;

  constructor(
    private publicKey: string,
    private privateKey: string,
    private clientKey: string,
    private isProduction: boolean = false,
  ) {
    this.options = { publicKey, privateKey, clientKey, isProduction };
    this.bank = new Banks(this.options);
    this.mainAccount = new MainAccount(this.options);
    this.savings = new Savings(this.options);
    this.virtualAccount = new VirtualAccounts(this.options);
  }
}

export default Kuda;
