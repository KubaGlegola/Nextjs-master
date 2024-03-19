import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "@/ui/organism/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Store",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={inter.className}>
					<header className="sticky top-0 z-20 border-b bg-white bg-opacity-60 backdrop-blur-lg">
						<Navbar />
					</header>
					<div className="mx-auto max-w-lg p-4 md:max-w-4xl lg:max-w-7xl ">{children}</div>
				</body>
			</html>
		</ClerkProvider>
	);
}
