import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header, WhatsApp } from "@/components/site-shell";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "زاد القوافل | استيراد المواد الغذائية والمواشي واللحوم في ليبيا", template: "%s | زاد القوافل" },
  description: "زاد القوافل شركة ليبية مقرها طرابلس ومتخصصة في استيراد المواد الغذائية والمواشي واللحوم، وبناء علاقات توريد تخدم احتياجات السوق الليبي.",
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
  openGraph: { type:"website", locale:"ar_LY", siteName:site.name, title:site.name, description:site.description },
  twitter: { card:"summary", title:site.name, description:site.description },
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 const jsonLd={"@context":"https://schema.org","@type":"Organization",name:site.name,url:site.url,telephone:"+218944300024",email:site.emails.info,address:{"@type":"PostalAddress",addressLocality:"طرابلس",addressCountry:"LY"}};
 return <html lang="ar" dir="rtl"><body><a className="skip-link" href="#main">انتقل إلى المحتوى</a><Header/><main id="main">{children}</main><Footer/><WhatsApp/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/></body></html>
}
