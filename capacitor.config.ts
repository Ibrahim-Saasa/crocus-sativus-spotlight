import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.lovable.crocussativus",
  appName: "crocus-sativus-spotlight",
  webDir: "dist",
  bundledWebRuntime: false,
  server: {
    url: "https://80577687-db59-45ec-8d74-e5a4a04d77f9.lovableproject.com?forceHideBadge=true",
    cleartext: true,
  },
};

export default config;
