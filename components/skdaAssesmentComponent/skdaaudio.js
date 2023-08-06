import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { Box, TextField, Grid, Button, Select, IconButton } from '@mui/material'
import theme from '../../config/theme'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


export default function skdaaudio() {
  return (
    <Box
      marginTop={2}>
      Soal SKDA Jenis Audio
      <Box
        marginTop={3}
        marginBottom={3}
      >
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input accept="audio/*" type="file" onChange={''} />
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
  )
}
