import { Poppins } from 'next/font/google'
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
// Create a theme instance.
const poppins = Poppins({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    palette: {
        primary: {
            main: '#FEDA56',
        },
        secondary: {
            main: '#F77F00',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: poppins.style.fontFamily,
    },
});
export default theme;