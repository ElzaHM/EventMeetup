
import { Outlet } from 'react-router-dom'

import Navbar from '@/components/ui/Navbar'

function MainLayout() {
  return (
    <div data-theme="light" className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      
        <Navbar />
        <main className="min-h-[calc(100vh-4rem)]">
          <Outlet />
        </main>
    </div>
  )
}

export default MainLayout
