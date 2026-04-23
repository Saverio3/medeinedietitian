import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/config/site';
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import Logo from './Logo';
import CredentialsBar from './CredentialsBar';

export default async function Footer({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'footer' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });

  const socialLinks = [
    { href: siteConfig.social.instagram, label: t('instagram'), Icon: Instagram },
    { href: siteConfig.social.facebook, label: t('facebook'), Icon: Facebook },
    { href: siteConfig.social.linkedin, label: t('linkedin'), Icon: Linkedin },
  ].filter((item) => item.href);

  const hasSocials = socialLinks.length > 0 || siteConfig.contact.email;

  return (
    <footer className="mt-auto border-t border-charcoal-700/10 bg-cream-200">
      {/* Credentials strip */}
      <div className="border-b border-charcoal-700/8">
        <div className="container-wide py-10">
          <CredentialsBar />
        </div>
      </div>

      <div className="container-wide py-16 lg:py-20">
        {/*
          Layout:
          - mobile (< 640px):  single column, stacked
          - sm (≥ 640px):      2 columns
          - lg (≥ 1024px):     brand block (spans 2) + 4 equal link columns = 6 cols total
        */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand — spans 2 on desktop */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10" />
              <div>
                <div className="font-serif text-lg leading-none">{siteConfig.name}</div>
                <div className="eyebrow mt-1.5 text-[10px]">{siteConfig.title}</div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-charcoal-500">
              {t('tagline')}
            </p>

            {hasSocials && (
              <div className="mt-8">
                <div className="eyebrow mb-3 text-[10px]">{t('followMe')}</div>
                <div className="flex items-center gap-2">
                  {socialLinks.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-700/15 text-charcoal-700 transition-all hover:border-sage-600 hover:bg-sage-600 hover:text-cream-100"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                  {siteConfig.contact.email && (
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      aria-label={siteConfig.contact.email}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-700/15 text-charcoal-700 transition-all hover:border-sage-600 hover:bg-sage-600 hover:text-cream-100"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Navigate */}
          <FooterColumn heading={t('navHeading')}>
            <FooterLink href="/about">{tNav('about')}</FooterLink>
            <FooterLink href="/pricing">{tNav('pricing')}</FooterLink>
            <FooterLink href="/blog">{tNav('blog')}</FooterLink>
            <FooterLink href="/contact">{tNav('contact')}</FooterLink>
          </FooterColumn>

          {/* Services */}
          <FooterColumn heading={t('servicesHeading')}>
            <FooterLink href="/services/fertility">{tNav('fertility')}</FooterLink>
            <FooterLink href="/services/weight-loss">{tNav('weightLoss')}</FooterLink>
            <FooterLink href="/services/womens-health">{tNav('womensHealth')}</FooterLink>
            <FooterLink href="/tools/pregnancy-food-checker">{tNav('foodChecker')}</FooterLink>
          </FooterColumn>

          {/* Contact */}
          <FooterColumn heading={t('contactHeading')}>
            {siteConfig.contact.email && (
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="block break-words text-sm text-charcoal-500 transition-colors hover:text-sage-600"
              >
                {siteConfig.contact.email}
              </a>
            )}
            <span className="block text-sm leading-relaxed text-charcoal-500">
              {siteConfig.location.serviceArea}
            </span>
          </FooterColumn>

          {/* Legal */}
          <FooterColumn heading={t('legalHeading')}>
            <FooterLink href="/legal/privacy">{t('privacy')}</FooterLink>
            <FooterLink href="/legal/terms">{t('terms')}</FooterLink>
          </FooterColumn>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 border-t border-charcoal-700/10 pt-8">
          <div className="flex flex-col gap-4 text-xs text-charcoal-400 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. {t('credits')}
            </p>
          </div>
          <p className="mt-6 max-w-4xl text-[11px] leading-relaxed text-charcoal-400">
            {t('disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="eyebrow mb-4 text-[10px]">{heading}</h4>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-charcoal-500 transition-colors hover:text-sage-600"
    >
      {children}
    </Link>
  );
}