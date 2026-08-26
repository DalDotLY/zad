import Link from "next/link";
import { ArrowLink, CTA, SectionTitle } from "@/components/ui";
import { SafeImage } from "@/components/safe-image";
import { site } from "@/lib/site-config";

const areas = [
  {number:"01",title:"استيراد المواد الغذائية",text:"نعمل على استيراد مجموعة متنوعة من المواد والمنتجات الغذائية، من خلال التواصل مع مصادر وموردين يتناسبون مع طبيعة المنتجات واحتياجات السوق المستهدفة.",image:"/images/food-import.jpg",alt:"تجهيز مواد غذائية داخل مستودع زاد القوافل",position:"46% 50%"},
  {number:"02",title:"استيراد المواشي",text:"تعمل الشركة على استيراد المواشي ضمن عمليات منظمة تراعي طبيعة النشاط ومتطلبات التنسيق بين الموردين والجهات المعنية واحتياجات السوق المحلي.",image:"/images/livestock.jpg",alt:"مرافق منظمة لاستيراد المواشي لدى زاد القوافل",position:"50% 46%"},
  {number:"03",title:"استيراد اللحوم",text:"يشمل نشاط زاد القوافل استيراد اللحوم المبردة والمجمدة، مع الاهتمام باختيار المصادر المناسبة ومراعاة طبيعة الحفظ والتوريد.",image:"/images/meat-import.jpg",alt:"عمليات تجهيز وتوريد المنتجات المبردة في مستودع زاد القوافل",position:"45% 50%"},
];

const journey = [
  {title:"فهم الاحتياج",text:"تحديد طبيعة المنتج والكميات والمتطلبات الأساسية.",image:"/images/visual-upgrade/needs-assessment.webp",alt:"فريق عمليات ليبي يراجع احتياجات التوريد والكميات المطلوبة"},
  {title:"دراسة المصدر",text:"مراجعة خيارات الموردين ومدى ملاءمتها لاحتياجات السوق.",image:"/images/visual-upgrade/source-evaluation.webp",alt:"مختص توريد يقيّم عينات المنتجات ومواصفاتها بعناية"},
  {title:"تنسيق التوريد",text:"تنظيم التواصل والمتطلبات بين الأطراف ذات العلاقة.",image:"/images/visual-upgrade/supply-coordination.webp",alt:"تنسيق تجهيز البضائع ووثائق الشحن داخل مستودع حديث"},
  {title:"استمرارية العلاقة",text:"بناء تعاون واضح وقابل للتطور مع الموردين والعملاء.",image:"/images/visual-upgrade/relationship-continuity.webp",alt:"شركاء يراجعون وصول شحنة ضمن علاقة توريد مستمرة"},
];

const values = [
  {title:"فهم السوق المحلي",text:"نبدأ من قراءة الاحتياجات الفعلية للسوق الليبي وطبيعة الطلب داخله.",image:"/images/visual-upgrade/local-market-insight.webp",alt:"مديرا عمليات يراجعان بيانات المخزون واحتياجات السوق الليبي"},
  {title:"اختيار مدروس",text:"نتعامل مع خيارات التوريد وفق طبيعة كل منتج ومتطلبات التعاون.",image:"/images/visual-upgrade/careful-selection.webp",alt:"مختص جودة يفحص عينات منتجات غذائية قبل اختيارها للتوريد"},
  {title:"وضوح في التعامل",text:"نعتمد تواصلًا مباشرًا ومنظمًا يساعد جميع الأطراف على فهم المتطلبات.",image:"/images/visual-upgrade/clear-communication.webp",alt:"اجتماع مهني واضح بين مورّد وشريك تجاري في طرابلس"},
  {title:"علاقات طويلة الأمد",text:"نبحث عن تعاون قابل للاستمرار والتوسع، لا عن معاملات مؤقتة فقط.",image:"/images/visual-upgrade/long-term-partnership.webp",alt:"شراكة توريد طويلة الأمد في منشأة لوجستية حديثة"},
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
   <div className="hero-visual" data-reveal="image"><SafeImage src="/images/hero-supply.jpg" alt="مقر زاد القوافل وشاحنة نقل مبردة ضمن عمليات التوريد" className="lens-image" position="34% 52%" priority/><img className="hero-watermark" src="/icon.svg" alt="" aria-hidden="true"/></div>
  </div>
 </section>
 <section className="section intro-section"><div className="container intro-grid">
  <div data-reveal="up"><SectionTitle eyebrow="إمداد يتحرك بثقة" title="نربط احتياجات السوق بمصادر توريد مدروسة." text="تعمل زاد القوافل في قطاع الاستيراد والتوريد، انطلاقًا من فهم احتياجات السوق الليبي وبناء علاقات عمل واضحة مع الموردين والشركاء. نركز على التنظيم، جودة الاختيار، واستمرارية العلاقة من بداية التواصل وحتى وصول المنتجات إلى السوق."/><ArrowLink href="/about">تعرف على زاد القوافل</ArrowLink></div>
  <div className="intro-visual" data-reveal="image"><SafeImage src="/images/warehouse.jpg" alt="فريق زاد القوافل أثناء تنظيم المخزون داخل المستودع" className="lens-image" position="50% 45%"/><blockquote>«مسار يبدأ بالفهم ويستمر بالثقة.»</blockquote></div>
 </div></section>
 <section className="section sand areas-section"><div className="container"><SectionTitle eyebrow="مجالات عملنا" title="ثلاثة مجالات ضمن رؤية توريد واحدة." text="نعمل في مجالات مترابطة تستجيب لاحتياجات السوق، مع التعامل مع طبيعة كل منتج ومتطلباته بصورة مستقلة ومدروسة."/><div className="areas">
  {areas.map((area,index)=><article className={`area-card ${index%2 ? "area-card--reverse":""}`} key={area.number} data-reveal="up"><div className="area-content"><span className="area-number">{area.number}</span><h3>{area.title}</h3><p>{area.text}</p><ArrowLink href="/business-areas">استكشف المجال</ArrowLink></div><SafeImage src={area.image} alt={area.alt} position={area.position}/></article>)}
 </div></div></section>
 <section className="section dark journey-section"><div className="container"><SectionTitle eyebrow="مسار واضح" title="كل علاقة ناجحة تبدأ بفهم الاحتياج." text="ننظر إلى التوريد باعتباره علاقة مستمرة تقوم على وضوح المتطلبات، اختيار المصدر المناسب، والمتابعة المنظمة بين جميع الأطراف."/><ol className="steps steps--visual" data-reveal="line">{journey.map((item,i)=><li key={item.title} data-reveal="up" style={{"--delay":`${i*80}ms`} as React.CSSProperties}><SafeImage src={item.image} alt={item.alt} className="step-image"/><div className="step-content"><span>0{i+1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></div></li>)}</ol></div></section>
 <section className="section values-section"><div className="container"><SectionTitle title="شراكة تُبنى على الوضوح والثقة."/><div className="values values--visual">{values.map((item,i)=><article key={item.title} data-reveal="up" style={{"--delay":`${i*80}ms`} as React.CSSProperties}><SafeImage src={item.image} alt={item.alt} className="value-image"/><div className="value-body"><span aria-hidden="true">0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></div></section>
 <section className="partnership-band"><SafeImage src="/images/partnerships.jpg" alt="اجتماع فريق زاد القوافل لمناقشة فرص الشراكة والتوريد" className="partnership-image" position="52% 50%"/><div className="container partnership-content" data-reveal="up"><SectionTitle eyebrow="الشراكات والتوريد" title="نبني علاقات تتجاوز حدود الأسواق." text="ترحب زاد القوافل بالتعاون مع المنتجين والمصانع والموردين والشركات التجارية الباحثة عن شريك في السوق الليبي، ضمن علاقات تقوم على وضوح التعامل، ملاءمة المنتجات، واستمرارية التوريد."/><div className="button-row"><Link className="button button--large" href="/partnerships">ناقش فرصة تعاون</Link><a className="button button--light button--large" href={`mailto:${site.emails.suppliers}`}>تواصل مع قسم الموردين</a></div></div></section>
 <CTA title="لنفتح مسارًا جديدًا للتعاون." text="تواصل مع فريق زاد القوافل لمناقشة طلب توريد، فرصة شراكة، أو تقديم منتجاتك للسوق الليبي."><Link className="button button--large" href="/contact">تواصل معنا</Link><a className="button button--outline-dark button--large" href={site.whatsapp}>واتساب</a><a className="button button--outline-dark button--large" href={site.phoneHref}>اتصل الآن</a></CTA>
 </>;
}
