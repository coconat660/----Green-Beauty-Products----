import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  // Declaring state variables
  const[username,setUsername] = useState("")
  const[email,setEmail] = useState("")
  const[phone,setPhone] = useState("")
  const[password,setPassword] = useState("")


  //Status messages
const[loading,setLoading] = useState("")
const[error,setError] = useState("")
const[success,setSuccess] = useState("")

//function to submit
const handleSubmit = async(e) =>{
  e.preventDefault();
  setLoading("Please wait...");
  try {
    //Retrieving user details
    const formData = new FormData();
    formData.append("username",username)
    formData.append("email",email)
    formData.append("phone",phone)
    formData.append("password",password)

    //Adding base url
    const response = await axios.post("https://julietfungo.alwaysdata.net/api/signup",formData);

    setSuccess(response.data.Success)
    setLoading("")
  } catch (error) {
    setError(error.message)
    
  }
}


  return (
    <div className='container-fluid sign-up'>
    <div className='row'>
      <div className='col '>
        <h1>💚Welcome to Green Beauty💚</h1>
        <h2>Let's Get Started</h2>
      </div>
      <div className='col card shadow mt-2 p-2 '>
        
        {/* Binding values from form */}
        {loading}<br/>
        {error}<br/>
        {success}<br/> 

        {/* Sign up form */}
        <form className="my-form" onSubmit={handleSubmit}>
          <h1 className='text-success'>Sign Up</h1>
          <fieldset>
            <input 
              type="text"
              placeholder='Enter username'
              className='form-control' 
              onChange={(e)=>setUsername(e.target.value)}
              required/><br />

            <input 
              type="email" 
              placeholder='Enter email' 
              className='form-control' 
              onChange={(e)=>setEmail(e.target.value)}
              required/><br />

            <input 
              type="tel" 
              placeholder='Enter phone number(254XXXXXXXXXX)' 
              className='form-control' 
              onChange={(e)=>setPhone(e.target.value)}
              required/><br />

            <input 
              type="password" 
              placeholder='Enter password' 
              className='form-control' 
              onChange={(e)=>setPassword(e.target.value)}
              required/><br />

            <input 
              type="submit" 
              value="Create new account" 
              className='btn btn-success'/>
          </fieldset><br />

          {/* incase someone already has an account */}
         <h5>Already have an account?<Link to = '/signin' className=''> Signin</Link></h5>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Signup
