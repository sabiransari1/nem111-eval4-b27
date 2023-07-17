import React, { useEffect, useState } from "react";

export const PostsPage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = () => {
    e.preventDefault();

    fetch(`https://vivacious-tuna-girdle.cyclic.app/posts/addposts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, body }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    let t = JSON.parse(localStorage.getItem("token"));
    setToken(t);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter your password"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};
