import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

// INSTEAD OF MAKING USE OF THE [CONNECT] TO ACCESS AND DISPATCH ACTION TO THE STORE....[USESELECTOR] and [USEDISPATCH] IS BEEN PUT INTO USE HERE 
function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
