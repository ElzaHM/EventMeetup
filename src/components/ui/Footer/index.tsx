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
    <footer className="mt-20 border-t border-[var(--border)] bg-[var(--surface)]">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to={ROUTES.HOME} className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] text-sm font-bold text-white">
                M
              </span>
              <span className="text-lg font-semibold text-[var(--text)]">
                {t('navbar.brand')}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--muted)]">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text)]">
              {t('footer.col.product')}
            </h4>
            <ul className="mt-4 space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className={`text-sm text-[var(--muted)] hover:text-[var(--primary)] ${UI.transition.default}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text)]">
              {t('footer.col.company')}
            </h4>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className={`text-sm text-[var(--muted)] hover:text-[var(--primary)] ${UI.transition.default}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text)]">
              {t('footer.col.support')}
            </h4>
            <ul className="mt-4 space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className={`text-sm text-[var(--muted)] hover:text-[var(--primary)] ${UI.transition.default}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text)]">
              {t('footer.followUs')}
            </h4>
            <div className="mt-4 flex gap-2">
              {socialLinks.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] hover:border-[var(--primary)] hover:text-[var(--primary)] ${UI.transition.default}`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
          {t('footer.copyright')}
        </p>
      </Container>
    </footer>
  )
}

export default Footer
