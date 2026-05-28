
import { Outlet } from 'react-router-dom'

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
        <div className="relative z-10 w-full max-w-md">
          <Outlet />
        </div>
    </div>
  )
}

export default AuthLayout
