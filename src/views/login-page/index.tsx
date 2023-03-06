import React from 'react'
import classes from './index.module.css'
import LoginForm from './login-form'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginFunction } from '../../store/actions'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loginFunctionBind = bindActionCreators(loginFunction, dispatch)
  const onSubmit = async(username:string, password:string) => {
   loginFunctionBind(username, password, navigate, toast)
  }
  return (
    <>
    <ToastContainer position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
    />
    <section className={classes['login-section']}>
      <section className={classes['summary']}>
        <h3>We help businesses manage their inventory and fulfill customer orders.</h3>
        <p> 
          By using an order management inventory system, businesses can improve their 
          operational efficiency, reduce errors, and provide better customer service.
        </p>
      </section>
      <LoginForm onSubmit={onSubmit}/>
    </section>
    </>
  )
}

export default LoginPage