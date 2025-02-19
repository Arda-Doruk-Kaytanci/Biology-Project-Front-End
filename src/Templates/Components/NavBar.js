import React, { forwardRef, useContext } from "react";
import "../../Css Files/ComponentCss/NavBar.css";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../HomePage";
import Article1 from "../Article1";
import logoImg from "../../Images/logo.png";
import SaveUs from "../SaveUs";
import Resources from "../Resources";
import Contributers from "../Contributers";
import Optimize from "../OptimizeYourEnvironment";
import Article2 from "../Article2";
import Article3 from "../Article3";
import CropsCategory from "../CropsCategory";
import { CropContext } from "../../CropsContext";
import CropInfoPage from "../CropInfoPage";
import Community from "../Community";
const NavBar = forwardRef((props, ref) => {
  const currLoc = useLocation();
  const plants = useContext(CropContext);

  const CropRoutes = () => {
    return (
      <>
        {plants.map((item) => (
          <Route
            key={item.name}
            path={`/crops/${item.name}`}
            element={
              <CropInfoPage
                name={item.name}
                src={item.src}
                short={item.shortDescription}
                long={item.longDescription}
                temp={item.preferredTemperature}
                altitude={item.altitude}
                water={item.wateringPerDay}
                cost={item.maintenanceCost}
                light={item.lightRequired}
                grow={item.growingSeason}
                harvest={item.harvestTime}
                science = {item.scientificName}
              />
            }
          />
        ))}
      </>
    );
  };
  
  const isHere = (loc) => {
    return currLoc.pathname === loc ? true : false;
  };
  return (
    <>
      <div className="custom-shape-container">
        <div className="border-wrapper">
          <div className="custom-shape arda"></div>
        </div>
        <div className="custom-shape doruk"></div>
      </div>
      <div className="nav-container">
        <img alt="the logo" src={logoImg}></img>
        <nav ref={ref}>
          <Link
            className="nav-bar-link"
            to="/"
            style={{ color: isHere("/") ? "#34623F" : "#A1BA89" }}
          >
            Ana Sayfa
          </Link>
          <Link
            className="nav-bar-link"
            to="/save-us"
            style={{ color: isHere("/save-us") ? "#34623F" : "#A1BA89" }}
          >
            Kurtar Bizi
          </Link>
          <Link
            className="nav-bar-link"
            to="/informations"
            style={{ color: isHere("/informations") ? "#34623F" : "#A1BA89" }}
          >
            Bilgiler
          </Link>
          <Link
            className="nav-bar-link"
            to="/get-educated"
            style={{ color: isHere("/get-educated") ? "#34623F" : "#A1BA89" }}
          >
            Bilinçlen
          </Link>
          <Link
            className="nav-bar-link"
            to="/contributers"
            style={{ color: isHere("/contributers") ? "#34623F" : "#A1BA89" }}
          >
            Yapanlar
          </Link>
          <Link
            className="nav-bar-link"
            to="/crops"
            style={{ color: isHere("/crops") ? "#34623F" : "#A1BA89" }}
          >
            Bitkiler
          </Link>
          <Link
            className="nav-bar-link"
            to="/community"
            style={{ color: isHere("/community") ? "#34623F" : "#A1BA89" }}
          >
            Topluluk
          </Link>
        </nav>
      </div>

      <Routes>
        {CropRoutes()}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/save-us" element={<SaveUs />}></Route>
        <Route path="/articles/article-1" element={<Article1 />}></Route>
        <Route path="/articles/article-2" element={<Article2 />}></Route>
        <Route path="/articles/article-3" element={<Article3 />}></Route>
        <Route path="/informations" element={<Resources />}></Route>
        <Route path="/get-educated" element={<Optimize />}></Route>
        <Route path="/contributers" element={<Contributers />}></Route>
        <Route path="/crops" element={<CropsCategory />}></Route>
        <Route path="/community" element={<Community />}></Route>
      </Routes>
    </>
  );
});
export default NavBar;
