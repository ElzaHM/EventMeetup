import {
  ArrowRight,
  Briefcase,
  Calendar,
  Code2,
  Cpu,
  GraduationCap,
  Grid3x3,
  Heart,
  HeartPulse,
  Music,
  Palette,
  Rocket,
  Sparkles,
} from 'lucide-react'
import { Trans, useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'

import Button from '@/components/ui/Button'
import CategoryCard from '@/components/ui/CategoryCard'
import Container from '@/components/ui/Container'
import FeaturedEventCard from '@/components/ui/FeaturedEventCard'
import Footer from '@/components/ui/Footer'
import { ROUTES } from '@/constants/routes'
import { UI } from '@/constants/ui'
import { mockEvents } from '@/data/mockEvents'

const HERO_MAIN_IMAGE =
  'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=900'
const HERO_TECH_IMAGE =
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400'
const HERO_DESIGN_IMAGE =
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400'

const SOCIAL_AVATARS = [
  'bg-violet-500',
  'bg-indigo-500',
  'bg-blue-500',
  'bg-fuchsia-500',
]

function Home() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const categories = [
    { icon: Cpu, labelKey: 'home.category.technology' },
    { icon: Briefcase, labelKey: 'home.category.business' },
    { icon: Palette, labelKey: 'home.category.design' },
    { icon: Music, labelKey: 'home.category.music' },
    { icon: HeartPulse, labelKey: 'home.category.health' },
    { icon: GraduationCap, labelKey: 'home.category.education' },
    { icon: Rocket, labelKey: 'home.category.startup' },
    { icon: Grid3x3, labelKey: 'home.category.more' },
  ] as const

  return (
    <div className="bg-[var(--background)]">
      <Container>
        {/* Hero */}
        <section className="grid items-center gap-12 py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <span
              className={`inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-medium text-[var(--primary)]`}
            >
              <Sparkles size={14} />
              {t('home.hero.badge')}
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
              {t('home.hero.headingPrefix')}
              <span className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--primary)] bg-clip-text text-transparent">
                {t('home.hero.headingHighlight')}
              </span>
              {t('home.hero.headingSuffix')}
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {t('home.hero.subtitle')}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="px-6"
                onClick={() => navigate(ROUTES.EVENTS)}
              >
                {t('home.hero.exploreCta')}
                <ArrowRight size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[var(--primary)] text-[var(--primary)]"
                onClick={() => navigate(ROUTES.CREATE_EVENT)}
              >
                {t('createEvent.title')}
                <Calendar size={18} />
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {SOCIAL_AVATARS.map((color, index) => (
                  <span
                    key={color}
                    className={`h-9 w-9 rounded-full border-2 border-[var(--surface)] ${color} ${['z-40', 'z-30', 'z-20', 'z-10'][index]}`}
                  />
                ))}
              </div>
              <p className="text-sm text-[var(--muted)]">
                <Trans
                  i18nKey="home.hero.socialProof"
                  components={{
                    strong: (
                      <strong className="font-semibold text-[var(--text)]" />
                    ),
                  }}
                />
              </p>
            </div>
          </div>

          <div className="relative mx-auto h-[360px] w-full max-w-lg sm:h-[420px] lg:mx-0 lg:max-w-none">
            <div
              aria-hidden
              className="absolute -right-4 top-8 h-40 w-40 rounded-full bg-indigo-100 opacity-60 blur-2xl"
            />
            <div
              aria-hidden
              className="absolute bottom-8 left-0 grid grid-cols-6 gap-1 opacity-30"
            >
              {Array.from({ length: 24 }).map((_, i) => (
                <span key={i} className="h-1 w-1 rounded-full bg-[var(--muted)]" />
              ))}
            </div>

            <div
              className={`absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-xl ${UI.borderRadius.lg}`}
            >
              <img
                src={HERO_MAIN_IMAGE}
                alt=""
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div
              className={`absolute right-0 top-6 flex w-[44%] items-center gap-2 border border-[var(--border)] bg-[var(--surface)] p-2 shadow-lg ${UI.borderRadius.lg}`}
            >
              <img
                src={HERO_TECH_IMAGE}
                alt=""
                className="h-14 w-14 rounded-lg object-cover"
              />
              <div>
                <p className="text-xs font-semibold text-[var(--text)]">
                  {t('home.hero.card.tech')}
                </p>
                <Code2 size={14} className="mt-1 text-[var(--primary)]" />
              </div>
            </div>

            <div
              className={`absolute bottom-16 left-0 flex w-[42%] items-center gap-2 border border-[var(--border)] bg-[var(--surface)] p-2 shadow-lg ${UI.borderRadius.lg}`}
            >
              <img
                src={HERO_DESIGN_IMAGE}
                alt=""
                className="h-14 w-14 rounded-lg object-cover"
              />
              <div>
                <p className="text-xs font-semibold text-[var(--text)]">
                  {t('home.hero.card.design')}
                </p>
                <Heart size={14} className="mt-1 text-pink-500" />
              </div>
            </div>

            <div
              className={`absolute bottom-4 right-8 flex items-center gap-2 border border-[var(--border)] bg-[var(--surface)] px-3 py-2 shadow-md ${UI.borderRadius.md}`}
            >
              <Music size={14} className="text-[var(--primary)]" />
              <p className="text-xs font-semibold text-[var(--text)]">
                {t('home.hero.card.concert')}
              </p>
            </div>
          </div>
        </section>

        {/* Featured events */}
        <section className="py-12 lg:py-16">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl font-bold text-[var(--text)] sm:text-3xl">
              {t('home.featured.title')}
            </h2>
            <Link
              to={ROUTES.EVENTS}
              className={`inline-flex items-center gap-1 text-sm font-medium text-[var(--primary)] hover:underline ${UI.transition.default}`}
            >
              {t('home.featured.viewAll')}
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mockEvents.map((event) => (
              <FeaturedEventCard
                key={event.id}
                event={{
                  id: event.id,
                  title: event.title,
                  category: event.category,
                  date: event.date,
                  location: event.location,
                  attendeeCount: event.attendeeCount,
                  imageUrl: event.imageUrl ?? '',
                }}
              />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 lg:py-16">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl font-bold text-[var(--text)] sm:text-3xl">
              {t('home.categories.title')}
            </h2>
            <Link
              to={ROUTES.EVENTS}
              className={`inline-flex items-center gap-1 text-sm font-medium text-[var(--primary)] hover:underline ${UI.transition.default}`}
            >
              {t('home.categories.viewAll')}
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {categories.map(({ icon, labelKey }) => (
              <CategoryCard key={labelKey} icon={icon} label={t(labelKey)} />
            ))}
          </div>
        </section>

        {/* CTA banner */}
        <section className="pb-12 lg:pb-20">
          <div
            className={`flex flex-col items-start justify-between gap-6 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] p-6 sm:flex-row sm:items-center sm:p-8 lg:p-10 ${UI.borderRadius.lg}`}
          >
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white">
                <Calendar size={24} />
              </span>
              <div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {t('home.cta.title')}
                </h3>
                <p className="mt-2 max-w-xl text-sm text-white/90 sm:text-base">
                  {t('home.cta.subtitle')}
                </p>
              </div>
            </div>

            <Button
              size="lg"
              className="shrink-0 bg-white text-[var(--primary)] hover:bg-white/90"
              onClick={() => navigate(ROUTES.CREATE_EVENT)}
            >
              {t('home.cta.button')}
              <ArrowRight size={18} />
            </Button>
          </div>
        </section>
      </Container>

      <Footer />
    </div>
  )
}

export default Home
