import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item} </h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake 
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())

    return {
        buyItem: dispatchFunction
    }
}

// INCASE YOU ONLY WANTS TO DISPATCH AN ACTION TO THE STORE AND NOT SUBSCRIBE TO THE STORE YOU HAVE TO PASS NULL TO THE CONNECT WHICH WILL DISABLE THE MAPSTATETOPROPS ACTION FROM THE STORE

// export default connect(null, mapStateToProps, mapDispatchToProps)(ItemContainer)
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
