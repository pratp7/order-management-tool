import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { isLoggedSelector } from '../store/reducers/login-reducer'


const PrivateRoutes = () => {
  const location = useLocation()
    const user = useSelector(isLoggedSelector)
    
    return (
        user ? <Outlet/> : <Navigate to='/' state={{from:location}} replace/>
      )
}

export default PrivateRoutes