import React from "react";
import "./Orders.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from '../../utils/newRequest';
const Orders = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["orders"],
    queryFn: () => newRequest.get(`/order`).then((res) => {
      return res.data;
    }),
  })

  return (
    <div className="orders">
      {isLoading ? "Loading" : error ? "Something went wrong!" : <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Contact</th>
          </tr>
          {data.map((order) => (
            <tr key={order._id}>
              <td>
                <img className="img" src={order.image} alt="" />
              </td>
              <td>{order.title}</td>
              <td>{order.price}</td>
              <td>
                <img className="message" src="/img/message.png" alt="" />
              </td>
            </tr>
          ))}
        </table>
      </div>}
    </div>
  );
};

export default Orders;
