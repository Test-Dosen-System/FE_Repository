import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { Box, TextField, Grid, Button, Select, IconButton } from '@mui/material'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Image from 'next/image'
import theme from '../../config/theme'

export default function toepgambar() {
  const [image, setImage] = useState({ preview: '/upload.png', raw: '' })


  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      })
    }
  }

  const handleFiles = (files) => {
    setImage(files)
  }
  return (
    <ThemeProvider theme={theme}>
      <Box
        marginTop={2}>
        Soal TOEP Jenis Gambar
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop={5}
          marginBottom={5}
        >
          <Image
            src={image.preview}
            alt="Picture of the author"
            width={300}
            height={300}
            style={{ objectFit: "cover" }}
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" onChange={handleChange} />
            <AddAPhotoIcon
              sx={{
                width: 35,
                height: 35,
              }} />
          </IconButton>
        </Box>
        <TextField
          id="outlined-textarea"
          label="Ketikkan Soal..."
          multiline
          rows={4}
          fullWidth
          sx={{ mb: 2 }}
        />
        Jawaban
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              id="outlined-textarea"
              label="Jawaban A"
              multiline
              rows={2}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              id="outlined-textarea"
              label="Jawaban B"
              multiline
              rows={2}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              id="outlined-textarea"
              label="Jawaban C"
              multiline
              rows={2}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              id="outlined-textarea"
              label="Jawaban D"
              multiline
              rows={2}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              id="outlined-textarea"
              label="Jawaban E (Opsional)"
              multiline
              rows={2}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Select
              native
              fullWidth
              required
              sx={{ mb: 2, height: 30 }}
            >
              <option>Pilih Jawaban Benar...</option>
              <option value={10}>Jawaban A</option>
              <option value={10}>Jawaban B</option>
              <option value={10}>Jawaban C</option>
              <option value={10}>Jawaban D</option>
              <option value={10}>Jawaban E</option>
            </Select>
            <Button variant="contained" color='primary'>
              Simpan
            </Button>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}
