import React from 'react'
import "./Message.scss"
import { Link, useParams } from 'react-router-dom';
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import newRequest from '../../utils/newRequest';

const Message = () => {

  const {id} = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient(); // to interact with cache & memories

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () => newRequest.get(`/messages/${id}`).then((res) => {
      return res.data;
    }),
  });
  

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]) // invalidate the queries associted with the specific key - trigger refetch
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault(),
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };

  return (
    <div className='message'>
      <div className="container">
        <span className="pathname">
          <Link to="/messages">MESSAGES</Link>{" > "}SHIVANGI CHAUHAN{" > "}
        </span>
        {isLoading ? "Loading" : error ? "Something went wrong!" : <div className="messages">
          {data.map((msg) => (
            <div className={msg.userId === currentUser._id ? "owner item" : "item"} key={msg._id}>
              <img src="https://writestylesonline.com/wp-content/uploads/2020/01/Three-Things-To-Consider-When-Deciding-On-Your-LinkedIn-Profile-Picture-1024x1024.jpg" alt="" />
              <p>{msg.desc}</p>
            </div>
          ))}
        </div>}
        <hr/>
        <form className="write" onSubmit={handleSubmit}>
          <textarea name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Message