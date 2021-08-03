import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
// THIS PACKAGE[logger] ALLOW US TO DISPLAY THE ACTION LOGS IN THE CONSOLE, and APPLYING WITH THE [APPLYMIDDLEWARE] FUNCTION
import logger from 'redux-logger'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store