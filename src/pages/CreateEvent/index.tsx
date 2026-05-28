import { useTranslation } from 'react-i18next'

import Container from '@/components/ui/Container'

function CreateEvent() {
  const { t } = useTranslation()

  return (
    <Container className="py-12">
      <h1 className="text-2xl font-bold text-[var(--text)]">{t('createEvent.title')}</h1>
    </Container>
  )
}

export default CreateEvent
