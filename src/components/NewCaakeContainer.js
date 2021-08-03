import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
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
        buyCake: number => dispatch(buyCake(number))
    }
}

// THE CONNECT IS USED TO CONNECT THE 2 PROPS WITH OUR APP
export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(NewCakeContainer)
