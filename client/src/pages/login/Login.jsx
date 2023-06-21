import React, {useState} from 'react';
import "./Login.scss";
import newRequest from '../../utils/newRequest';
import {useNavigate} from "react-router-dom";

function Login() {

  const [username, setUsername] = useState(""); // array of 2 elements - current state value ("") & a fn to update that state value
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // to navigate to some else page

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("auth/login", {
        username,
        password,
      });
      // store currentUser in browser's local storage
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/"); // navigate to home page
    } catch (err) {
      setError(err.response.data); // sets error = err.response.data
    }
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input name="username" type="text" placeholder='username' onChange={e=>setUsername(e.target.value)}/>

        <label htmlFor="">Password</label>
        <input 
          name="password" 
          type="password"
          placeholder='password'
          onChange={e=>setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
        {error && error}
      </form>
    </div>
  );
}

export default Login