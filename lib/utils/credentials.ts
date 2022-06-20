import crypto from "crypto";

export const getPassword = (clientKey: string) => {
  const randomString = crypto.randomBytes(8).toString("hex");
  return `${clientKey}-${randomString}`;
};
