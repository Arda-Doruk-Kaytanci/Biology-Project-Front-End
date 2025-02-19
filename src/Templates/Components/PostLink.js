import React from "react";
import { Link } from "react-router-dom";
function PostLink(props) {
  return (
      <Link to={props.name.toLowerCase()}>
        <h1>{props.name}</h1>
        <h2>{props.tag}</h2>
      </Link>
  );
}

export default PostLink;
