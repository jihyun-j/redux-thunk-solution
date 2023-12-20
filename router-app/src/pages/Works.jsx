import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { data } from "../shared/data";

const Works = () => {
  //   const navigate = useNavigate();
  //   const location = useLocation();
  //   console.log(location);

  return (
    <div>
      <h2>Works</h2>

      {data.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.id}</p>
            <Link to={`/works/${item.id}`}>{item.todo}</Link>
          </div>
        );
      })}

      {/* <button
        onClick={() => {
          //   navigate("/");
        }}>
        Home으로 이동
      </button>
      <Link to="/contact">contact page</Link> */}
    </div>
  );
};

export default Works;
