import { Dispatch } from 'redux'
import { ACTION, ActionTypes } from './actionTypes'
import axios from 'axios'
import { NavigateFunction } from 'react-router-dom'
import data from '../../assets/MOCK_DATA.json'

// {
    
//     username: 'atuny0',
//     password: '9uQFF1Lh',
//   
//   }

export const loginFunction = (username:string, password:string, navigate:NavigateFunction, toast:any) => async(dispatch:Dispatch<ACTION>) => {
    dispatch({
        type:ActionTypes.IS_LOADING
    })

    const data = {
        username,
        password,
        // expiresInMins:1
    }

    try {
        const response = await axios.post('https://dummyjson.com/auth/login', data, {
            headers: { 'Content-Type': 'application/json' }
        })
        dispatch({
            type:ActionTypes.IS_LOGGED,
            payload: response?.data
        })
        navigate('/dashboard')
        
        
    } catch (error) {
        dispatch({
            type:ActionTypes.LOGIN_ERROR,
            payload:'Invalid username/password'
        })
        toast('Invalid username/password')
    }

}

export const logoutHandler = () => {
    return {
        type:ActionTypes.LOG_OUT
    }
}

export const fetchTableData = () => {

    try {
        return{
            type:ActionTypes.FETCH_ORDERS,
            payload:data
        }
        
    } catch (error) {
        return {
            type:ActionTypes.FETCH_ERROR,
            payload:'Oops!! Something went Wrong'
        }
    }

}

// export const handleFilterChange = () => {
//     return {
//         type:ActionTypes
//     }
// }

// export const handleSearchChange = (value:string) => {
//     console.log(value)
//     return {
//         type:ActionTypes
//     }
// }