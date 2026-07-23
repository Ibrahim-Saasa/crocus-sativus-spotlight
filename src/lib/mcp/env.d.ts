// Ambient declaration for the Deno runtime env accessed by MCP tools.
// This folder is bundled into a Supabase Edge Function by the mcp-js Vite
// plugin; it is not part of the browser bundle.
declare const process: { env: Record<string, string | undefined> };