import { useEffect, useState } from "react";
import { getCurrentDimension } from "../../../helpers/get-current-dimension";
import "./HomePortfolio.scss";
import Carousel from "./desktop/Carousel";
import Projects from "./phone/Projects";

export default function HomePortfolio() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [isPhone, setIsPhone] = useState(screenSize.width < 768);

  useEffect(() => {
    const updateDimension = () => {
      const { width } = getCurrentDimension();
      setScreenSize(getCurrentDimension());
      setIsPhone(width < 768);
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <div id="home-portfolio">
      <h1>Portfolio</h1>
      <div id="home-portfolio-container">
        {isPhone ? <Projects /> : <Carousel />}
      </div>
    </div>
  );
}
