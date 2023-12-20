import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home</h2>
      <button
        onClick={() => {
          navigate("/works");
        }}>
        works로 이동
      </button>
    </div>
  );
};

export default Home;
