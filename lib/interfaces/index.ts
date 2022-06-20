import * as axios from "axios";

export interface IConfig {
  privateKey: string;
  publicKey: string;
  clientKey: string;
  isProduction: boolean;
}

export type HttpMethods = "get" | "post" | "put";

export interface IAxiosPayload extends axios.AxiosRequestConfig {}

export interface IkudaResponseData {
  password: string;
  data: string;
}

export interface IkudaRequestData {}
