import { ThemeProvider } from '@mui/material/styles';
import { Box, Typography } from '@mui/material'
import theme from '../../config/theme'


export default function choose() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={100}
        marginTop={5}
        marginBottom={5}>
        <Typography variant="h5" >
          Pilih Part Soal
        </Typography>
      </Box>
    </ThemeProvider>
  )
}
