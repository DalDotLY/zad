import type { Metadata } from "next";
import Link from "next/link";
import { CTA, PageHero, SectionTitle } from "@/components/ui";
import { SafeImage } from "@/components/safe-image";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {title:"مجالات عملنا",description:"تعرف على مجالات عمل زاد القوافل في استيراد المواد الغذائية والمواشي واللحوم المبردة والمجمدة."};

const data = [
  {number:"01",title:"استيراد المواد الغذائية",text:"نعمل على استيراد وتوريد مجموعة متنوعة من المواد والمنتجات الغذائية بما يتناسب مع احتياجات السوق المستهدف، من خلال البحث عن مصادر وموردين مناسبين لطبيعة المنتجات ومتطلبات التعاون.",points:["دراسة طبيعة المنتجات المطلوبة.","التواصل مع المصادر والموردين.","مراجعة متطلبات التوريد الأساسية.","بناء علاقات قابلة للاستمرار والتوسع."],image:"/images/food-import.jpg",alt:"مواد غذائية مجهزة ضمن عمليات الاستيراد والتوريد"},
  {number:"02",title:"استيراد المواشي",text:"تعمل زاد القوافل في مجال استيراد المواشي لتلبية احتياجات السوق، ضمن تنسيق منظم يراعي طبيعة هذا النشاط ومتطلباته والتواصل مع الجهات والموردين ذوي العلاقة.",points:["دراسة الاحتياج والكميات.","اختيار فرص التوريد المناسبة.","تنظيم التواصل بين الأطراف.","مراعاة المتطلبات المرتبطة بطبيعة النشاط."],image:"/images/livestock.jpg",alt:"مواشٍ في مرافق منظمة ومهيأة لعمليات التوريد"},
  {number:"03",title:"استيراد اللحوم",text:"يشمل نشاط الشركة استيراد اللحوم المبردة والمجمدة من مصادر متنوعة، مع الاهتمام بملاءمة المنتجات لاحتياجات السوق وطبيعة الحفظ والتوريد.",points:["دراسة المواصفات والمتطلبات.","اختيار المصادر المناسبة.","مراعاة طبيعة المنتجات المبردة والمجمدة.","تنظيم عملية التواصل والتوريد."],image:"/images/meat-import.jpg",alt:"منتجات مبردة محفوظة ضمن سلسلة توريد منظمة"},
];

export default function Areas(){return <>
  <PageHero eyebrow="مجالات عملنا" title="مجالات متعددة، ضمن رؤية توريد واحدة." text="تعمل زاد القوافل في ثلاثة مجالات رئيسية، مع مراعاة طبيعة كل نشاط ومتطلبات المنتجات والأسواق المرتبطة به." image="/images/food-import.jpg" alt="مواد غذائية مجهزة ضمن عمليات الاستيراد والتوريد"/>
  <section className="section"><div className="container detail-list detail-list--visual">{data.map((item,index)=><article className={index%2 ? "detail-item--reverse" : ""} key={item.number} data-reveal="up"><SafeImage src={item.image} alt={item.alt} className="detail-image"/><div className="detail-copy"><div className="detail-number">{item.number}</div><div><h2>{item.title}</h2><p>{item.text}</p><ul>{item.points.map(point=><li key={point}>{point}</li>)}</ul></div></div></article>)}</div></section>
  <section className="section dark"><div className="container"><SectionTitle title="الالتزام يبدأ من الاختيار." text="نحرص على وضوح المتطلبات، دراسة المصادر، والتواصل المنظم بما يدعم جودة الاختيار واستمرارية العلاقة بين مختلف الأطراف."/></div></section>
  <CTA title="هل تبحث عن فرصة توريد أو تعاون؟" text="تواصل معنا لمناقشة المجال المناسب وطبيعة الاحتياج."><Link className="button" href="/contact">ابدأ التواصل</Link><a className="button button--outline-dark" href={`mailto:${site.emails.suppliers}`}>قسم الموردين</a></CTA>
</>}
