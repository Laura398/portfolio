import { useScrollTrigger } from "@mui/material";
import Scroll from "../buttons/Scroll";

export default function ScrollToTop() {
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  const margin = {
    position: "fixed",
    bottom: 32,
    right: 32,
    zIndex: 100,
  };

  return <Scroll trigger={trigger} margin={margin} scrollTo="top" />;
}
