import { Container, Typography, Grid, Button } from '@mui/material';
import Image from 'next/image';

export default function Custom404() {
  return (
    <Container maxWidth="md" sx={{ paddingTop: '100px', textAlign: 'center' }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Image src="/not_found.jpg" alt="404" width={350} height={350} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" component="div" gutterBottom
            sx={
              {
                fontWeight: 'bold',
                paddingTop: '40px'
              }
            }>
            Are you lost?
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            The page you are looking for might have been removed had its name changed or is temporarily unavailable.
          </Typography>
          <Button variant="contained" href="/" sx={{ marginTop: '20px' }}>
            Go to Home
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}
