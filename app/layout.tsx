import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
 title: 'Catatan Bintang | Desain Web Unik & Portofolio Kreatif',
  description: 'Ingin website yang keren dan fungsional? Catatan Bintang hadir dengan portofolio inspiratif dan jasa pembuatan situs yang sesuai kebutuhan Anda.',
  keywords: [
    'website portfolio tangerang',
    'jasa pembuatan website portfolio tangerang',
    'jasa pembuatan website di tangerang',
    'web developer indonesia',
    'portofolio web designer tangerang',
    'jasa website murah di tangerang',
    'desain website personal tangerang',
    'bikin website UMKM di tangerang',
    'freelancer web developer tangerang',
    'jasa frontend developer di tangerang',
    'pembuatan landing page di Tangerang',
    'pembuatan website bisnis lokal Tangerang'
  ],
  authors: [{ name: 'Bintang', url: 'https://catatanbintang.my.id' }],
  openGraph: {
    title: 'Bintang | Jasa Pembuatan Website & Portofolio',
    description: 'Portofolio dan layanan pembuatan website profesional oleh Bintang.',
    url: 'https://catatanbintang.my.id',
    siteName: 'Catatan Bintang',
    images: [
      {
        url: 'https://catatanbintang.my.id/images/preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Preview Website Bintang',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <Head>
        <meta name="google-site-verification" content=" google18f09ff0cdcb0c1e.html" />
      </Head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
