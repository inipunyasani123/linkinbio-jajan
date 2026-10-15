import { Baloo_2 } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({ subsets: ["latin"], variable: "--font-baloo", weight: ["500", "600", "700", "800"] });

const __jsonld = {"@context":"https://schema.org","@type":"FoodEstablishment","name":"Jajanan Bu Rina","description":"Jajanan pasar & rice bowl rumahan","url":"https://linkinbio-jajan.pintuweb.id","areaServed":"ID"};

export const metadata = {
  metadataBase: new URL("https://linkinbio-jajan.pintuweb.id"),
  title: { default: "Jajanan Bu Rina — Jajanan Pasar & Rice Bowl, Bandung", template: "%s — Jajanan Bu Rina" },
  description: "Tautan Jajanan Bu Rina di Bandung: papan buka/tutup menurut jam WIB, menu lengkap, menu baru mingguan, lokasi gerobak, serta PO snack box dan hampers untuk acara.",
  applicationName: "Jajanan Bu Rina",
  keywords: ["jajanan pasar bandung", "rice bowl murah", "snack box acara", "hampers kue", "link in bio warung"],
  authors: [{ name: "Jajanan Bu Rina" }],
  creator: "Jajanan Bu Rina",
  publisher: "Jajanan Bu Rina",
  alternates: { canonical: "https://linkinbio-jajan.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://linkinbio-jajan.pintuweb.id",
    siteName: "Jajanan Bu Rina",
    title: "Jajanan Bu Rina — Jajanan Pasar & Rice Bowl, Bandung",
    description: "Tautan Jajanan Bu Rina di Bandung: papan buka/tutup menurut jam WIB, menu lengkap, menu baru mingguan, lokasi gerobak, serta PO snack box dan hampers untuk acara.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Jajanan Bu Rina — Jajanan Pasar & Rice Bowl, Bandung" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jajanan Bu Rina — Jajanan Pasar & Rice Bowl, Bandung",
    description: "Tautan Jajanan Bu Rina di Bandung: papan buka/tutup menurut jam WIB, menu lengkap, menu baru mingguan, lokasi gerobak, serta PO snack box dan hampers untuk acara.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${baloo.variable}`}>
      <body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 16px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Situs demo buatan PintuWeb — nama dan isinya rekaan.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=jajan" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Buat yang seperti ini →</a>
        </aside>
        </body>
    </html>
  );
}
