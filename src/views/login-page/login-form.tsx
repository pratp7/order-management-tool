import React, { useState } from 'react'
import classes from './index.module.css'
import { formValidation } from '../../utils/login-validation';
import { isLoadingSelector } from '../../store/reducers/login-reducer';
import { useSelector } from 'react-redux';
import Loader from '../../utils/Loader';

type Props = {
  onSubmit:(name:string, pass:string) => void
}


const errorObj = {isValid:true, userNameMsg:'', passwordMsg:''}

const LoginForm = ({onSubmit}:Props) => {
  const isloading = useSelector(isLoadingSelector)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(errorObj);

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = formValidation(username, password)
    if(errors.isValid){
     onSubmit(username, password)
    }else{
      setErrors(errors)
    }
    setTimeout(()=> {setErrors(errorObj)}, 1000)
    
  }

  return (
    <div className={classes['login-form-layout']}>
      <h2>Log In to the Account</h2>
    <form onSubmit={handleSubmit}>
    <div className={classes['inputbox']}>
      <input type="text" value={username}
          onChange={(event) => setUsername(event.target.value)} placeholder={`${errors.userNameMsg ? errors.userNameMsg : ''}`}/>
      <span>Username</span>
    </div>
    <div className={classes['inputbox']}>
      <input type="password" value={password}
          onChange={(event) => setPassword(event.target.value)}  placeholder={`${errors.passwordMsg ? errors.passwordMsg : ''}`}/>
      <span>Password</span>
    </div>
     { isloading ? <Loader/>:  <button type='submit'>Submit</button> }
  </form>
    </div>
  )
}

export default LoginForm