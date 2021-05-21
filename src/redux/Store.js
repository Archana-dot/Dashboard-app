import {createStore} from 'redux'
import User from './reducer/User'

const store = createStore(User)
export default store