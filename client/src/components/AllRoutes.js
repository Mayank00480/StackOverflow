import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Questions from './Questions'
import AskQuestion from './AskQuestion'
import DisplayQuestion from './DisplayQuestion'
export default function AllRoutes() {
  return (
    <Routes>
        <Route exact path = "/" element ={<Home/>}/>
        <Route exact path = "/Login" element ={<Login/>}/>
        <Route exact path = "/Questions" element ={<Questions/>}/>
        <Route exact path = "/Question/:id" element = {<DisplayQuestion />}/>
        <Route exact path = "/AskQuestion" element = {<AskQuestion />}/>
    </Routes>
  )
}
