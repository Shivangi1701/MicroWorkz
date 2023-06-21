import React, { useState } from 'react'
import "./Register.scss"
import upload from '../../utils/upload';
import newRequest from "../../utils/newRequest";
import {useNavigate} from "react-router-dom";

const Register = () => {
  
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => { 
      return { // new object created merges prev properties
        ...prev, 
        [e.target.name]: e.target.value // means only input name is changed and rest properties are similar as previous
      };
    })
  }

  const handleSeller = (e) => {
    setUser((prev)=>{
      return{
        ...prev,
        isSeller: e.target.checked
      }
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const url = await upload(file); // upload will return the url of uploaded file if it was successful in upload.js
    try {
      await newRequest.post("auth/register", {
        ...user, // posting info to database
        img: url, // img url is now url of uploaded file on cloudinary
      })
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="">Username</label>
          <input name='username' type="text" placeholder='shivangi' onChange={handleChange}/>
          <label htmlFor="">Email</label>
          <input name='email' type="email" placeholder='shivangi170102@gmail.com' onChange={handleChange}/>
          <label htmlFor="">Password</label>
          <input name='password' type="password" onChange={handleChange}/>
          <label htmlFor="">Profile Picture</label>
          <input type="file" onChange={e=>setFile(e.target.files[0])}/> 
          <label htmlFor="">Country</label>
          <input name='country' type="text" placeholder='India' onChange={handleChange}/>
          <button type='submit'>Register</button>
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller}/>
              <span className='slider round'></span>
            </label>
          </div>
          <label htmlFor="">Phone Number</label>
          <input name='phone' type="text" placeholder='+91 9823563538' onChange={handleChange}/>
          <label htmlFor="">Description</label>
          <textarea name="desc" id="" cols="30" rows="10" onChange={handleChange}></textarea>
        </div>
      </form>
    </div>
  );
}

export default Register