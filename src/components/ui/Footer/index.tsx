import { Globe, MessageCircle, Share2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import Container from '@/components/ui/Container'
import { ROUTES } from '@/constants/routes'
import { UI } from '@/constants/ui'

function Footer() {
  const { t } = useTranslation()

  const productLinks = [
    { label: t('footer.link.discoverEvents'), to: ROUTES.EVENTS },
    { label: t('footer.link.createEvent'), to: ROUTES.CREATE_EVENT },
    { label: t('footer.link.communities'), to: ROUTES.HOME },
  ]

  const companyLinks = [
    { label: t('footer.link.about'), to: ROUTES.HOME },
    { label: t('footer.link.careers'), to: ROUTES.HOME },
    { label: t('footer.link.contact'), to: ROUTES.HOME },
  ]

  const supportLinks = [
    { label: t('footer.link.help'), to: ROUTES.HOME },
    { label: t('footer.link.terms'), to: ROUTES.HOME },
    { label: t('footer.link.privacy'), to: ROUTES.HOME },
  ]

  const socialLinks = [
    { icon: Globe, label: 'LinkedIn' },
    { icon: MessageCircle, label: 'Instagram' },
    { icon: Share2, label: 'Facebook' },
  ]

  return (
    <footer className="mt-12 w-full border-t border-[var(--border)] bg-[var(--surface)]">
      <Container className="py-8 lg:py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to={ROUTES.HOME} className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] text-xs font-bold text-white">
                M
              </span>
              <span className="text-base font-semibold text-[var(--text)]">
                {t('navbar.brand')}
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[var(--text)] sm:text-sm">
              {t('footer.col.product')}
            </h4>
            <ul className="mt-3 space-y-1.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className={`text-xs text-[var(--muted)] hover:text-[var(--primary)] sm:text-sm ${UI.transition.default}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[var(--text)] sm:text-sm">
              {t('footer.col.company')}
            </h4>
            <ul className="mt-3 space-y-1.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className={`text-xs text-[var(--muted)] hover:text-[var(--primary)] sm:text-sm ${UI.transition.default}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[var(--text)] sm:text-sm">
              {t('footer.col.support')}
            </h4>
            <ul className="mt-3 space-y-1.5">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className={`text-xs text-[var(--muted)] hover:text-[var(--primary)] sm:text-sm ${UI.transition.default}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[var(--text)] sm:text-sm">
              {t('footer.followUs')}
            </h4>
            <div className="mt-3 flex gap-2">
              {socialLinks.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className={`flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] hover:border-[var(--primary)] hover:text-[var(--primary)] ${UI.transition.default}`}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 border-t border-[var(--border)] pt-5 text-xs text-[var(--muted)] sm:text-sm">
          {t('footer.copyright')}
        </p>
      </Container>
    </footer>
  )
}

export default Footer
