import Link from "next/link";
import { ArrowLink, CTA, SectionTitle } from "@/components/ui";
import { SafeImage } from "@/components/safe-image";
import { site } from "@/lib/site-config";

const areas = [
  {number:"01",title:"استيراد المواد الغذائية",text:"نعمل على استيراد مجموعة متنوعة من المواد والمنتجات الغذائية، من خلال التواصل مع مصادر وموردين يتناسبون مع طبيعة المنتجات واحتياجات السوق المستهدفة.",image:"/images/food-import.jpg",alt:"عمليات تجهيز مواد غذائية للتوريد"},
  {number:"02",title:"استيراد المواشي",text:"تعمل الشركة على استيراد المواشي ضمن عمليات منظمة تراعي طبيعة النشاط ومتطلبات التنسيق بين الموردين والجهات المعنية واحتياجات السوق المحلي.",image:"/images/livestock.jpg",alt:"بيئة مهنية منظمة لتوريد المواشي"},
  {number:"03",title:"استيراد اللحوم",text:"يشمل نشاط زاد القوافل استيراد اللحوم المبردة والمجمدة، مع الاهتمام باختيار المصادر المناسبة ومراعاة طبيعة الحفظ والتوريد.",image:"/images/meat-import.jpg",alt:"تجهيز منتجات مبردة ضمن سلسلة توريد منظمة"},
];

export default function Home(){
 return <>
 <section className="hero">
  <div className="container hero-grid">
   <div className="hero-copy" data-reveal="hero">
    <span className="eyebrow light">زاد القوافل · طرابلس</span>
    <h1>من المصدر إلى السوق، <em>مسار موثوق.</em></h1>
    <p>زاد القوافل شركة ليبية متخصصة في استيراد المواد الغذائية والمواشي واللحوم، تعمل من طرابلس على بناء علاقات توريد منظمة تربط المصادر المناسبة باحتياجات السوق الليبي.</p>
    <div className="button-row"><Link className="button button--large" href="/business-areas">استكشف مجالاتنا <span aria-hidden="true">←</span></Link><Link className="button button--light button--large" href="/contact">ابدأ التواصل</Link></div>
    <a className="text-link-light" href={site.whatsapp}>تواصل عبر واتساب <span aria-hidden="true">←</span></a>
   </div>
   <div className="hero-visual" data-reveal="image"><SafeImage src="/images/hero-supply.jpg" alt="عمليات توريد منظمة تربط المصدر بالسوق" className="lens-image" priority/><img className="hero-watermark" src="/icon.svg" alt="" aria-hidden="true"/></div>
  </div>
 </section>
 <section className="section intro-section"><div className="container intro-grid">
  <div data-reveal="up"><SectionTitle eyebrow="إمداد يتحرك بثقة" title="نربط احتياجات السوق بمصادر توريد مدروسة." text="تعمل زاد القوافل في قطاع الاستيراد والتوريد، انطلاقًا من فهم احتياجات السوق الليبي وبناء علاقات عمل واضحة مع الموردين والشركاء. نركز على التنظيم، جودة الاختيار، واستمرارية العلاقة من بداية التواصل وحتى وصول المنتجات إلى السوق."/><ArrowLink href="/about">تعرف على زاد القوافل</ArrowLink></div>
  <div className="intro-visual" data-reveal="image"><SafeImage src="/images/warehouse.jpg" alt="عمليات تحميل داخل مستودع حديث" className="lens-image"/><blockquote>«مسار يبدأ بالفهم ويستمر بالثقة.»</blockquote></div>
 </div></section>
 <section className="section sand areas-section"><div className="container"><SectionTitle eyebrow="مجالات عملنا" title="ثلاثة مجالات ضمن رؤية توريد واحدة." text="نعمل في مجالات مترابطة تستجيب لاحتياجات السوق، مع التعامل مع طبيعة كل منتج ومتطلباته بصورة مستقلة ومدروسة."/><div className="areas">
  {areas.map((area,index)=><article className={`area-card ${index%2 ? "area-card--reverse":""}`} key={area.number} data-reveal="up"><div className="area-content"><span className="area-number">{area.number}</span><h3>{area.title}</h3><p>{area.text}</p><ArrowLink href="/business-areas">استكشف المجال</ArrowLink></div><SafeImage src={area.image} alt={area.alt}/></article>)}
 </div></div></section>
 <section className="section dark journey-section"><div className="container"><SectionTitle eyebrow="مسار واضح" title="كل علاقة ناجحة تبدأ بفهم الاحتياج." text="ننظر إلى التوريد باعتباره علاقة مستمرة تقوم على وضوح المتطلبات، اختيار المصدر المناسب، والمتابعة المنظمة بين جميع الأطراف."/><ol className="steps" data-reveal="line">{[["فهم الاحتياج","تحديد طبيعة المنتج والكميات والمتطلبات الأساسية."],["دراسة المصدر","مراجعة خيارات الموردين ومدى ملاءمتها لاحتياجات السوق."],["تنسيق التوريد","تنظيم التواصل والمتطلبات بين الأطراف ذات العلاقة."],["استمرارية العلاقة","بناء تعاون واضح وقابل للتطور مع الموردين والعملاء."]].map((x,i)=><li key={x[0]}><span>0{i+1}</span><div><h3>{x[0]}</h3><p>{x[1]}</p></div></li>)}</ol></div></section>
 <section className="section values-section"><div className="container"><SectionTitle title="شراكة تُبنى على الوضوح والثقة."/><div className="values">{[["فهم السوق المحلي","نبدأ من قراءة الاحتياجات الفعلية للسوق الليبي وطبيعة الطلب داخله."],["اختيار مدروس","نتعامل مع خيارات التوريد وفق طبيعة كل منتج ومتطلبات التعاون."],["وضوح في التعامل","نعتمد تواصلًا مباشرًا ومنظمًا يساعد جميع الأطراف على فهم المتطلبات."],["علاقات طويلة الأمد","نبحث عن تعاون قابل للاستمرار والتوسع، لا عن معاملات مؤقتة فقط."]].map((x,i)=><article key={x[0]} data-reveal="up" style={{"--delay":`${i*80}ms`} as React.CSSProperties}><span aria-hidden="true">0{i+1}</span><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></div></section>
 <section className="partnership-band"><SafeImage src="/images/partnerships.jpg" alt="اجتماع مهني لمناقشة فرص التوريد والشراكة" className="partnership-image"/><div className="container partnership-content" data-reveal="up"><SectionTitle eyebrow="الشراكات والتوريد" title="نبني علاقات تتجاوز حدود الأسواق." text="ترحب زاد القوافل بالتعاون مع المنتجين والمصانع والموردين والشركات التجارية الباحثة عن شريك في السوق الليبي، ضمن علاقات تقوم على وضوح التعامل، ملاءمة المنتجات، واستمرارية التوريد."/><div className="button-row"><Link className="button button--large" href="/partnerships">ناقش فرصة تعاون</Link><a className="button button--light button--large" href={`mailto:${site.emails.suppliers}`}>تواصل مع قسم الموردين</a></div></div></section>
 <CTA title="لنفتح مسارًا جديدًا للتعاون." text="تواصل مع فريق زاد القوافل لمناقشة طلب توريد، فرصة شراكة، أو تقديم منتجاتك للسوق الليبي."><Link className="button button--large" href="/contact">تواصل معنا</Link><a className="button button--outline-dark button--large" href={site.whatsapp}>واتساب</a><a className="button button--outline-dark button--large" href={site.phoneHref}>اتصل الآن</a></CTA>
 </>;
}
