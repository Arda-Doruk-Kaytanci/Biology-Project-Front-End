import React from "react";
import "../Css Files/CropInfoPage.css";
function CropInfoPage(props) {
  return (
    <div className="crop-info-page-container">
      <img src={props.src} alt={props.name}></img>
      <div className="main-header">
        <h1>{props.name}</h1>
        <h2>{props.short}</h2>
        <h2>{props.science}</h2>
      </div>
      <h2>Özellikler</h2>
      <h3>
        Tavsiye Edilen Rakım: {props.altitude.min}-{props.altitude.max}
      </h3>
      <h3>
        Tavsiye Edlen Sıcaklık: {props.temp.min}-{props.temp.max}
      </h3>
      <h3>Günlük Sulama (L): {props.water}</h3>
      <h3>1'den 30'a Yaklaşık Maaliyet Skalası: {props.cost}</h3>
      <h3>Büyüme Zamanı: {props.grow}</h3>
      <h3>Yaklaşık Hasat Zamanı: {props.harvest}</h3>
      <h3>Işık İhtiyacı: {props.light}</h3>
      <p>{props.long}</p>
    </div>
  );
}

export default CropInfoPage;
