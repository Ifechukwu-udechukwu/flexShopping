import { Outfit } from "next/font/google";
import StoreProvider from "@/app/StoreProvider";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
    title: "FlexShopping. - Shop smarter",
    description: "FlexShopping. - Shop smarter",
    viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${outfit.className} antialiased`}>
                    <StoreProvider>

                        <Toaster  position="top-center"  reverseOrder={false} />

                        {children}
                    </StoreProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
