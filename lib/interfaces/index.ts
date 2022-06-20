import * as axios from "axios";
import { serviceTypeEnums } from "./service-types.interface";

export interface IConfig {
  privateKey: string;
  publicKey: string;
  clientKey: string;
  isProduction: boolean;
}

export type HttpMethods = "get" | "post" | "put";

export interface IAxiosPayload extends axios.AxiosRequestConfig {}

export interface IkudaEncryptedResponseData {
  password: string;
  data: string;
}

export interface IkudaResponseData {
  Status: boolean;
  Message: string;
  Data: any;
}

export interface IkudaRequestData {
  serviceType: serviceTypeEnums;
  requestRef: string;
  data?: any;
}
