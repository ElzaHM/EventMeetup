import type { LucideIcon } from 'lucide-react'

import { UI } from '@/constants/ui'

interface CategoryCardProps {
  icon: LucideIcon
  label: string
}

function CategoryCard({ icon: Icon, label }: CategoryCardProps) {
  return (
    <button
      type="button"
      className={`flex w-full items-center gap-2.5 border border-[var(--border)] bg-[var(--surface)] px-3 py-3 text-left text-sm font-medium text-[var(--text)] shadow-sm hover:border-[var(--primary)] hover:bg-[var(--background)] ${UI.borderRadius.md} ${UI.transition.default}`}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-[var(--primary)]">
        <Icon size={16} />
      </span>
      <span className="truncate">{label}</span>
    </button>
  )
}

export default CategoryCard
