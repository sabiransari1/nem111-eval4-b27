import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [postsCount, setPostsCount] = useState(0);
  const [userCheck, setUserCheck] = useState(true);

  const handleUser = () => {
    setUserCheck((prev) => !prev);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h3>Posts {postsCount}</h3>

      <button>
        <Link to={"/posts"} onClick={handleUser}>
          Posts
        </Link>
      </button>

      <button>
        <Link to={"/login"} onClick={handleUser}>
          {userCheck ? "Login" : "Logout"}
        </Link>
      </button>

      <button>
        <Link to={"/signup"} onClick={handleUser}>
          Sign UP
        </Link>
      </button>
    </div>
  );
};
