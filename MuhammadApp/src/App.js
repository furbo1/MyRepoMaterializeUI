
import React, { useState } from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
 import Header from '../src/component/Header/Header';
 import Login from '../src/component/login/login'
  import Signup from '../src/component/Sigup/Signup'
function App() {
    // const [state, setState] = useState({})
    

    // const updateState = (e) => {
    //     state[e.target.id] = e.target.value
    //     setState({ ...state })
    // }
    //  const getData=(e)=>{
    //      e.preventDefault()
    //       console.log(state)
         
    //  }

    return (


      <BrowserRouter>
        <Route path="/" component={Header}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>




      </BrowserRouter>
    )


}
export default App