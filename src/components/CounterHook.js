import React, { useState } from "react";

// Hooks: useState

function CounterHook() {
  const [count, setCount] = useState(0);
  const [post, setPost] = useState(null);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      {count}
      <button onClick={() => setCount(count - 1)}> -1 </button>
      {post && post.title}
      <button onClick={() => setPost({ id: 1, title: "bal bal" })}>
        add Post
      </button>
    </div>
  );
}

export default CounterHook;
