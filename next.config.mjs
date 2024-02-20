/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
	images: {
		domains: ["naszsklep-api.vercel.app", "static-ourstore.hyperfunctor.com"],
	},
	redirects: async () => {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: false,
			},
			{
				source: "/categories/:category",
				destination: "/categories/:category/1",
				permanent: false,
			},
		];
	},
};

export default nextConfig;
