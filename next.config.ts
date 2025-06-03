import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    distDir:'dist',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/dk9ktxdpj/image/upload/**',
            },]
    }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);