import { ConfigProvider } from 'antd'
import { Outlet } from 'react-router-dom'

const darkTheme = {
  token: {
    colorPrimary: '#6366f1',
    borderRadius: 12,
    fontFamily: 'Inter, system-ui, sans-serif',
    colorBgContainer: '#16161b',
    colorText: '#ffffff',
    colorTextSecondary: '#9ca3af',
    colorBorder: '#27272a',
  },
}

function AuthLayout() {
  return (
    <div
      data-theme="dark"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--background)] px-4 py-10 text-[var(--text)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--gradient-from)] opacity-20 blur-3xl"
      />
      <ConfigProvider theme={darkTheme}>
        <div className="relative z-10 w-full max-w-md">
          <Outlet />
        </div>
      </ConfigProvider>
    </div>
  )
}

export default AuthLayout
