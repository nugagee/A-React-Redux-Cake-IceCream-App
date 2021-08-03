import React from 'react'
import { connect } from 'react-redux'
import { playMusic } from '../redux'

function MusicContainer(props) {
    return (
        <div>
            <h2>Number of Musics - {props.numOfMusics}</h2>
            <button onClick={props.playMusic}>Play Music</button>
        </div>
    )
}


// THESE 2 PROPS WERE USED TO CONNECT OUR REACT APP WITH THE STORE [USION CONNECT FUNCTION]
// HERE IS THE PROPS THAT UPDATE THE STATE FROM THE STORE
const mapStateToProps = state => {
    return {
        numOfMusics: state.music.numOfMusics
    }
}

// HERE IS THE PROPS THAT DISPATCH THE ACTION SEND BY THE APP 
const mapDispatchToProps = dispatch => {
    return {
        playMusic: () => dispatch(playMusic())
    }
}

// THE CONNECT IS USED TO CONNECT THE 2 PROPS WITH OUR APP
export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(MusicContainer)
