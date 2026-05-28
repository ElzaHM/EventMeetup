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
    <div className="w-full min-w-0 bg-[var(--background)]">
      <Container>
        {/* Hero */}
        <section className="grid w-full min-w-0 grid-cols-1 items-center gap-8 py-8 lg:grid-cols-2 lg:gap-10 lg:py-12">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-[var(--primary)]">
              <Sparkles size={12} />
              {t('home.hero.badge')}
            </span>

            <h1 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-[var(--text)] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              {t('home.hero.headingPrefix')}
              <span className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--primary)] bg-clip-text text-transparent">
                {t('home.hero.headingHighlight')}
              </span>
              {t('home.hero.headingSuffix')}
            </h1>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              {t('home.hero.subtitle')}
            </p>

            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center">
              <Button size="md" onClick={() => navigate(ROUTES.EVENTS)}>
                {t('home.hero.exploreCta')}
                <ArrowRight size={16} />
              </Button>
              <Button
                size="md"
                variant="outline"
                className="border-[var(--primary)] text-[var(--primary)]"
                onClick={() => navigate(ROUTES.CREATE_EVENT)}
              >
                {t('createEvent.title')}
                <Calendar size={16} />
              </Button>
            </div>

            <div className="mt-5 flex min-w-0 items-center gap-2.5">
              <div className="flex shrink-0 -space-x-2">
                {SOCIAL_AVATARS.map((color, index) => (
                  <span
                    key={color}
                    className={`h-7 w-7 rounded-full border-2 border-[var(--surface)] ${color} ${['z-40', 'z-30', 'z-20', 'z-10'][index]}`}
                  />
                ))}
              </div>
              <p className="min-w-0 flex-1 text-xs leading-snug text-[var(--muted)] sm:text-sm">
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

          <div className="relative mx-auto h-[260px] w-full min-w-0 max-w-md overflow-hidden sm:h-[280px] lg:mx-0 lg:h-[300px] lg:max-w-none">
            <div
              aria-hidden
              className="absolute -right-2 top-4 h-24 w-24 rounded-full bg-indigo-100 opacity-50 blur-2xl"
            />
            <div
              aria-hidden
              className="absolute bottom-6 left-0 grid grid-cols-6 gap-0.5 opacity-25"
            >
              {Array.from({ length: 18 }).map((_, i) => (
                <span key={i} className="h-0.5 w-0.5 rounded-full bg-[var(--muted)]" />
              ))}
            </div>

            <div
              className={`absolute left-1/2 top-1/2 w-[72%] max-w-[240px] -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-lg ${UI.borderRadius.lg}`}
            >
              <img
                src={HERO_MAIN_IMAGE}
                alt=""
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <div
              className={`absolute right-0 top-2 flex w-[40%] max-w-[140px] items-center gap-1.5 border border-[var(--border)] bg-[var(--surface)] p-1.5 shadow-md ${UI.borderRadius.md}`}
            >
              <img
                src={HERO_TECH_IMAGE}
                alt=""
                className="h-9 w-9 shrink-0 rounded-md object-cover"
              />
              <div className="min-w-0">
                <p className="truncate text-[10px] font-semibold text-[var(--text)]">
                  {t('home.hero.card.tech')}
                </p>
                <Code2 size={12} className="mt-0.5 text-[var(--primary)]" />
              </div>
            </div>

            <div
              className={`absolute bottom-12 left-0 flex w-[38%] max-w-[130px] items-center gap-1.5 border border-[var(--border)] bg-[var(--surface)] p-1.5 shadow-md ${UI.borderRadius.md}`}
            >
              <img
                src={HERO_DESIGN_IMAGE}
                alt=""
                className="h-9 w-9 shrink-0 rounded-md object-cover"
              />
              <div className="min-w-0">
                <p className="truncate text-[10px] font-semibold text-[var(--text)]">
                  {t('home.hero.card.design')}
                </p>
                <Heart size={12} className="mt-0.5 text-pink-500" />
              </div>
            </div>

            <div
              className={`absolute bottom-2 right-4 flex items-center gap-1.5 border border-[var(--border)] bg-[var(--surface)] px-2 py-1 shadow-sm ${UI.borderRadius.md}`}
            >
              <Music size={12} className="text-[var(--primary)]" />
              <p className="text-[10px] font-semibold text-[var(--text)]">
                {t('home.hero.card.concert')}
              </p>
            </div>
          </div>
        </section>

        {/* Featured events */}
        <section className="w-full min-w-0 py-8 lg:py-10">
          <div className="mb-5 flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-bold tracking-tight text-[var(--text)] sm:text-2xl">
              {t('home.featured.title')}
            </h2>
            <Link
              to={ROUTES.EVENTS}
              className={`inline-flex items-center gap-1 text-sm font-medium text-[var(--primary)] hover:underline ${UI.transition.default}`}
            >
              {t('home.featured.viewAll')}
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
        <section className="w-full min-w-0 py-8 lg:py-10">
          <div className="mb-5 flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-bold tracking-tight text-[var(--text)] sm:text-2xl">
              {t('home.categories.title')}
            </h2>
            <Link
              to={ROUTES.EVENTS}
              className={`inline-flex items-center gap-1 text-sm font-medium text-[var(--primary)] hover:underline ${UI.transition.default}`}
            >
              {t('home.categories.viewAll')}
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid w-full min-w-0 grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8">
            {categories.map(({ icon, labelKey }) => (
              <CategoryCard key={labelKey} icon={icon} label={t(labelKey)} />
            ))}
          </div>
        </section>

        {/* CTA banner */}
        <section className="w-full min-w-0 pb-8 lg:pb-12">
          <div
            className={`flex w-full min-w-0 flex-col items-start justify-between gap-4 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] px-4 py-4 sm:flex-row sm:items-center sm:gap-6 sm:px-5 sm:py-4 ${UI.borderRadius.lg}`}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/20 text-white">
                <Calendar size={18} />
              </span>
              <div>
                <h3 className="text-base font-bold text-white sm:text-lg">
                  {t('home.cta.title')}
                </h3>
                <p className="mt-0.5 max-w-lg text-xs text-white/90 sm:text-sm">
                  {t('home.cta.subtitle')}
                </p>
              </div>
            </div>

            <Button
              size="md"
              className="w-full shrink-0 bg-white px-4 text-[var(--primary)] hover:bg-white/90 sm:w-auto"
              onClick={() => navigate(ROUTES.CREATE_EVENT)}
            >
              {t('home.cta.button')}
              <ArrowRight size={16} />
            </Button>
          </div>
        </section>
      </Container>

      <Footer />
    </div>
  )
}

export default Home
