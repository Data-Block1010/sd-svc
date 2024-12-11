// "use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Provider from "@/config/provider";
import Head from "next/head";

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
      <Head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HXXSNQJR38"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HXXSNQJR38');
            `,
          }}
        ></script>
      </Head>
      <body className={inter.className}>
        <Provider>
          <Suspense>{children}</Suspense>
        </Provider>
      </body>
    </html>
  );
}
