import Script from "next/script";
import ClientProvider from "./ClientProvider";
import "../styles/global.css";
import "../styles/components/yearDropdown.css";
import "../styles/components/withTable.css";

// Force all pages to be dynamically rendered (no static prerendering)
// This prevents SSR issues with document/window references in CRA-migrated code
export const dynamic = "force-dynamic";

export const metadata = {
  title: "| TSG",
  description:
    "Historic collaboration between IIT Kharagpur and University of Cambridge for the Gaia Platform. Inaugural event of the 2nd phase of the International Software Derby organized by 1 Earth Holdings Inc.",
  icons: {
    icon: "/data/media/images/general/gymkhanaLogo.png",
    apple: "/logo192.png",
  },
  openGraph: {
    type: "article",
    url: "https://gymkhana.iitkgp.ac.in/events/gaia-2025",
    title:
      "IIT Kharagpur - University of Cambridge Collaboration for Gaia Platform",
    description:
      "Historic collaboration between IIT Kharagpur and University of Cambridge for the Gaia Platform. Inaugural event of the 2nd phase of the International Software Derby organized by 1 Earth Holdings Inc.",
    images: [
      {
        url: "https://gymkhana.iitkgp.ac.in/data/media/images/events/Gaia_Platform_KGP-Cambridge_Collab_thumb.JPEG",
        width: 1200,
        height: 675,
        alt: "IIT Kharagpur - University of Cambridge Collaboration for Gaia Platform",
      },
    ],
    siteName: "Technology Students' Gymkhana - IIT Kharagpur",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    url: "https://gymkhana.iitkgp.ac.in/events/gaia-2025",
    title:
      "IIT Kharagpur - University of Cambridge Collaboration for Gaia Platform",
    description:
      "Historic collaboration between IIT Kharagpur and University of Cambridge for the Gaia Platform. Inaugural event of the 2nd phase of the International Software Derby.",
    images: [
      "https://gymkhana.iitkgp.ac.in/data/media/images/events/Gaia_Platform_KGP-Cambridge_Collab_thumb.JPEG",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <Script
          src="https://kit.fontawesome.com/361a60d601.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FVQPEQMVHD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FVQPEQMVHD');
          `}
        </Script>
      </head>
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
