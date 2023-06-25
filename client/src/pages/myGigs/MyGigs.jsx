import React from "react";
import "./MyGigs.scss";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from '../../utils/newRequest';
import getCurrentUser from '../../utils/getCurrentUser';

const MyGigs = () => {
  
  const currentUser = getCurrentUser();
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
      queryKey: ["myGigs"],
      queryFn: () => newRequest.get(`/gigs?userId=${currentUser._id}`).then((res) => { // get reivews on that specific gig using gigId 
          return res.data;
      }),
  });

  const mutation = useMutation({
      mutationFn: (id) => { // takes gigId as parameter and deletes it
          return newRequest.delete(`/gigs/${id}`);
      },
      onSuccess: () => {
          queryClient.invalidateQueries(["myGigs"]); // invalidate specifc query hence trigger a re-fetch of that query
      }
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  }

  return (
    <div className="myGigs">
      {isLoading ? "Loading" : error ? "something went wrong !" : <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <thead>
            <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {data && data.map((gig) => (
            <tr key={gig._id}>
              <td>
                <img className="img" src={gig.cover} alt="" />
              </td>
              <td>
                <Link to = {`/gig/${gig._id}`} style={{textDecoration: 'none', color: 'inherit'}}>
                  {gig.title}
                </Link>
              </td>
              <td>{gig.price}</td>
              <td>{gig.sales}</td>
              <td>
                <button className="delete" onClick={() => handleDelete(gig._id)}>Delete</button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>}
    </div>
  );
};

export default MyGigs;
