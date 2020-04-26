import React from "react";
import { robot } from "./robot";
import "tachyons";
import index from "./index";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green boo dib br3 pa3 na2 grow bw2 shadow-5">
      <img alt="robot" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
