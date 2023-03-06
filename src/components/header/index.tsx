import React from 'react'
import classes from './index.module.css'
import Logo from '../../utils/Logo'
import { logoutHandler } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { isLoggedSelector, userNameSelector } from '../../store/reducers/login-reducer'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLogged = useSelector(isLoggedSelector)
  const userName = useSelector(userNameSelector)

  const clickhandler = () => {
    dispatch(logoutHandler())
    navigate('/')
  }
  return (
    <div className={classes['header-section']}>
       <Logo/>
     {isLogged &&  <nav className={classes['nav-items']}>
          <p>User: <span className={classes['user-name']}>{userName}</span></p>
          <button className={classes['logout-button']} onClick={clickhandler}>
            Logout
            <div className={classes['under-line']}></div>
          </button>
      </nav>
     }
    </div>
  )
}

export default Header