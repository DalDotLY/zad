"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, site } from "@/lib/site-config";

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
      if (event.key === "Tab" && open) {
        const menu = document.getElementById("mobile-menu");
        const focusable = menu?.querySelectorAll<HTMLElement>("a,button");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault(); last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault(); first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.toggle("menu-is-open", open);
    if (open) requestAnimationFrame(() => closeButton.current?.focus());
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-is-open");
    };
  }, [open]);

  const close = () => setOpen(false);
  return (
    <header className={`header ${scrolled ? "header--solid" : "header--top"}`}>
      <div className="container nav">
        <Link href="/" className="brand-link" aria-label="زاد القوافل - الرئيسية">
          <img className="brand-logo brand-logo--white" src="/brand-horizontal-white.svg" alt="زاد القوافل" width="725" height="151" />
          <img className="brand-logo brand-logo--color" src="/brand-horizontal.svg" alt="" aria-hidden="true" width="725" height="151" />
        </Link>
        <nav className="desktop-nav" aria-label="التنقل الرئيسي">
          {navigation.map((item) => (
            <Link className={path === item.href ? "active" : ""} href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>
        <Link href="/contact" className="button button--small desktop-cta">ابدأ التواصل <span aria-hidden="true">←</span></Link>
        <button ref={menuButton} className="menu-button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="mobile-menu" aria-label="فتح القائمة">
          <span/><span/><span/>
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu-head">
          <img src="/brand-horizontal-white.svg" alt="زاد القوافل" width="725" height="151"/>
          <button ref={closeButton} className="close-button" onClick={close} aria-label="إغلاق القائمة"><span/><span/></button>
        </div>
        <nav aria-label="التنقل المحمول">
          {navigation.map((item) => <Link className={path === item.href ? "active" : ""} onClick={close} href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <div className="mobile-menu-footer">
          <Link className="button" onClick={close} href="/contact">ابدأ التواصل</Link>
          <div className="mobile-quick-links"><a href={site.phoneHref}>اتصال مباشر</a><a href={site.whatsapp}>واتساب</a></div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return <footer className="footer"><div className="container footer-grid">
    <div className="footer-intro"><img className="footer-logo" src="/brand-horizontal-white.svg" alt="زاد القوافل" width="725" height="151"/><p>زاد القوافل شركة ليبية متخصصة في استيراد المواد الغذائية والمواشي واللحوم، وتسعى إلى بناء علاقات توريد موثوقة تخدم احتياجات السوق الليبي.</p><div className="footer-actions"><a className="button" href={site.phoneHref}>اتصل بنا</a><a className="button button--light" href={site.whatsapp}>واتساب</a></div></div>
    <div><h2>روابط سريعة</h2>{[...navigation,{href:"/privacy",label:"سياسة الخصوصية"}].map(x=><Link key={x.href} href={x.href}>{x.label}</Link>)}</div>
    <div><h2>بيانات التواصل</h2><p>{site.location}</p><a href={site.phoneHref}>{site.phoneLocal}</a><a href={`mailto:${site.emails.info}`}>{site.emails.info}</a><a href={`mailto:${site.emails.partnerships}`}>{site.emails.partnerships}</a><a href={`mailto:${site.emails.suppliers}`}>{site.emails.suppliers}</a></div>
  </div><div className="container footer-bottom"><span>جميع الحقوق محفوظة © زاد القوافل 2026</span><Link href="/privacy">سياسة الخصوصية</Link></div></footer>
}

export function WhatsApp() {
  const [show,setShow]=useState(false);
  useEffect(()=>{const fn=()=>setShow(window.scrollY>300); fn(); window.addEventListener("scroll",fn,{passive:true}); return()=>window.removeEventListener("scroll",fn)},[]);
  return <a className={`whatsapp ${show?"show":""}`} href={site.whatsapp} target="_blank" rel="noreferrer" aria-label="تواصل مع زاد القوافل عبر واتساب"><span aria-hidden="true">◌</span></a>
}
