import React from "react";
import "./MyGigs.scss";
import { Link } from "react-router-dom";
const MyGigs = () => {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className="img" src="https://images.nightcafe.studio/jobs/sAMY7Zr3ppEBy8pDb7ms/sAMY7Zr3ppEBy8pDb7ms--1--q5eis_13.8889x.jpg?tr=w-1600,c-at_max" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>124</td>
            <td>
              <img className="delete" src="/img/delete.png" alt="" />
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
              <img className="delete" src="/img/delete.png" alt="" />
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
              <img className="delete" src="/img/delete.png" alt="" />
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
              <img className="delete" src="/img/delete.png" alt="" />
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
              <img className="delete" src="/img/delete.png" alt="" />
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
              <img className="delete" src="/img/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
