import path from 'path'; // Node.js built-in: resolve absolute paths
import type { NextConfig } from 'next'; // Type for the config object

// nextConfig — Next.js application configuration
// See: https://nextjs.org/docs/app/api-reference/next-config-js
const nextConfig: NextConfig = {
  turbopack: {
    // root: tells Turbopack where this project's workspace root is.
    // Prevents the "multiple lockfiles" warning that appears when a package-lock.json
    // exists in a parent directory (e.g., the monorepo root).
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
