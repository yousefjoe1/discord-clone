import React from "react";
import { useParams } from "react-router-dom";

const Demo = () => {
  const { id } = useParams();
  return (
    <div className="text-white bg-dark">
      <span
        style={{ fontSize: "25px", padding: "10px", backgroundColor: "red" }}
      >
        {id}
      </span>
      <img
        style={{ width: "90%" }}
        src="https://cdn.wallpapersafari.com/36/6/P5cSJK.jpg"
        alt=""
      />
    </div>
  );
};

export default Demo;
