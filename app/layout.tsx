// "use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Provider from "@/config/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guard Zero",
  description: `Guard Zero DApp offers significant market opportunities across Africa by providing secure and efficient solutions for financial institutions,
                educational entities, and healthcare providers. 

                The platform enhances KYC processes for financial services, ensures the authenticity of academic credentials in education, and securely manages patient data in healthcare.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Suspense>{children}</Suspense>
        </Provider>
      </body>
    </html>
  );
}
