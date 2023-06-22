import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from '../../utils/newRequest';

const GigCard = ({ item }) => { // this item is coming from data.map(item=gig) so this is query data

  const { isLoading, error, data } = useQuery({ // seller's data fetching when we are fetching a gig because gig has the seller's userID in it
    queryKey: [`${item.userId}`],
    queryFn: () => newRequest.get(`/users/${item.userId}`).then((res) => {
      return res.data;
    }),
  })

  return (
    <Link to={`/gig/${item._id}`} style={{textDecoration: 'none'}}>
      <div className="gigCard">
        <img src={item.cover} alt="" />
        <div className="info">
            {isLoading ? "loading" : error ? "Something went wrong!" : <div className="user">
                <img src={data.img || "/img/noavatar.png"} alt="" />
                <span>{data.username}</span>
            </div>}
            <p>{item.desc}</p>
            <div className="star">
                <img src="./img/star.png" alt="" />
                <span>{!isNaN(item.totalStars / item.starNumber) && Math.round(item.totalStars / item.starNumber)}</span>
            </div>
        </div>
        <hr />
        <div className="details">
            <img src="./img/heart.png" alt="" />
            <div className="price">
                <span>STARTING AT</span>
                <h2>₹{item.price}</h2>
            </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
