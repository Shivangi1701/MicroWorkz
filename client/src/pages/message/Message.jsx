import React from 'react'
import "./Message.scss"
import { Link } from 'react-router-dom'
const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <span className="pathname">
          <Link to="/messages">MESSAGES</Link>{" > "}SHIVANGI CHAUHAN{" > "}
        </span>
        <div className="messages">
          <div className="item">
            <img src="https://writestylesonline.com/wp-content/uploads/2020/01/Three-Things-To-Consider-When-Deciding-On-Your-LinkedIn-Profile-Picture-1024x1024.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quae!</p>
          </div>
          <div className="item owner">
            <img src="https://writestylesonline.com/wp-content/uploads/2020/01/Three-Things-To-Consider-When-Deciding-On-Your-LinkedIn-Profile-Picture-1024x1024.jpg" alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil commodi id pariatur dolorum, eveniet ea aut labore quas ipsam error!</p>
          </div>
          <div className="item">
            <img src="https://writestylesonline.com/wp-content/uploads/2020/01/Three-Things-To-Consider-When-Deciding-On-Your-LinkedIn-Profile-Picture-1024x1024.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quae!</p>
          </div>
          <div className="item">
            <img src="https://writestylesonline.com/wp-content/uploads/2020/01/Three-Things-To-Consider-When-Deciding-On-Your-LinkedIn-Profile-Picture-1024x1024.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quae!</p>
          </div>
        </div>
        <hr/>
        <div className="write">
          <textarea name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message