import React, { useEffect } from 'react'
import "./Success.scss" 
import { useNavigate, useLocation } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const Success = () => {
  const {search} = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");

  useEffect(()=>{
    const makeRequest = async () => {
      try {
        await newRequest.put("/order", {payment_intent});
        setTimeout(()=>{
          navigate("/orders")
        }, 5000)
      } catch (err) {
        console.log(err)
      }
    };
    makeRequest();
  },[]);

  return (
    <div className='success'>
      <div className="container">
        <div className="title">
          <h1>Payment SuccessFul</h1>
          <img src="/img/greencheck.png" alt="" />
        </div>
        <h2>You are being redirected to the orders page... </h2>
        <h3>Please do not close the page</h3>
      </div>
    </div>
  )
}

export default Success