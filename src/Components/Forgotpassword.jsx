 
import React, { useState } from 'react'
import '../App.css'
import Axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';


const Forgotpassword = () => {

  const [email, setEmail] = useState('');


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post(`${process.env.VITE_API}/auth/forgot-password`,{
     
      email,
   
    }).then(response =>{
      if(response.data.status){
        alert("Check your mail for reset password link")
        navigate('/login')
      }
    
    }).catch(err =>{
      console.log(err)
    })
  };

  return (
    <div className='sign-up-container'>


      <form className='sign-up-form'onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
      

        <label htmlFor="email">Email :</label>
        <input type="email" autoComplete='off' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />

       
        <button type='submit'>Send</button>
        
      </form>
    </div>
  )
}

export default Forgotpassword