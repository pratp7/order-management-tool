import { combineReducers } from 'redux'
import loginReducer from './login-reducer'
import orderReducer from './order-reducer'

const reducers = combineReducers({
 loginReducer,
 orderReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>