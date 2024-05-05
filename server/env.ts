const fs = require("fs");
export const path = __dirname;
const cert = fs.readFileSync(path + process.env.CERTIFICATE_CERT_FILE, "utf-8");
const key = fs.readFileSync(path + process.env.CERTIFICATE_KEY_FILE, "utf-8");
export const credentials = {
    key: key,
    cert: cert,
};
