import React from "react";

function Card(props) {
  return (
    <div
      className={`p-5 my-2 w-full max-w-md bg-secondary-dark rounded-md text-white shadow-md border border-gray-600 ${props.className}`}
    >
      {props.children}
    </div>
  );
}

export default Card;
