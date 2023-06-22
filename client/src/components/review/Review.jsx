import React from "react";
import "./Review.scss";

const Review = () => {
    return (
        <div className="review">
            <div className="user">
                <img
                    className="pp"
                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/98c5922378b5cdfbf6c747d921d7dac3-1609804157664/d732f374-7ba3-4f30-8ff7-c5e9a662bbe1.jpg"
                    alt=""
                />
                <div className="info">
                    <span>Mukul Pathak</span>
                    <div className="country">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png"
                            alt=""
                        />
                        <span>India</span>
                    </div>
                </div>
            </div>
            <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
            </div>
            <p>
                I have been working with Ms. Navya for the past 2 weeks. It has been a
                great experience. She absolutely met my requirements although I was on
                my side a bit unclear sometimes. Provided proper revision as much as i
                asked because we both established very good communication. I would
                recommend her, if you communicate good with her you will get what you
                want. Well I am solicitating her for my next projects{" "}
            </p>
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
