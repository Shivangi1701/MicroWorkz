import React from "react";
import "./Orders.scss";
import { Link } from "react-router-dom";
const Orders = () => {
  
  const currentUser = {
    id: 1,
    username: "Shivangi Chauhan",
    isSeller: true,
  }
  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className="img" src="https://images.nightcafe.studio/jobs/sAMY7Zr3ppEBy8pDb7ms/sAMY7Zr3ppEBy8pDb7ms--1--q5eis_13.8889x.jpg?tr=w-1600,c-at_max" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>124</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="https://images.nightcafe.studio/jobs/sAMY7Zr3ppEBy8pDb7ms/sAMY7Zr3ppEBy8pDb7ms--1--q5eis_13.8889x.jpg?tr=w-1600,c-at_max" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>124</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="https://images.nightcafe.studio/jobs/sAMY7Zr3ppEBy8pDb7ms/sAMY7Zr3ppEBy8pDb7ms--1--q5eis_13.8889x.jpg?tr=w-1600,c-at_max" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>124</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="https://images.nightcafe.studio/jobs/sAMY7Zr3ppEBy8pDb7ms/sAMY7Zr3ppEBy8pDb7ms--1--q5eis_13.8889x.jpg?tr=w-1600,c-at_max" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>124</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="https://images.nightcafe.studio/jobs/sAMY7Zr3ppEBy8pDb7ms/sAMY7Zr3ppEBy8pDb7ms--1--q5eis_13.8889x.jpg?tr=w-1600,c-at_max" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>124</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="https://images.nightcafe.studio/jobs/sAMY7Zr3ppEBy8pDb7ms/sAMY7Zr3ppEBy8pDb7ms--1--q5eis_13.8889x.jpg?tr=w-1600,c-at_max" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>124</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
