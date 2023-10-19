import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        thumb: {
          backgroundColor: "orange",
          "&:hover, &.Mui-focusVisible": {
            backgroundColor: "orange",
          },
          "&.MuiSlider-active": {
            backgroundColor: "orange",
          },
        },
        track: {
          color: "orange",
          backgroundColor: "orange",
        },
        rail: {
          backgroundColor: "#bfbfbf",
        },
      },
    },
  },
})

export default theme
