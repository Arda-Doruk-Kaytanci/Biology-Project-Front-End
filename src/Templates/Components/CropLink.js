import React from "react";
import { Link } from "react-router-dom";
import placeHolder from "../../Images/placeholder.png";
import "../../Css Files/ComponentCss/CropLink.css";

function CropLink(props) {
  if (props.head) {
    return (
      <div className="crop-link-container">
        <img
          className="crop-img"
          alt={`${props.name}`}
          src={props.img ? props.img : placeHolder}
        ></img>
        <h1 className="crop-name">{props.name}</h1>
        <Link
          className="crop-link-element"
          to={`/crops/${String(props.name).toLowerCase()}`}
        >
          <p>Kaç tane yetişebilir: {props.amount}</p>
          <p> Daha Çok Bilgi İçin Tıkla</p>
        </Link>
      </div>
    );
  }
  return (
    <div className="crop-link-container">
      <img
        className="crop-img"
        alt={`${props.name}`}
        src={props.img ? props.img : placeHolder}
      ></img>
      <h1 className="crop-name">{props.name}</h1>
      <Link
        className="crop-link-element"
        to={`/crops/${String(props.name).toLowerCase()}`}
      >
        <p> Daha Çok Bilgi İçin Tıkla</p>
      </Link>
    </div>
  );
}

export default CropLink;
