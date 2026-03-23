import React, { useState } from 'react'
import image from '../logo.svg'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
const Mpesapayment = () => {
  // Declaring state variables
  const {product} = useLocation().state ||{};
  const[phone,setPhone] = useState("")
  const[message,setMessage] = useState("")
  const[error,setError] = useState("")

  // image url
  const img_url = "https://julietfungo.alwaysdata.net/static/images/"

  const handleSubmit = async(e)=>{
    e.preventDefault()
    
    setMessage("Please wait as we process the transaction")
    try {
      //Retrieving user and product details(payment details)
      const formData = new FormData()
      formData.append("phone",phone)
      formData.append("amount",product.product_cost)

      //adding base url
      const reponse = await axios.post("https://julietfungo.alwaysdata.net/api/mpesa_payment",formData)
      console.log(Response.data)
    } catch (error) {
      setError(error.message)
      
    }
  }

  return (
    <div className='row justify-content-center md-4'>
      <h1>Lipa na Mpesa</h1>
      <div className='col-md-4 card shadow mt-2 p-2'>
        <img src={img_url + product.product_photo} alt={product.product_photo} className='product_img' />
        <p className=''>Product Name : {product.product_name}</p>
        <p className='text-warning'>Product Cost: KES {product.product_cost}</p>

        {/* Bonding variables */}
        {phone}
        {message}
        {error}
        {/* phone input */}
        <form action="" onSubmit={handleSubmit}>
          <b><label htmlFor="">Phone number</label></b>
          <input 
          type="tel"
          placeholder='Enter phone number'
          className='form-control' 
          onChange={(e)=>setPhone(e.target.value)}/><br/>

          <button className='btn btn-dark'>
            Make Payment
          </button>
        </form>
      </div>
    </div>
  )
}

export default Mpesapayment
