import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Addproduct = () => {
  // Declaring state varibles
  const[product_name,setProductName] = useState("")
  const[product_description,setProductDescription] = useState("") 
  const[product_cost,setProductCost] = useState("")
  const[product_photo,setProductPhoto] = useState("")

  //Status messages
  const[loading,setLoading] = useState("")
  const[error,setError] = useState("")
  const[success,setSuccess] = useState("")

  // Function to add products to database
  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading("Please wait...")
    try {
      // Retrieving product details
      const formData = new FormData();
      formData.append("product_name",product_name)
      formData.append("product_description",product_description)
      formData.append("product_cost",product_cost)
      formData.append("product_photo",product_photo)

      //Addding base url to post data
      const response = await axios.post("https://julietfungo.alwaysdata.net/api/add_product", formData)
      setLoading("")
      setSuccess(response.data.success)

    } catch (error) {
      setError(error.message)
      
    }
  }
  return (
    <div className='row justify-content-center add-product'>
      <div className='col-md-6 card shadow mt-2 p-2'>
          <form action="" onSubmit={handleSubmit}>
          <h2 className='p-4'>Add Product</h2>

    {/* binding variables*/}
    <p>{loading}</p>
    <p>{error}</p>
    <p>{success}</p>

    <nav>
      <Link to = "/" className="btn btn-dark p-50">GET ALL PRODUCTS</Link>
    </nav><br />

          <input 
            type="text" 
            placeholder='Enter product name' 
            className='form-control'
            onChange={(e)=>setProductName(e.target.value)}
            required
            /><br />

          <textarea name="" id=""
            className='form-control'
            placeholder='Enter product description'
            onChange={(e)=>setProductDescription(e.target.value)}
            required
            ></textarea><br />

          <input 
            type="number" 
            placeholder='Enter product cost' 
            className='form-control'
            onChange={(e)=>setProductCost(e.target.value)}
            required
            /><br />

          <input 
            type="file" 
            placeholder='Enter product photo' 
            className='form-control'
            onChange={(e)=>setProductPhoto(e.target.files[0])}
            required
            /><br />

          <input 
            type="submit" 
            value="Add Product" 
            className='btn btn-success w-100'/>
        </form>
      </div>
    </div>
  )
}

export default Addproduct
