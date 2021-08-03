import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import musicReducer from './music/musicReducer'
import userReducer from './user/userReducer'


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    music: musicReducer,
    user: userReducer
})

export default rootReducer