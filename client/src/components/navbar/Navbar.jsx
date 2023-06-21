import React, { useEffect, useState } from 'react'
import {Link, useLocation, useNavigate} from "react-router-dom";
import "./Navbar.scss"
import newRequest from "../../utils/newRequest.js";


const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const {pathname} = useLocation();
  
  // function that sets value of active state variable
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  }
  useEffect(()=>{
    window.addEventListener('scroll', isActive);
    return () => {
        window.removeEventListener('scroll', isActive);
    }
  }, []);
  const navigate = useNavigate();
  // get currentUser stored in browser's localStorage & convert JSON string to JSON object
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // function to handle if logout is clicked
  const handleLogout = async () => {
    try {
        await newRequest.post("auth/logout"); // this will delete our cookie
        localStorage.clear("currentUser", null);
        navigate("/");
    } catch (err) {
        console.log(err)
    }
  }

  return (
    <div className={active || pathname !== '/' ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
                <Link to='/' className='link'>
                    <span className='text'>MicroWorkz</span>
                </Link>
                <span className='dot'>.</span>
            </div>
            <div className="links">
                <span className='business'>MicroWorkz Business</span>
                <span>Explore</span>
                <span>English</span>
                {!currentUser?.isSeller && <span>Become a Seller</span>}
                <span className='sign'>Sign in</span>
                {!currentUser && <button>Join</button>}
                {currentUser && (
                    <div className="user" onClick={()=>setOpen(!open)}>
                        <img src={currentUser.img || "/img/noavatar.png"} alt="" />
                        <span>{currentUser?.username}</span>
                        {open && <div className="options">
                            {currentUser?.isSeller && (
                                <>
                                <Link className="link" to='/mygigs'>MyGigs</Link>
                                <Link className="link" to='/add'>Add New Gig</Link>
                                </>
                            )}
                            <Link className="link" to='/orders'>Orders</Link>
                            <Link className="link" to='/messages'>Messages</Link>
                            <Link className="link" onClick={handleLogout}>Logout</Link>
                        </div>}
                    </div>
                )}
            </div>
        </div>
        {(active || pathname !== "/") && (
            <>
                <hr />
                <div className="menu">
                    <Link className="link menuLink" to='/'>
                        Graphics & Design
                    </Link>
                    <Link className="link" to='/'>
                        Video & Animation
                    </Link>
                    <Link className="link" to='/'>
                        Writing & Translation
                    </Link>
                    <Link className="link" to='/'>
                        AI Services
                    </Link>
                    <Link className="link" to='/'>
                        Digital Marketing
                    </Link>
                    <Link className="link" to='/'>
                        Music & Audio
                    </Link>
                    <Link className="link" to='/'>
                        Programming & Tech
                    </Link>
                    <Link className="link" to='/'>
                        Business
                    </Link>
                    <Link className="link" to='/'>
                        Lifestyle
                    </Link>
                </div>
            </>
        )}
    </div>
  )
}

export default Navbar