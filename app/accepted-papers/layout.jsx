import { Inter } from "next/font/google";

export const metadata = {
    title: "CALDAM 2025 | Conference on Algorithms and Discrete Applied Mathematics",
    description:
        "11th Annual International Conference on Algorithms and Discrete Applied Mathematics.",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}