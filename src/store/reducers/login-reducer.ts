import { ActionTypes, ACTION } from "../actions/actionTypes"
import { RootState } from '.'


type InitialState = {
    isLoading:boolean,
    isLogged:string,
    userDetails:{[key:string]:any},
    isError:string,
    userName:string

}
let parsedObj = {}

if(localStorage.getItem('userInfo')){
    parsedObj=  JSON.parse(localStorage.getItem('userInfo') || '') 
}
const initalState:InitialState = {
    isLoading:false,
    isLogged:localStorage.getItem('token') || '',
    userDetails: parsedObj,
    userName: localStorage.getItem('username') || '',
    isError:''

}

const loginReducer = (state=initalState, action:ACTION) => {
    switch(action.type){
        case ActionTypes.IS_LOGGED:
            const {token, firstName} = action.payload
            localStorage.setItem('token', token)
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
            localStorage.setItem('username', firstName)
            return {
                ...state,
                isLoading:false,
                isLogged:token,
                userDetails:action.payload,
                userName:firstName
            }
        case ActionTypes.LOGIN_ERROR:
            return {
                ...state,
                isError:action.payload,
                isLoading:false,
                isLogged:'',
                userName:''
            }
        case ActionTypes.IS_LOADING:
            return {
                ...state,
                isLoading:true
            }
        case ActionTypes.LOG_OUT:
            localStorage.clear()
            return {
                ...state,
                isLogged:'',
                userDetails:{},
                userName:''

            }
        default:
            return state
    }

    
}

export default loginReducer

//selectors
export const isLoggedSelector = (state:RootState) => state.loginReducer['isLogged']
export const isLoadingSelector = (state:RootState) => state.loginReducer['isLoading']
export const isErrorSelector = (state:RootState) => state.loginReducer['isError']
export const userNameSelector = (state:RootState) => state.loginReducer['userName']