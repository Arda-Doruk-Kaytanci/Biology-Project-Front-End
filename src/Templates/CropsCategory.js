import React, { useState, useContext } from "react";
import "../Css Files/ComponentCss/CropsCategory.css";
import CropLink from "./Components/CropLink";
import { CropContext } from "../CropsContext";


function CropsCategory() {
  const context = useContext(CropContext);
  const [displayCrops, setDisplayCrops] = useState(context);
  
  function filterCrops(e) {
    console.log(e.target.value);
    console.log(displayCrops);
    console.log(typeof e.target.value);
    e.preventDefault();
    if (e.target.value === "") {
      setDisplayCrops(context);
    } else {
      setDisplayCrops(
        displayCrops.filter((item) =>
          String(item?.name)
            .toLowerCase()
            .includes(String(e.target.value).toLowerCase())
        )
      );
    }
  }
  return (
    <div className="crops-category-container">
      <input
        type="text"
        className="search-filter-input"
        onChange={filterCrops}
        placeholder="Bitki Arayın"
      ></input>
      <div className="crops-container">
        {displayCrops &&
          displayCrops.map((item, index) => (
            <div key={index}>
              <CropLink name={item.name} img={item.src} />{" "}
            </div>
          ))}
      </div>
    </div>
  );
}

export default CropsCategory;
