import React from 'react'
import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import{mul, div} from './action/index'
const App = () => {


  //useSelector is used to get the present state which is defined in 
  //reducers
  
  const mystate=useSelector(state=>state.calculate)

  //for action

  const dispatch=useDispatch()

  const divv=()=>{
    dispatch(div())
  }

  const mull=()=>{
   // dispatch(mul())

   //for action.paylod
   //ekhn action page a jaite hobe
   dispatch(mul(10))

  }
  return (
    <div>
    <div className="main-div">
      

    <div className="container">

    <h1>Calculator</h1>
    <h4>using React and Redux</h4>
    
    <div className="quantity">
      <a className="quantity__minus" title="Decrement" onClick={divv} ><span>/</span></a>
      <input name="quantity" type="text" className="quantity__input" value= {mystate} />
      <a className="quantity__plus" title="Increment"  onClick={mull}><span>*</span></a>
    </div>

        </div>
      </div>
    </div>
  )
}

export default App
