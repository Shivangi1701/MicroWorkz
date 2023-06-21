import React, { useRef, useState, useEffect} from 'react'
import "./Gigs.scss"
import GigCard from "../../components/gigCard/GigCard"
import { useQuery } from "@tanstack/react-query";
import newRequest from '../../utils/newRequest';
import { useLocation } from 'react-router-dom';

const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const {search} = useLocation();

  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => newRequest.get(`/gigs${search}`).then((res) => {
      return res.data;
    }),
  })

  const reSort = (type) => {
    setSort(type)
    setOpen(false);
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className='pathname'>MICROWORKZ{" > "}GRAPHICS & DESIGN{" > "}</span>
        <h1>AI Artists</h1>
        <p>Explore the boundaries of art and technology with MicroWorkz's AI artists</p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="text" placeholder='min'/>
            <input ref={maxRef} type="text" placeholder='max'/>
            <button>Apply</button>
          </div>
          <div className="right">
            <span className='sortBy'>SortBy</span>
            <span className='sortType'>{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img src="./img/down.png" alt="" onClick={()=>setOpen(!open)}/>
            {open && (<div className="rightMenu">
              {sort === "sales" ? <span onClick={()=>reSort("createdAt")}>Newest</span>
              : <span onClick={()=>reSort("sales")}>Best Selling</span>}
            </div>)}
          </div>
        </div>
        <div className="cards">
          {isLoading ? "loading" : error ? "Something went wrong" : data.map(gig=>(
            <GigCard key={gig._id} item={gig}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs