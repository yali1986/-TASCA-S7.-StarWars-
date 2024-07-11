import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PrivateRoute = () => {
  const { usuario } = useAuth()
  const location = useLocation()

  return usuario ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  )
}

export default PrivateRoute