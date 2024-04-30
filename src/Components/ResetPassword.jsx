 
import React, { useState } from 'react'
import '../App.css'
import Axios from 'axios';
import { useNavigate,Link, useParams } from 'react-router-dom';


const ResetPassword = () => {

  const [password, setPassword] = useState('');
  const {token} = useParams()

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post(`${process.env.VITE_API}/auth/reset-password/`+token, {
     
      password,
   
    }).then(response =>{
      if(response.data.status){
       
        navigate('/');
        alert("Password reset was successful")
      }
      console.log(response.data);
    }).catch(err =>{
      console.log(err)
    })
  };

  return (
    <div className='sign-up-container'>


      <form className='sign-up-form'onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        

        <label htmlFor="password">New Password :</label>
        <input type="password" placeholder='******' onChange={(e) => setPassword(e.target.value)} />

       
        <button type='submit'>Send</button>
        
      </form>
    </div>
  )
}

export default ResetPassword