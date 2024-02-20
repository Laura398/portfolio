import "./Scroll.scss"
import { Box, Fab, Zoom } from "@mui/material"
import { useCallback } from "react"
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

type scrollDirection = "top" | "home" | "about" | "stack" | "home-portfolio" | "contact"

type Margin = {
    position: string,
    bottom?: number | string,
    right?: number | string,
    top?: number | string,
    left?: number | string,
    zIndex: number,
    transform?: boolean | any
}
type Props = {
    trigger: boolean,
    margin: Margin,
    scrollTo: scrollDirection
}

export default function Scroll(props: Props) {    
    const sx: Margin = {
        position: props.margin.position,
        zIndex: props.margin.zIndex,
    }

    if (props.margin.bottom) sx.bottom = props.margin.bottom;
    if (props.margin.right) sx.right = props.margin.right;
    if (props.margin.top) sx.top = props.margin.top;
    if (props.margin.left) sx.left = props.margin.left;
    
    const scrollToSomewhere = useCallback(() => {
        if (props.scrollTo === "top") {
            window.scrollTo({ top: 0, behavior: "smooth" })
        } else {
            const element_to_scroll_to = document.getElementById(props.scrollTo)!;
            element_to_scroll_to.scrollIntoView({behavior:"smooth"});
        }
      }, [])

    const classNames = []
    if (props.margin.transform) classNames.push("transform")
    if (props.margin.position === "absolute" && props.scrollTo !== "about") classNames.push("hide")
      
    return (
      <Zoom in={props.trigger && props.trigger}>
        <Box
          role="presentation"
          className={classNames.join(" ")}
          sx={sx}
        >
        <Fab
            onClick={scrollToSomewhere}
            size="medium"
            aria-label="Scroll"
            sx={{ backgroundColor: "#61dafb", border: "white 1px solid" }}
        >
            {props.scrollTo === "top" ?
                <KeyboardArrowUp fontSize="medium" /> :
                <KeyboardArrowDown fontSize="medium" />}
        </Fab>
        </Box>
      </Zoom>
    )
  }