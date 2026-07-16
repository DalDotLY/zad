import Link from "next/link";
import type { ReactNode } from "react";

export function PageHero({eyebrow,title,text}: {eyebrow:string;title:string;text:string}) {
  return <section className="page-hero"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div><img src="/icon.svg" alt="" aria-hidden="true"/></section>
}
export function SectionTitle({eyebrow,title,text}: {eyebrow?:string;title:string;text?:string}) {
  return <div className="section-title">{eyebrow&&<span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{text&&<p>{text}</p>}</div>
}
export function CTA({title,text,children}: {title:string;text?:string;children:ReactNode}) {
  return <section className="cta"><div className="container"><div><h2>{title}</h2>{text&&<p>{text}</p>}</div><div className="button-row">{children}</div></div></section>
}
export function ArrowLink({href,children}: {href:string;children:ReactNode}) {
  return <Link className="arrow-link" href={href}>{children}<span aria-hidden="true">←</span></Link>
}
