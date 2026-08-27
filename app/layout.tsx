import type { Metadata } from "next";
import "@fontsource/ibm-plex-sans-arabic/400.css";
import "@fontsource/ibm-plex-sans-arabic/500.css";
import "@fontsource/ibm-plex-sans-arabic/600.css";
import "@fontsource/ibm-plex-sans-arabic/700.css";
import "./globals.css";
import { Footer, Header, WhatsApp } from "@/components/site-shell";
import { MotionSystem } from "@/components/motion-system";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL("https://zadalqawafel.ly"),
  title: {
    default: "زاد القوافل | استيراد المواد الغذائية والمواشي واللحوم",
    template: "%s | زاد القوافل",
  },
  description: "زاد القوافل شركة ليبية مقرها طرابلس، متخصصة في استيراد المواد الغذائية والمواشي واللحوم وبناء علاقات توريد موثوقة تخدم احتياجات السوق الليبي.",
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
  openGraph: {
    title: "زاد القوافل | من المصدر إلى السوق، مسار موثوق",
    description: "شركة ليبية متخصصة في استيراد المواد الغذائية والمواشي واللحوم، وبناء علاقات توريد تربط المصادر المناسبة باحتياجات السوق الليبي.",
    url: "https://zadalqawafel.ly",
    siteName: "زاد القوافل",
    locale: "ar_LY",
    type: "website",
    images: [{
      url: "https://zadalqawafel.ly/opengraph-image.jpg",
      width: 1200,
      height: 630,
      alt: "زاد القوافل — من المصدر إلى السوق، مسار موثوق",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "زاد القوافل | من المصدر إلى السوق، مسار موثوق",
    description: "شركة ليبية متخصصة في استيراد المواد الغذائية والمواشي واللحوم.",
    images: ["https://zadalqawafel.ly/opengraph-image.jpg"],
  },
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 const jsonLd={"@context":"https://schema.org","@type":"Organization",name:site.name,url:site.url,telephone:"+218944300024",email:site.emails.info,address:{"@type":"PostalAddress",addressLocality:"طرابلس",addressCountry:"LY"}};
 return <html lang="ar" dir="rtl"><body><MotionSystem/><a className="skip-link" href="#main">انتقل إلى المحتوى</a><Header/><main id="main">{children}</main><Footer/><WhatsApp/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/></body></html>
}
