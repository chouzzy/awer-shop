import type { Metadata } from "next";
import Provider from "./providers"
import { CartDrawer } from "../components/layout/Section/CartDrawer";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Awer Shop",
  description: "A maior loja tech do país",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          {children}
          <CartDrawer/>
        </Provider>
      </body>
    </html>
  );
}
