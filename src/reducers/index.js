import {combineReducers } from 'redux'
import {viewBillReducer} from './viewBillReducer'
const rootReducer = combineReducers({vBillData:viewBillReducer});
export default rootReducer;