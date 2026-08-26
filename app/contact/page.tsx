import type {Metadata} from "next";
import {ContactForm} from "@/components/contact-form";
import {PageHero,SectionTitle} from "@/components/ui";
import {site} from "@/lib/site-config";
export const metadata:Metadata={title:"تواصل معنا",description:"تواصل مع شركة زاد القوافل في طرابلس لمناقشة طلبات التوريد والشراكات وفرص الموردين."};
export default function Contact(){return <>
<PageHero eyebrow="تواصل معنا" title="لنبدأ حوارًا واضحًا." text="سواء كنت تبحث عن طلب توريد، فرصة شراكة، أو تقديم منتجاتك للسوق الليبي، يسعدنا استقبال رسالتك والتعرف على احتياجك." image="/images/cinematic/contact-office.webp" alt="مساحة اجتماعات مهنية هادئة داخل شركة استيراد وتوريد"/>
<section className="section contact-section"><div className="container contact-layout"><aside className="contact-aside"><SectionTitle title="بيانات التواصل"/><div className="contact-cards"><p><span>الموقع</span>{site.location}</p><p><span>الهاتف</span><a href={site.phoneHref}>{site.phoneLocal}<br/>{site.phoneIntl}</a></p><p><span>البريد العام</span><a href={`mailto:${site.emails.info}`}>{site.emails.info}</a></p><p><span>الشراكات</span><a href={`mailto:${site.emails.partnerships}`}>{site.emails.partnerships}</a></p><p><span>الموردون</span><a href={`mailto:${site.emails.suppliers}`}>{site.emails.suppliers}</a></p></div><div className="button-row"><a className="button" href={site.phoneHref}>اتصل الآن</a><a className="button button--outline-dark" href={site.whatsapp}>واتساب</a></div></aside><div className="form-panel"><SectionTitle title="أرسل رسالتك"/><ContactForm/></div></div></section>
<section className="section sand"><div className="container map-card"><div><span className="eyebrow">موقعنا</span><h2>طرابلس، ليبيا</h2><p>نعمل من العاصمة طرابلس، دون عرض موقع دقيق غير موثق.</p></div><a className="button" href="https://www.google.com/maps/search/?api=1&query=Tripoli%2C%20Libya" target="_blank" rel="noreferrer">فتح طرابلس في الخرائط</a></div></section>
</>}
