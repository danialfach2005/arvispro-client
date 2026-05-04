/**
 * Centralized Environment Variables Configuration
 * 
 * Manfaat:
 * 1. Validasi saat runtime/build time
 * 2. Type-safety dengan TypeScript
 * 3. Fallback default value yang jelas
 */

interface EnvConfig {
  apiUrl: string;
  isProduction: boolean;
  isDevelopment: boolean;
}

// Helper untuk mengambil env dengan fallback default
const getEnv = (key: keyof ImportMetaEnv, defaultValue: string): string => {
  const value = import.meta.env[key];
  if (!value) {
    console.warn(`[Env] Peringatan: Environment variable ${key} tidak ditemukan. Menggunakan fallback: ${defaultValue}`);
    return defaultValue;
  }
  return value;
};

export const ENV: EnvConfig = {
  // Gunakan getEnv untuk validasi
  apiUrl: getEnv('VITE_GRAPHQL_ENDPOINT', 'https://api.arvispro.com/graphql'),
  
  // Flag environment default dari Vite
  isProduction: import.meta.env.PROD,
  isDevelopment: import.meta.env.DEV,
};

export default ENV;
