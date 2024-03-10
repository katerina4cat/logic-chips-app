import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react({ tsDecorators: true })],
    server: {
        host: true,
        port: 8443,
        https: {
            key: fs.readFileSync("./ssl/key.key"),
            cert: fs.readFileSync("./ssl/certificate.pem"),
        },
    },
});
