export const site = {
  name: "زاد القوافل",
  url: "https://zadalqawafel.ly",
  description: "شركة ليبية متخصصة في استيراد المواد الغذائية والمواشي واللحوم.",
  location: "طرابلس، ليبيا",
  phoneLocal: "0944300024",
  phoneIntl: "+218 94 430 0024",
  phoneHref: "tel:+218944300024",
  whatsapp: "https://wa.me/218944300024?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%20%D8%B4%D8%B1%D9%83%D8%A9%20%D8%B2%D8%A7%D8%AF%20%D8%A7%D9%84%D9%82%D9%88%D8%A7%D9%81%D9%84.",
  emails: {
    info: "info@zadalqawafel.ly",
    partnerships: "partnerships@zadalqawafel.ly",
    suppliers: "suppliers@zadalqawafel.ly",
  },
} as const;

export const navigation = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "من نحن" },
  { href: "/business-areas", label: "مجالات عملنا" },
  { href: "/partnerships", label: "الشراكات والتوريد" },
  { href: "/contact", label: "تواصل معنا" },
] as const;
