/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'hvgusjfevfbhfminbmtc.supabase.co',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'www.gravatar.com',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;