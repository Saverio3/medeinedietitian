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

  return (
    <footer className="mt-auto border-t border-charcoal-700/10 bg-cream-200">
      {/* Credentials strip */}
      <div className="border-b border-charcoal-700/8">
        <div className="container-wide py-10">
          <CredentialsBar />
        </div>
      </div>

      <div className="container-wide py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
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

            {/* Social */}
            {(siteConfig.social.instagram ||
              siteConfig.social.facebook ||
              siteConfig.social.linkedin) && (
              <div className="mt-8">
                <div className="eyebrow mb-3 text-[10px]">{t('followMe')}</div>
                <div className="flex items-center gap-2">
                  {siteConfig.social.instagram && (
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t('instagram')}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-700/15 text-charcoal-700 transition-all hover:border-sage-600 hover:bg-sage-600 hover:text-cream-100"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  )}
                  {siteConfig.social.facebook && (
                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t('facebook')}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-700/15 text-charcoal-700 transition-all hover:border-sage-600 hover:bg-sage-600 hover:text-cream-100"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                  )}
                  {siteConfig.social.linkedin && (
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t('linkedin')}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-700/15 text-charcoal-700 transition-all hover:border-sage-600 hover:bg-sage-600 hover:text-cream-100"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
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

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="eyebrow mb-4 text-[10px]">{t('navHeading')}</h4>
            <ul className="space-y-2.5">
              <li><FooterLink href="/">{tNav('home')}</FooterLink></li>
              <li><FooterLink href="/about">{tNav('about')}</FooterLink></li>
              <li><FooterLink href="/pricing">{tNav('pricing')}</FooterLink></li>
              <li><FooterLink href="/blog">{tNav('blog')}</FooterLink></li>
              <li><FooterLink href="/contact">{tNav('contact')}</FooterLink></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="eyebrow mb-4 text-[10px]">{t('servicesHeading')}</h4>
            <ul className="space-y-2.5">
              <li><FooterLink href="/services/fertility">{tNav('fertility')}</FooterLink></li>
              <li><FooterLink href="/services/weight-loss">{tNav('weightLoss')}</FooterLink></li>
              <li><FooterLink href="/services/womens-health">{tNav('womensHealth')}</FooterLink></li>
            </ul>
          </div>

          {/* Legal + Contact */}
          <div className="lg:col-span-3">
            <h4 className="eyebrow mb-4 text-[10px]">{t('contactHeading')}</h4>
            <ul className="mb-8 space-y-2.5">
              {siteConfig.contact.email && (
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm text-charcoal-500 transition-colors hover:text-sage-600"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
              )}
              <li className="text-sm text-charcoal-500">{siteConfig.location.serviceArea}</li>
            </ul>

            <h4 className="eyebrow mb-4 text-[10px]">{t('legalHeading')}</h4>
            <ul className="space-y-2.5">
              <li><FooterLink href="/legal/privacy">{t('privacy')}</FooterLink></li>
              <li><FooterLink href="/legal/terms">{t('terms')}</FooterLink></li>
            </ul>
          </div>
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
