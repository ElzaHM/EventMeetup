import { ConfigProvider } from 'antd'
import { Outlet } from 'react-router-dom'

import Navbar from '@/components/ui/Navbar'

const lightTheme = {
  token: {
    colorPrimary: '#6366f1',
    borderRadius: 12,
    fontFamily: 'Inter, system-ui, sans-serif',
  },
}

function MainLayout() {
  return (
    <div data-theme="light" className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <ConfigProvider theme={lightTheme}>
        <Navbar />
        <main className="min-h-[calc(100vh-4rem)]">
          <Outlet />
        </main>
      </ConfigProvider>
    </div>
  )
}

export default MainLayout
