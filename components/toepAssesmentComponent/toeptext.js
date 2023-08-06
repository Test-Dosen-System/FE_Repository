import { Box, TextField, Grid, Button, Select } from '@mui/material'

export default function toeptext() {
  return (
    <Box
      marginTop={2}>
      Soal TOEP Jenis Text
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
          <Button variant="contained">
            Simpan
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
