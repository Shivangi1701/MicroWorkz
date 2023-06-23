import React from "react";
import "./Messages.scss";
import { Link } from "react-router-dom";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import newRequest from '../../utils/newRequest';
import moment from "moment";

const Messages = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const queryClient = useQueryClient(); // to interact with cache & memories

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () => newRequest.get(`/conversation`).then((res) => {
      return res.data;
    }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/conversation/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]) // invalidate the queries associted with the specific key - trigger refetch
    }
  });

  const handleRead = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="messages">
      {isLoading ? "Loading" : error ? "Something went wrong!" : <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>{currentUser.isSeller ? "BuyerID" : "SellerID"}</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          {data.map((conv)=>(
            <tr className={((currentUser.isSeller && !conv.readBySeller) || (!currentUser.isSeller && !conv.readByBuyer)) && "active"} key={conv.id}>
              <td>{currentUser.isSeller ? conv.buyerId : conv.sellerId}</td>
              <td><Link to="/message/123" className="link">{conv?.lastMessage?.substring(0, 100)}...</Link></td>
              <td>{moment(conv.updatedAt).fromNow()}</td>
              <td>
                {((currentUser.isSeller && !conv.readBySeller) || (!currentUser.isSeller && !conv.readByBuyer)) && (
                  <button onClick={()=>handleRead(conv.id)}>Mark As read</button>
                )}
              </td>
            </tr>
          ))}
        </table>
      </div>}
    </div>
  );
};

export default Messages;
