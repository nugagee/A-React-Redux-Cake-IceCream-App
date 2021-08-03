import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of IceCreams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}


// THESE 2 PROPS WERE USED TO CONNECT OUR REACT APP WITH THE STORE [USION CONNECT FUNCTION]
// HERE IS THE PROPS THAT UPDATE THE STATE FROM THE STORE
const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

// HERE IS THE PROPS THAT DISPATCH THE ACTION SEND BY THE APP 
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

// THE CONNECT IS USED TO CONNECT THE 2 PROPS WITH OUR APP
export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(IceCreamContainer)
