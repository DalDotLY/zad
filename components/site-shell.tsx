"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, site } from "@/lib/site-config";

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [path]);
  return (
    <header className={`header ${scrolled ? "header--solid" : ""}`}>
      <div className="container nav">
        <Link href="/" className="brand-link" aria-label="زاد القوافل - الرئيسية">
          <img src="/brand.svg" alt="زاد القوافل" width="555" height="793" />
        </Link>
        <nav className="desktop-nav" aria-label="التنقل الرئيسي">
          {navigation.map(item => <Link onClick={() => setOpen(false)} className={path === item.href ? "active" : ""} href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <Link href="/contact" className="button button--small desktop-cta">ابدأ التواصل</Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}><span/><span/></button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav aria-label="التنقل المحمول">{navigation.map(item => <Link onClick={() => setOpen(false)} href={item.href} key={item.href}>{item.label}</Link>)}</nav>
        <div className="mobile-actions"><a className="button" href={site.phoneHref}>اتصل الآن</a><a className="button button--outline-dark" href={site.whatsapp}>واتساب</a></div>
      </div>
    </header>
  );
}

export function Footer() {
  return <footer className="footer"><div className="container footer-grid">
    <div><img className="footer-logo" src="/brand.svg" alt="زاد القوافل" width="555" height="793"/><p>زاد القوافل شركة ليبية متخصصة في استيراد المواد الغذائية والمواشي واللحوم، وتسعى إلى بناء علاقات توريد موثوقة تخدم احتياجات السوق الليبي.</p></div>
    <div><h2>روابط سريعة</h2>{[...navigation,{href:"/privacy",label:"سياسة الخصوصية"}].map(x=><Link key={x.href} href={x.href}>{x.label}</Link>)}</div>
    <div><h2>بيانات التواصل</h2><p>{site.location}</p><a href={site.phoneHref}>{site.phoneLocal}</a><a href={`mailto:${site.emails.info}`}>{site.emails.info}</a><a href={`mailto:${site.emails.partnerships}`}>{site.emails.partnerships}</a><a href={`mailto:${site.emails.suppliers}`}>{site.emails.suppliers}</a></div>
  </div><div className="container footer-bottom"><span>جميع الحقوق محفوظة © زاد القوافل 2026</span><Link href="/privacy">سياسة الخصوصية</Link></div></footer>
}

export function WhatsApp() {
  const [show,setShow]=useState(false);
  useEffect(()=>{const fn=()=>setShow(window.scrollY>280); fn(); window.addEventListener("scroll",fn,{passive:true}); return()=>window.removeEventListener("scroll",fn)},[]);
  return <a className={`whatsapp ${show?"show":""}`} href={site.whatsapp} target="_blank" rel="noreferrer" aria-label="تواصل مع زاد القوافل عبر واتساب">واتساب</a>
}
