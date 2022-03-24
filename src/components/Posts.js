import React from "react";
import { NavLink } from "react-router-dom";

function Posts({ loading, posts, error }) {
  return (
    <div className="posts">
      {loading && "Loading...."}

      {posts &&
        posts.map(post => (
          <NavLink to={`/posts/${post.id}`} key={post.id}>
            {post.title}
          </NavLink>
        ))}

      {error && error}
    </div>
  );
}

export default Posts;
