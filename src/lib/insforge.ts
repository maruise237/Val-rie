import { createClient } from '@insforge/sdk';

const baseUrl = process.env.NEXT_PUBLIC_INSFORGE_URL || 'https://9kn7a58r.us-east.insforge.app';
const anonKey = process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY || 'ik_db4b5ef1b0e8210c33dbf12dd33b1432';

export const insforge = createClient({
  baseUrl,
  anonKey,
});

// Helper for Auth
export const auth = insforge.auth;

// Helper for Database
export const db = insforge.database;
