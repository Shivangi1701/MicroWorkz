import React from 'react'
import "./Gig.scss"
import { Slider } from 'infinite-react-carousel/lib'
const Gig = () => {
  return (
    <div className='gig'>
      <div className="container">
        <div className="left">
          <span className='pathname'>FIVERR{" > "}GRAPHICS & DESIGN{" > "}</span>
          <h1>I will create AI generated art for you</h1>
          <div className="user">
            <img className='pp' src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c5323d1e3c30bbac2c31a905b5bd8cb2-1675191168940/22bca898-8c41-4832-be06-ac78f7d044a4.PNG" alt="" />
            <span>Navya Mehta</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider" >
            <img src="https://images.nightcafe.studio/jobs/E1YohcfqSHe4qjQXshvs/8hIe7fiqz40OC03kBZGk--1--p1px7_6x.jpg?tr=w-1600,c-at_max" alt="" />
            <img src="https://cdn.pixabay.com/photo/2023/03/27/01/20/ai-generated-7879479_960_720.jpg" alt="" />
            <img src="https://venturebeat.com/wp-content/uploads/2023/04/annevb_artificial_intelligence_creating_art_-_artistic_flowing__626e5b84-c444-4697-9565-75fd3ffbfb78.png?fit=1728%2C864&strip=all" alt="" />
          </Slider>
          <h2>About this gig</h2>
          <p>
            I will create 1, 3, or 7 fully customized images (based on your descriptions) using a powerful AI tool called Midjourney. You can send me a photo, a detailed description, or simply just send me a message and we can discuss your idea. It is all up to your imagination + my skills and with that - the possibilities are endless. I am flexible and committed to creating an optimal result for your project
          </p>
          <div className="seller">
            <h2>About the seller</h2>
            <div className="user">
              <img className='pp' src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c5323d1e3c30bbac2c31a905b5bd8cb2-1675191168940/22bca898-8c41-4832-be06-ac78f7d044a4.PNG" alt="" />
              <div className="info">
                <span>Navya Mehta</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
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
            <h3>1 AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>One custom digital design **Please CONTACT ME BEFORE placing an order :)**</p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 days delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Artwork delivery</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Image upscaling</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Additional design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Gig