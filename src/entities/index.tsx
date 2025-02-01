import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PrivateLayout } from 'app/components/private-route'
import Dashboard from './dashboard'

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<PrivateLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Routers
