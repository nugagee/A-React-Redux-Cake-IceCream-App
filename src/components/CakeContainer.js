import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}


// THESE 2 PROPS WERE USED TO CONNECT OUR REACT APP WITH THE STORE [USION CONNECT FUNCTION]
// HERE IS THE PROPS THAT UPDATE THE STATE FROM THE STORE
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

// HERE IS THE PROPS THAT DISPATCH THE ACTION SEND BY THE APP 
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

// THE CONNECT IS USED TO CONNECT THE 2 PROPS WITH OUR APP
export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(CakeContainer)
