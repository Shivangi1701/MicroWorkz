import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Gig from "./pages/gig/Gig";
import Gigs from "./pages/gigs/Gigs";
import Orders from './pages/orders/Orders';
import MyGigs from "./pages/myGigs/MyGigs";
import Add from "./pages/add/Add";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import Success from "./pages/success/Success";
import Pay from "./pages/pay/Pay";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import "./App.scss";

function App() {
  const Layout = () => {
    const queryClient = new QueryClient(); // to cache our fetch data
    return (
      // outlet renders the child route's element
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar/>
          <Outlet/> 
          <Footer/>
        </QueryClientProvider>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
          path:'/',
          element: <Home />
        },
        {
          path:'/login',
          element: <Login />
        },
        {
          path:'/register',
          element: <Register />
        },
        {
          path:"/gigs",
          element:<Gigs/>
        },
        {
          path:"/gig/:id",
          element:<Gig />
        },
        {
          path:"/orders",
          element:<Orders/>
        },
        {
          path:"/mygigs",
          element:<MyGigs/>
        },
        {
          path:"/add",
          element:<Add/>
        },
        {
          path:"/messages",
          element:<Messages/>
        },
        {
          path:"/message/:id",
          element:<Message/>
        },
        {
          path:"/pay/:id",
          element:<Pay/>
        },
        {
          path:"/success",
          element:<Success/>
        }
      ]
    },
  ]);
  return ( // provides router to the rest of the application so that it can handle navigation
    <div>
      <RouterProvider router={router}/> 
    </div>
  );
}

export default App;
