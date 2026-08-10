/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export' se retiró: el agente de IA usa una función serverless (/api/chat).
  images: { unoptimized: true },
};

export default nextConfig;
