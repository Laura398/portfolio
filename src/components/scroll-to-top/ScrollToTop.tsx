
import { KeyboardArrowUp } from "@mui/icons-material"
import { Box, Fab, Zoom, useScrollTrigger } from "@mui/material"
import { useCallback } from "react"

export default function ScrollToTop() {
    // Use `window` instead of `body` as `document` will be `undefined` when the
    // hooks first runs. By default, useScrollTrigger will attach itself to `window`.
    const trigger = useScrollTrigger({
      // Number of pixels needed to scroll to toggle `trigger` to `true`.
      threshold: 100,
    })
  
    const scrollToTop = useCallback(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])
  
    return (
      <Zoom in={trigger}>
        <Box
          role="presentation"
          // Place the button in the bottom right corner.
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            zIndex: 100,
          }}
        >
          <Fab
            onClick={scrollToTop}
            size="medium"
            aria-label="Scroll back to top"
            sx={{ backgroundColor: "#61dafb" }}
          >
            <KeyboardArrowUp fontSize="medium" />
          </Fab>
        </Box>
      </Zoom>
    )
  }