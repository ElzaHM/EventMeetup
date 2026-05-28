import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ROUTES } from '@/constants/routes'
import AuthLayout from '@/layouts/AuthLayout'
import MainLayout from '@/layouts/MainLayout'
import CreateEvent from '@/pages/CreateEvent'
import EventDetails from '@/pages/EventDetails'
import Events from '@/pages/Events'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Profile from '@/pages/Profile'
import Register from '@/pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.EVENTS} element={<Events />} />
          <Route path={ROUTES.EVENT_DETAILS} element={<EventDetails />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={ROUTES.CREATE_EVENT} element={<CreateEvent />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
