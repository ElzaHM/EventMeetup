
import { Bell, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { ROUTES } from '@/constants/routes'
import { UI } from '@/constants/ui'

function Navbar() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const [mobileOpen, setMobileOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium ${UI.transition.default} ${
      isActive ? 'text-[var(--primary)]' : 'text-[var(--muted)] hover:text-[var(--text)]'
    }`

  const profileMenu = [
    {
      key: 'profile',
      label: t('navbar.login'),
      onClick: () => navigate(ROUTES.LOGIN),
    },
    {
      key: 'register',
      label: t('navbar.register'),
      onClick: () => navigate(ROUTES.REGISTER),
    },
  ]

  const navLinks = (
    <>
      <NavLink to={ROUTES.EVENTS} className={navLinkClass} onClick={() => setMobileOpen(false)}>
        {t('navbar.events')}
      </NavLink>

      <NavLink to={ROUTES.LOGIN} className={navLinkClass} onClick={() => setMobileOpen(false)}>
        {t('navbar.login')}
      </NavLink>

      <NavLink to={ROUTES.REGISTER} className={navLinkClass} onClick={() => setMobileOpen(false)}>
        {t('navbar.register')}
      </NavLink>
    </>
  )

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]">
      <Container className={`flex ${UI.navbar.height} items-center justify-between gap-4`}>
        <div className="flex min-w-0 items-center gap-6">
          <Link to={ROUTES.HOME} className="flex shrink-0 items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] text-sm font-bold text-white">
              M
            </span>

            <span className="hidden text-lg font-semibold text-[var(--text)] sm:inline">
              {t('navbar.brand')}
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">{navLinks}</nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => navigate(ROUTES.CREATE_EVENT)}
          >
            {t('createEvent.title')}
          </Button>

          <div className="relative hidden sm:inline-flex">
            <button
              type="button"
              aria-label="Notifications"
              className={`flex h-10 w-10 items-center justify-center rounded-xl text-[var(--muted)] hover:bg-[var(--background)] hover:text-[var(--text)] ${UI.transition.default}`}
            >
              <Bell size={18} />

              <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                3
              </span>
            </button>
          </div>

          <div className="relative hidden sm:flex">
            <button
              type="button"
              onClick={() => setProfileOpen((open) => !open)}
              className="flex"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-medium text-white">
                U
              </div>
            </button>

            {profileOpen && (
              <div className="absolute right-0 top-12 z-50 w-44 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-1 shadow-lg">
                {profileMenu.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => {
                      item.onClick()
                      setProfileOpen(false)
                    }}
                    className={`w-full rounded-lg px-3 py-2 text-left text-sm text-[var(--text)] hover:bg-[var(--background)] ${UI.transition.default}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className={`flex h-10 w-10 items-center justify-center rounded-xl text-[var(--text)] hover:bg-[var(--background)] md:hidden ${UI.transition.default}`}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--surface)] md:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {navLinks}

            <Button fullWidth onClick={() => navigate(ROUTES.CREATE_EVENT)}>
              {t('createEvent.title')}
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}

export default Navbar
