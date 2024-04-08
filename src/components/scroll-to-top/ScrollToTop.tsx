
import { useScrollTrigger } from "@mui/material"
import Scroll from "../buttons/Scroll"

export default function ScrollToTop() {
    // Use `window` instead of `body` as `document` will be `undefined` when the
    // hooks first runs. By default, useScrollTrigger will attach itself to `window`.
    const trigger = useScrollTrigger({
      // Number of pixels needed to scroll to toggle `trigger` to `true`.
      threshold: 100,
    })

    const margin = {
      position: "fixed",
      bottom: 32,
      right: 32,
      zIndex: 100,
    };
    
    return (
      <Scroll trigger={trigger} margin={margin} scrollTo="top" />
    )
  }