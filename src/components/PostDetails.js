import React,  { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PostDetails() {
  let params = useParams();
  const [post, setPost] = useState({})

  useEffect(() => {
    // requests
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then(res => setPost(res.data))
      .catch(() => console.log("Something went wrong!"));
  }, []);

  // let post = posts.find((p) => p.id == params.id);

  return (
    <div>
      {post && (
        <>
          <p>id: {post.id}</p>
          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
        </>
      )}
    </div>
  );
}

export default PostDetails;
