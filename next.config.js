/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},

	images: {
		domains: ["cdnb.artstation.com"],
	},
};

module.exports = nextConfig;
