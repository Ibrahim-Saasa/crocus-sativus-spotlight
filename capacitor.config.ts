import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.80577687db5945ec8d74e5a4a04d77f9',
  appName: 'crocus-sativus-spotlight',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: "https://80577687-db59-45ec-8d74-e5a4a04d77f9.lovableproject.com?forceHideBadge=true",
    cleartext: true
  }
};

export default config;