import React from "react";
import "./Review.scss";
import newRequest from "../../utils/newRequest.js";
import { useQuery } from "@tanstack/react-query";

const Review = ({review}) => {

    const { isLoading, error, data } = useQuery({
        queryKey: [`${review.userId}`],
        queryFn: () => newRequest.get(`/users/${review.userId}`).then((res) => { // get reivews on that specific gig using gigId 
            return res.data;
        }),
    });

    return (
        <div className="review">
            {isLoading ? "loading" : error ? "Something went wrong!" : <div className="user">
                <img
                    className="pp"
                    src={data.img || "/img/noavatar.png"}
                    alt=""
                />
                <div className="info">
                    <span>{data.username}</span>
                    <div className="country">
                    <span>{data.country}</span>
                    </div>
                </div>
            </div>}
            <div className="stars">
                {Array(review.star).fill().map((item, i) => (
                    <img src="/img/star.png" alt="" />
                ))}
                <span>{review.star}</span>
            </div>
            <p>{review.desc}</p>
            <div className="helpful">
                <span>Helpful?</span>
                <span>Yes</span>
                <img src="/img/like.png" alt="" />
                <span>No</span>
                <img src="/img/dislike.png" alt="" />
            </div>
        </div>
    );
};

export default Review;
