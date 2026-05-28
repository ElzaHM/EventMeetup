
import { Outlet } from 'react-router-dom'

import Navbar from '@/components/ui/Navbar'

function MainLayout() {
  return (
    <div
      data-theme="light"
      className="flex min-h-screen w-full min-w-0 flex-col overflow-x-clip bg-[var(--background)] text-[var(--text)]"
    >
      <Navbar />
      <main className="w-full min-w-0 flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
