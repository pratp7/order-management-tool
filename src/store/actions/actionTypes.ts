import { type } from "os"

export enum ActionTypes {
    IS_LOADING='IS_LOADING',
    IS_LOGGED ='IS_LOGGED',
    LOGIN_ERROR='LOGIN_ERROR',
    LOG_OUT='LOG_OUT',
    FETCH_ORDERS='FETCH_ORDERS',
    FETCH_LOADING='FETCH_LOADING',
    FETCH_ERROR='FETCH_ERROR'

}


interface isLoading {
    type: ActionTypes.IS_LOADING | ActionTypes.FETCH_LOADING,
}

interface isError{
    type: ActionTypes.LOGIN_ERROR | ActionTypes.FETCH_ERROR,
    payload: string
}

interface isLogged {
    type: ActionTypes.IS_LOGGED,
    payload:{[key:string]:any}
}
interface logOut {
    type:ActionTypes.LOG_OUT
}

interface fetchOrders {
    type:ActionTypes.FETCH_ORDERS
    payload:{}[]
}

export type ACTION = isLoading | isError | isLogged | logOut | fetchOrders