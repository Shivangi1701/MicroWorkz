import React from 'react'
import "./Reviews.scss"
import Review from '../review/Review';
import { useQuery } from "@tanstack/react-query";
import newRequest from '../../utils/newRequest';

const Reviews = ({gigId}) => {

    const { isLoading, error, data } = useQuery({
        queryKey: ["review"],
        queryFn: () => newRequest.get(`/reviews/${gigId}`).then((res) => { // get reivews on that specific gig using gigId 
            return res.data;
        }),
    });
    return (
        <div className="reviews">
            <h2>Reviews</h2>
            {isLoading ? "loading" : error ? "Something went wrong!" 
            : data.map((review)=> <Review key={review._id} review={review}/>)}
        </div>
    )
}

export default Reviews