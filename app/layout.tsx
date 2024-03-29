import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "User Access Review",
	description: "User Access Review",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} overflow-hidden`}>{children}</body>
		</html>
	);
}
