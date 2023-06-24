import React, { useState, useEffect } from 'react';
import "./Pay.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/newRequest";
import {useParams} from "react-router-dom";
import CheckoutForm from '../../components/checkoutForm/CheckoutForm';

const stripePromise = loadStripe("pk_test_51NMO83SG3dDx2EoIrLFVHKG0YQlgouLIiy526DdNSJPf7yS0SwucHayLoOommEpUDRYSpKyoPKuSCfI6pAdbP48c00Yqe5WGXN");

const Pay = () => {
    const [clientSecret, setClientSecret] = useState("");
    const {id} = useParams();
    // as soon as we open this page we are going to make this request
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await newRequest.post(`/order/create-payment-intent/${id}`);
                setClientSecret(res.data.clientSecret);
            } catch (err) {
                console.log(err);
            }
        };
        makeRequest();
    },[]);

    const appearance = {
      theme: 'stripe',
    };
    const options = {
      clientSecret,
      appearance,
    };


  return (
    <div className='pay'>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
    </div>
  )
}

export default Pay