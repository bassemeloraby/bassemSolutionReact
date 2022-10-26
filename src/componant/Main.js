import React from "react";
import Card1 from "./Card";

export default function Main(props) {
  return (
    <>
      <div className="Main">
        <Card1 title="baba" />
        <Card1 title="mama" />
      </div>
      <div>
        <h1 style={{ color: "red", backgroundColor: "yellow" }}>
          {props.title}
        </h1>
      </div>
    </>
  );
}
