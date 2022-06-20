// @ts-ignore
import JsEncrypt from "node-jsencrypt";
// @ts-ignore
import RSAXML from "rsa-xml";
import { parsePublicKey } from ".";

export const encryptCredential = (publicKey: string, password: string) => {
  publicKey = parsePublicKey(publicKey);
  const encrypt = new JsEncrypt();
  encrypt.setPublicKey(publicKey);
  return encrypt.encrypt(password);
};

export const decryptCredential = (password: string, privateKey: string) => {
  const rsa = new RSAXML();
  rsa.importKey(privateKey);
  return rsa.decrypt(password).toString();
};
