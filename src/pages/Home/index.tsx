import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { ROUTES } from '@/constants/routes'
import { mockEvents } from '@/data/mockEvents'

function Home() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const featuredEvent = mockEvents[0]

  return (
    <Container className="py-12">
      <section className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
          {t('home.title')}
        </h1>

        {featuredEvent && (
          <p className="mt-4 text-[var(--muted)]">
            {featuredEvent.title} · {featuredEvent.location}
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button type="button" onClick={() => navigate(ROUTES.EVENTS)}>
            {t('navbar.events')}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate(ROUTES.CREATE_EVENT)}
          >
            {t('createEvent.title')}
          </Button>
        </div>
      </section>
    </Container>
  )
}

export default Home
