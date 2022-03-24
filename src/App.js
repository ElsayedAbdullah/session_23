import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import axios from "axios";
import "./App.css";

// components
import Footer from "./components/Footer";
import Header from "./components/Header";
import UserListing from "./components/UserListing";
import Home from "./components/Home";
import About from "./components/About";
import Posts from "./components/Posts";
import CounterHook from "./components/CounterHook";
import PostDetails from "./components/PostDetails";

const App = () => {
  // State
  const [loading, setLoading] = useState(null);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // requests
    setLoading({ loading: true });
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong!");
        setLoading(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/posts" element={<Posts loading={loading} posts={posts} error={error} />} />
          <Route path="/posts/:id" element={<PostDetails posts={posts} />} />
          <Route path="/user-list" element={<UserListing />} />
          <Route path="/counter" element={<CounterHook />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
