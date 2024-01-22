/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "sap.github.io",
				protocol: "https",
				port: "",
			},
		],
	},
};

export default nextConfig;
