import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../shared/data";

const Work = () => {
  const params = useParams();

  const foundData = data.find((item) => {
    return item.id === parseInt(params.id);
  });

  return (
    <>
      <div>{foundData.id}</div>
      <div>{foundData.todo}</div>
    </>
  );
};

export default Work;
