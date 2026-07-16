# موقع زاد القوافل

موقع مؤسسي عربي متجاوب لشركة زاد القوافل في طرابلس، ليبيا.

## التشغيل

```bash
pnpm install
pnpm dev
```

## البناء والفحص

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

## نموذج التواصل وSMTP

انسخ `.env.example` إلى `.env.local` وأدخل بيانات خادم البريد. عند غياب إعداد SMTP يعرض النموذج بدائل التواصل المباشر ولا يخزن الرسائل.

## ملفات الهوية

الملفات الرسمية موجودة في `public/brand.svg` و`public/Logo.svg` و`public/icon.svg` و`public/type.svg`.

الموقع يعرض بدائل بصرية آمنة حتى تُضاف الصور التالية داخل `public/images`:

- `hero-supply.jpg`
- `warehouse.jpg`
- `food-import.jpg`
- `livestock.jpg`
- `meat-import.jpg`
- `partnerships.jpg`

## النشر

المشروع مبني على Next.js/Vinext ومهيأ للنشر عبر Cloudflare Sites أو أي بيئة متوافقة مع إعدادات المشروع.
