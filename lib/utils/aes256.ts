import crypto from "crypto";

const aesAlgorithm = "aes-256-cbc";

const generatePasswordBasedKey = (password: string) =>
  new Promise((resolve, reject) => {
    crypto.pbkdf2(password, "randomsalt", 1000, 256, "sha1", (err, key) => {
      if (err) reject(err);
      resolve(key);
    });
  });

export const encrypt = async (data: any, password: string) => {
  const _passkey = (await generatePasswordBasedKey(password)) as Buffer;
  let cipherKey = Buffer.from(_passkey.subarray(0, 32));
  let iv = _passkey.subarray(0, 16);
  const cipher = await crypto.createCipheriv(aesAlgorithm, cipherKey, iv);
  let encryptedData = cipher.update(JSON.stringify(data));
  return Buffer.concat([encryptedData, cipher.final()]).toString("base64");
};

export const decrypt = async (data: any, password: string) => {
  const _passkey = (await generatePasswordBasedKey(password)) as Buffer;
  let decipherKey = Buffer.from(_passkey.subarray(0, 32));
  let iv = _passkey.subarray(0, 16);
  const decipher = await crypto.createDecipheriv(aesAlgorithm, decipherKey, iv);
  let decrypted = decipher.update(Buffer.from(data, "base64"));
  return Buffer.concat([decrypted, decipher.final()]).toString();
};
