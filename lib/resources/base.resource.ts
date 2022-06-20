import axios from "axios";
import crypto from "crypto";
import { getPassword } from "../utils/credentials";
import { decryptCredential, encryptCredential } from "../utils/rsa";
import { HttpMethods, IAxiosPayload, IConfig, IkudaRequestData, IkudaEncryptedResponseData } from "../interfaces";
import { decrypt, encrypt } from "../utils/aes256";

class KudaRequest {
  private password: string;
  private baseUrl: string;
  constructor(private config: IConfig) {
    this.password = getPassword(this.config.clientKey);
    this.baseUrl = this.getBaseUrl();
  }

  private async _makeRequest(payload: IAxiosPayload) {
    const headers = await this._getHeader();
    const body = await this._getBody(payload);
    try {
      const { data: responseData }: { data: IkudaEncryptedResponseData } = await axios.post(
        this.baseUrl,
        { data: body },
        { headers: headers },
      );

      return JSON.parse(await this.decryptPayload(responseData.data, responseData.password));
    } catch (error) {
      console.log(error);
    }
  }

  private async _getHeader() {
    return { password: await encryptCredential(this.config.publicKey, this.password) };
  }

  private getBaseUrl() {
    return this.config.isProduction ? "https://kuda-openapi.kuda.com/v1" : "https://kuda-openapi-uat.kudabank.com/v1";
  }

  private async _getBody(data: any) {
    // encrypts request body
    return await encrypt(data, this.password);
  }

  private async decryptPayload(data: string, password: string) {
    const decryptedPassword = await decryptCredential(password, this.config.privateKey);
    return await decrypt(data, decryptedPassword);
  }

  protected async request(data: IkudaRequestData) {
    return await this._makeRequest(data);
  }

  protected generateRequestReference() {
    return crypto.randomUUID();
  }

  protected generateTrackingReference(lastName: string, firstName: string, email: string) {
    (email = email.slice(0, 2)), (lastName = lastName.slice(0, 3)), (firstName = firstName.slice(0, 5));
    return `${email}$${lastName}$${firstName}`;
  }
}

export default KudaRequest;
