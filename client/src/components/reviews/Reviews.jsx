import React from 'react'
import "./Reviews.scss"
import Review from '../review/Review';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from '../../utils/newRequest';

const Reviews = ({ gigId }) => {

    const queryClient = useQueryClient(); // to interact with cache & memories

    const { isLoading, error, data } = useQuery({
        queryKey: ["reviews"],
        queryFn: () => newRequest.get(`/review/${gigId}`).then((res) => { // get reivews on that specific gig using gigId 
            return res.data;
        }),
    });

    const mutation = useMutation({
        mutationFn: (review) => { // takes review as a paramter and makes post request with that review data
            return newRequest.post('/review', review);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["reviews"]); // invalidate specifc query hence trigger a re-fetch of that query
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        // because I have only 2 input values
        const desc = e.target[0].value; // inputs are accessed from e.target
        const star = e.target[1].value;
        mutation.mutate({ // review data is made here and called mutation
            gigId,
            desc,
            star
        })
    };

    return (
        <div className="reviews">
            <h2>Reviews</h2>
            {isLoading ? "loading" : error ? "Something went wrong!"
                : data.map((review) => <Review key={review._id} review={review} />)}

            <div className="add">
                <h3>Add a review</h3>
                <form className='addForm' onSubmit={handleSubmit}>
                    <input type="text" placeholder='write your opinion' />
                    <select name="" id="">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Reviews