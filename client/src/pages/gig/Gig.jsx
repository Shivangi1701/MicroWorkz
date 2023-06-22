import React, { useEffect } from 'react'
import "./Gig.scss"
import { Slider } from 'infinite-react-carousel/lib'
import { useQuery } from "@tanstack/react-query";
import newRequest from '../../utils/newRequest';
import { useParams } from 'react-router-dom';

const Gig = () => {

  const {id} = useParams(); // gig id from query params

  const { isLoading, error, data } = useQuery({ // fetching gig data through it's id in query parameter
    queryKey: ["gig"],
    queryFn: () => newRequest.get(`/gigs/single/${id}`).then((res) => {
      return res.data;
    }),
  })

  return (
    <div className='gig'>
      {isLoading ? "loading" : error ? "Something went wrong!" : <div className="container">
        <div className="left">
          <span className='pathname'>MICROWORKZ{" > "}{data.cat}{" > "}</span>
          <h1>{data.title}</h1>
          <div className="user">
            <img className='pp' src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c5323d1e3c30bbac2c31a905b5bd8cb2-1675191168940/22bca898-8c41-4832-be06-ac78f7d044a4.PNG" alt="" />
            <span>Navya Mehta</span>
            {!isNaN(data.totalStars / data.starNumber) && (
              <div className="stars">
                {Array(Math.round(data.totalStars / data.starNumber)).fill().map((item, i)=>(
                  <img src="/img/star.png" alt="" key={i} />
                ))}
                <span>{Math.round(data.totalStars / data.starNumber)}</span>
              </div>
            )}
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider" >
            {data.images.map(img=>(
              <img key={img} src={img} alt="" />
            ))}
          </Slider>
          <h2>About this gig</h2>
          <p>{data.desc}</p>
          <div className="seller">
            <h2>About the seller</h2>
            <div className="user">
              <img className='pp' src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c5323d1e3c30bbac2c31a905b5bd8cb2-1675191168940/22bca898-8c41-4832-be06-ac78f7d044a4.PNG" alt="" />
              <div className="info">
                <span>Navya Mehta</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber)).fill().map((item, i)=>(
                      <img src="/img/star.png" alt="" key={i} />
                    ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">India</span>
                </div>
                <div className="item">
                  <span className="title">Member Since</span>
                  <span className="desc">Nov 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">19 hours</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr/>
              <p>Hi there & welcome to my shop. I'm Navya Mehta - a digital artist who creates fully customizable images based on your specific needs and vision. You send me the photo or description, and I will present to you a one of a kind - AI generated piece of art. If you have any questions, send me a message anytime :)</p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">  
              <div className="user">
                <img className='pp' src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/98c5922378b5cdfbf6c747d921d7dac3-1609804157664/d732f374-7ba3-4f30-8ff7-c5e9a662bbe1.jpg" alt="" />
                <div className="info">
                  <span>Mukul Pathak</span>
                  <div className="country">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png" alt="" />
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
              <p>I have been working with Ms. Navya for the past 2 weeks. It has been a great experience. She absolutely met my requirements although I was on my side a bit unclear sometimes. Provided proper revision as much as i asked because we both established very good communication. I would recommend her, if you communicate good with her you will get what you want. Well I am solicitating her for my next projects </p>
              <div className="helpful">
                <span>Helpful?</span>
                <span>Yes</span>
                <img src="/img/like.png" alt="" />
                <span>No</span>
                <img src="/img/dislike.png" alt="" />
              </div>
            </div>
            <hr/>
            <div className="item">  
              <div className="user">
                <img className='pp' src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/98c5922378b5cdfbf6c747d921d7dac3-1609804157664/d732f374-7ba3-4f30-8ff7-c5e9a662bbe1.jpg" alt="" />
                <div className="info">
                  <span>Mukul Pathak</span>
                  <div className="country">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png" alt="" />
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
              <p>I have been working with Ms. Navya for the past 2 weeks. It has been a great experience. She absolutely met my requirements although I was on my side a bit unclear sometimes. Provided proper revision as much as i asked because we both established very good communication. I would recommend her, if you communicate good with her you will get what you want. Well I am solicitating her for my next projects </p>
              <div className="helpful">
                <span>Helpful?</span>
                <span>Yes</span>
                <img src="/img/like.png" alt="" />
                <span>No</span>
                <img src="/img/dislike.png" alt="" />
              </div>
            </div>
            <hr/>
            <div className="item">  
              <div className="user">
                <img className='pp' src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/98c5922378b5cdfbf6c747d921d7dac3-1609804157664/d732f374-7ba3-4f30-8ff7-c5e9a662bbe1.jpg" alt="" />
                <div className="info">
                  <span>Mukul Pathak</span>
                  <div className="country">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png" alt="" />
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
              <p>I have been working with Ms. Navya for the past 2 weeks. It has been a great experience. She absolutely met my requirements although I was on my side a bit unclear sometimes. Provided proper revision as much as i asked because we both established very good communication. I would recommend her, if you communicate good with her you will get what you want. Well I am solicitating her for my next projects </p>
              <div className="helpful">
                <span>Helpful?</span>
                <span>Yes</span>
                <img src="/img/like.png" alt="" />
                <span>No</span>
                <img src="/img/dislike.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>{data.shortTitle}</h3>
            <h2>$ {data.price}</h2>
          </div>
          <p>{data.shortDesc}</p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>{data.deliveryTime} Days</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>{data.revisionNumber} Revisions</span>
            </div>
          </div>
          <div className="features">
            {data.features.map(feature=>{
              <div className="item" key={feature}>
                <img src="/img/greencheck.png" alt="" />
                <span>{feature}</span>
              </div>
            })}
          </div>
          <button>Continue</button>
        </div>
      </div>}
    </div>
  )
}

export default Gig