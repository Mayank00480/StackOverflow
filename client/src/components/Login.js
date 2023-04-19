import React ,{useState} from 'react'
import icon from '../Assets/icon.png'
import AboutAuth from './AboutLogin'
import './Login.css'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {signup , login} from '../action/auth'

export default function Login() {
    const [IsSignup , setIsSignup] = useState(false)
    const [name ,setName] = useState('')
    const [email ,setEmail] = useState('')
    const [password ,setPassword] = useState('')
    const Dispatch = useDispatch()
    const Navigate = useNavigate()
    function HandleSwitch(){
        setIsSignup(!IsSignup)
    } 
    function handleSubmit(e){
        e.preventDefault()
        
        if(!email && !password)
        {
            alert("Enter Email and Password to continue")
        }
        if(IsSignup)
        {
            if(!name)
            {
                alert('Enter Your Name to Continue')
            }
           Dispatch( signup({name,email,password},Navigate))
        }
       Dispatch(login({email,password},Navigate)); 
 }

  return (
    <section className = "auth-section">
        { IsSignup && <AboutAuth/>}
    <div className = "auth-container-2">
   
        {!IsSignup && <img src = {icon} alt = "Login-logo" className = "login-logo" />}
        <form onSubmit={handleSubmit}>
            {
                IsSignup && <label htmlFor = "name">
                    <h4>Display Name</h4>
                    <input type ="text" id = "name " onChange={ (e) => {setName(e.target.value)}} />
                </label>
            }
            <label htmlFor = "email">
                <h4>Email </h4>
                <input type = "email" name = "email" id = "email" onChange={ (e) => {setEmail(e.target.value)}} /> 
            </label>
            <label htmlFor = "password">
               <div style = {{display :"flex", justifyContent:"space-between"}} > <h4>Password </h4>
               {!IsSignup && <p style = {{color : "#007ac6", fontSize : "13px" }}>Forgot Password</p>}</div>
               <input type = "password" name = "password" id = "password" onChange={ (e) => {setPassword(e.target.value)}}/> 
               {IsSignup && <p style ={{fontSize : "13px" , color : "#666767"}}>Passwords must contain at least eight<br/>
characters, including at least 1 letter and 1<br/>
number.</p>}</label>
    
           
            {IsSignup && <label htmlFor ="check" id = "Label">
                <input type = "checkbox" id ="check"/>
                <p style ={{fontSize : "13px"}}>Opt-in to receive occasional<br/>
product updates, user research invitations,<br/>
company announcements, and digests</p></label>
}
            
            <button type ="submit" className= "auth-btn">{IsSignup? 'Signup' :'Login' }</button>
            {IsSignup && <p  style ={{fontSize : "13px" , color : "#666767"}}>By clicking “Sign up”, you agree to our <span style = {{color : "#007ac6"}}>terms of
service </span>,<span style = {{color : "#007ac6"}}> privacy policy </span>and <span style = {{color : "#007ac6"}}>cookie policy</span></p>}
            <p>{IsSignup? 'Already have an account' : "Don't have an account"}
            <button type ="button" className = "handleswitchbtn" onClick = {HandleSwitch}>{ IsSignup? 'Login' : 'Signup'}</button> </p>
        </form>
    </div>
    </section>
  )
}
 