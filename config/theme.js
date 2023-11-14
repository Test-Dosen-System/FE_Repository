import { Poppins } from "next/font/google"
import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"
// Create a theme instance.
const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
})

const theme = createTheme({
  palette: {
    primary: {
      main: "#e8c74f",
    },
    secondary: {
      main: "#F77F00",
    },
    blueSky: {
      main: "#00A3FF",
    },
    bgbox: {
      main: "#F2F2F2",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
})
export default theme
