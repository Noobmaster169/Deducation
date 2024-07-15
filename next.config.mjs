/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    missingSuspenseWithCSRBailout: false,
    images: {
      domains: ['picsum.photos']
    }
};

export default nextConfig;
