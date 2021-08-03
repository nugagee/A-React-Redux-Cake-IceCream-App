import { PLAY_MUSIC } from './musicTypes'

const initialState = {
    numOfMusics: 30
}

const musicReducer = (state = initialState, action) => {
    switch(action.type) {
        case PLAY_MUSIC: return {
            ...state,
            numOfMusics: state.numOfMusics - 1
        }
        default: return state
    }
}

export default musicReducer