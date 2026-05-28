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
      className={`flex w-full min-w-0 items-center gap-2 border border-[var(--border)] bg-[var(--surface)] px-2.5 py-2 text-left text-xs font-medium text-[var(--text)] shadow-sm hover:border-[var(--primary)] hover:bg-[var(--background)] ${UI.borderRadius.md} ${UI.transition.default}`}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-indigo-50 text-[var(--primary)]">
        <Icon size={14} />
      </span>
      <span className="truncate">{label}</span>
    </button>
  )
}

export default CategoryCard
