import React, { useEffect } from 'react'
import "./Gig.scss"
import { Slider } from 'infinite-react-carousel/lib'
import { useQuery } from "@tanstack/react-query";
import newRequest from '../../utils/newRequest';
import { useParams, Link } from 'react-router-dom';
import Reviews from '../../components/reviews/Reviews';

const Gig = () => {

  const {id} = useParams(); // gig id from query params

  const { isLoading, error, data } = useQuery({ // fetching gig data through it's id in query parameter
    queryKey: ["gig"],
    queryFn: () => newRequest.get(`/gigs/single/${id}`).then((res) => {
      return res.data;
    }),
  });

  const { isLoading: isLoadingUser, error: errorUser, data: dataUser } = useQuery({
    queryKey: ["user"],
    queryFn: () => newRequest.get(`/users/${data?.userId}`).then((res) => { // there is a chance of first query not being executed and still we go for looking the data.userId
      return res.data;
    }),
    enabled: !!data?.userId, // only when data is available
  });

  return (
    <div className='gig'>
      {isLoading ? "loading" : error ? "Something went wrong!" : <div className="container">
        <div className="left">
          <span className='pathname'>MICROWORKZ{" > "}{data.cat}{" > "}</span>
          <h1>{data.title}</h1>
          {isLoadingUser ? "loading" : errorUser ? "Something went wrong!" : 
            <div className="user">
              <img className='pp' src={dataUser.img || "/img/noavatar.png"} alt="" />
              <span>{dataUser.username}</span>
              {!isNaN(data.totalStars / data.starNumber) && (
                <div className="stars">
                  {Array(Math.round(data.totalStars / data.starNumber)).fill().map((item, i)=>(
                    <img src="/img/star.png" alt="" key={i} />
                  ))}
                  <span>{Math.round(data.totalStars / data.starNumber)}</span>
                </div>
              )}
            </div>
          }
          <Slider slidesToShow={1} arrowsScroll={1} className="slider" >
            {data.images.map(img=>(
              <img key={img} src={img} alt="" />
            ))}
          </Slider>
          <h2>About this gig</h2>
          <p>{data.desc}</p>
          {isLoadingUser ? "loading" : errorUser ? "Something went wrong!" : 
            <div className="seller">
              <h2>About the seller</h2>
              <div className="user">
                <img className='pp' src={dataUser.img || "/img/noavatar.png"} alt="" />
                <div className="info">
                  <span>{dataUser.username}</span>
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
                    <span className="desc">{dataUser.country}</span>
                  </div>
                  <div className="item">
                    <span className="title">Member Since</span>
                    {dataUser.createdAt && (
                      <>
                        {new Date(dataUser.createdAt).toLocaleString('default', { month: 'long' })}{" "}
                        {new Date(dataUser.createdAt).getFullYear()}
                      </>
                    )}
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
                <p>{dataUser.desc}</p>
              </div>
            </div>
          }
          <Reviews gigId={id}/>
        </div>
        <div className="right">
          <div className="price">
            <h3>{data.shortTitle}</h3>
            <h2>₹ {data.price}</h2>
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
          <Link to={`/pay/${id}`}>
          <button>Continue</button>
          </Link>
        </div>
      </div>}
    </div>
  )
}

export default Gig