import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const FrontendLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default FrontendLayout;
