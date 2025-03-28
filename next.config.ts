import type { Config } from 'tailwindcss'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Disable TypeScript build errors overlay
  typescript: {
    ignoreBuildErrors: true
  },  
  
  // Webpack configuration to remove development overlay
  webpack: (config, { dev }) => {
    if (dev) {
      // Ensure devServer is properly typed
      config.devServer = {
        ...config.devServer,
        client: {
          overlay: false
        }
      }
    }
    return config
  }
}

export default nextConfig