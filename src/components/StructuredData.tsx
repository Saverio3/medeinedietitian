import { siteConfig } from '@/config/site';
import type { Locale } from '@/i18n/config';

export default function StructuredData({ locale }: { locale: Locale }) {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['MedicalBusiness', 'HealthAndBeautyBusiness', 'LocalBusiness'],
    '@id': `${siteConfig.url}#business`,
    name: siteConfig.name,
    alternateName: `${siteConfig.name} — ${siteConfig.title}`,
    description:
      'HCPC-registered dietitian specialising in fertility nutrition, women\'s health, PCOS, gestational diabetes, and sustainable weight loss including Mounjaro and Wegovy support. Online consultations across the United Kingdom.',
    url: siteConfig.url,
    image: `${siteConfig.url}/og-image.png`,
    logo: `${siteConfig.url}/favicon.svg`,
    email: siteConfig.contact.email,
    priceRange: '££',
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: siteConfig.location.countryCode,
    },
    availableLanguage: ['English', 'Lithuanian'],
    serviceType: [
      'Fertility Nutrition',
      'Preconception Nutrition',
      'IVF Nutrition Support',
      'Weight Loss Dietitian',
      'GLP-1 Medication Nutrition Support',
      'PCOS Dietitian',
      'Gestational Diabetes Nutrition',
      "Women's Health Nutrition",
      'Pregnancy Nutrition',
    ],
    medicalSpecialty: [
      'Dietetics',
      'Nutrition',
      'Reproductive Medicine',
      'Weight Management',
    ],
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.linkedin,
    ].filter(Boolean),
  };

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.url}#person`,
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    worksFor: { '@id': `${siteConfig.url}#business` },
    description:
      'Registered Dietitian (HCPC) and Full Member of the British Dietetic Association. Specialist in fertility, women\'s health, and sustainable weight loss.',
    knowsLanguage: ['en', 'lt'],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'BSc Human Nutrition and Dietetics',
    },
    memberOf: [
      {
        '@type': 'Organization',
        name: 'British Dietetic Association',
        url: 'https://www.bda.uk.com',
      },
      {
        '@type': 'Organization',
        name: 'Health and Care Professions Council',
        url: 'https://www.hcpc-uk.org',
      },
    ],
    url: siteConfig.url,
    image: `${siteConfig.url}/og-image.png`,
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description:
      'Registered dietitian specialising in fertility, women\'s health, and weight loss — online across the UK.',
    inLanguage: locale === 'lt' ? 'lt-LT' : 'en-GB',
    publisher: { '@id': `${siteConfig.url}#business` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
