import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.normalize(path.join(__dirname + "/../.env")) });

import Kuda from "./kuda";

const { KUDA_PUBLIC_KEY: publicKey, KUDA_PRIVATE_KEY: privateKey, KUDA_CLIENT_KEY: clientKey } = process.env;

const client = new Kuda(publicKey!, privateKey!, clientKey!);

(async () => {
  console.log(
    (
      await client.virtualAccount.getBalance({
        trackingReference: "",
      })
    ).Data,
  );
})();
