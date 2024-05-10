import { useTranslation } from "react-i18next";
import Scroll from "../../../components/buttons/Scroll";
import { CENTER_MARGIN } from "../../../interfaces/constants";
import "./Home.scss";

export default function Home() {
  const { t } = useTranslation();
  const htmlString = "<Laura Mathieu />";

  const margin = {
    ...CENTER_MARGIN,
    bottom: "20%",
  };

  return (
    <div className="bubbles">
      <div className="home">
        <div className="avatar">
          <img src="/assets/avatar.jpeg" alt="Logo" />
        </div>
        <a className="name">
          <h1>{htmlString}</h1>
        </a>
        <a className="job">
          <h2>{t("title")}</h2>
        </a>
      </div>
      <Scroll trigger={true} margin={margin} scrollTo="about" />
    </div>
  );
}
