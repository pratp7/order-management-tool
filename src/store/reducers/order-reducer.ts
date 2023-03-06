import { ActionTypes, ACTION } from "../actions/actionTypes"
import { RootState } from '.'



type InitialState = {
    fetchedData:{}[],
    tableLoading:boolean,
    fetchingError:string
}

const initalState:InitialState = {
    fetchedData:[],
    tableLoading:false,
    fetchingError:''

}

const orderReducer = (state=initalState, action:ACTION) => {
    switch(action.type){
        case ActionTypes.FETCH_ORDERS:
            return {
                ...state,
                fetchedData:action.payload,
                tableLoading:false

            }
        case ActionTypes.FETCH_LOADING:
            return {
                ...state,
                tableLoading:true
            }
        case ActionTypes.FETCH_ERROR:
            return {
                ...state,
                fetchingError:action.payload

            }
        default:
            return state
    }

}

export default orderReducer

//selectors
export const fetchedDataSelector = (state:RootState) => state.orderReducer['fetchedData']
export const tableLoadingSelector = (state:RootState) => state.orderReducer['tableLoading']
export const fetchingErrorSelector = (state:RootState) => state.orderReducer['fetchingError']