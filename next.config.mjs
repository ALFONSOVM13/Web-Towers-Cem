/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ["src/app/(website)"],
  },
  images: {
    remotePatterns: [
      {
          protocol: 'https',
          hostname: 'tonsanzjimz-s3.s3.us-east-2.amazonaws.com',
      }
  ],
  },
};

export default nextConfig;