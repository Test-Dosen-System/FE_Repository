'use client';

import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { Box, TextField, Grid, Button, Select, IconButton } from '@mui/material'
import theme from '../../config/theme'
import { useDispatch, useSelector } from 'react-redux'
import { useSession } from "next-auth/react";
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import axios from 'axios';
import SweatAlertTimer from '@/config/SweatAlert/timer';

export default function toepaudio() {
  const [audio, setAudio] = useState(null)
  const { register, handleSubmit, setValue } = useForm();
  const { data: session, status } = useSession();

  const kategoriSoal = useSelector((state) => state.kategoriSoal.kategoriSoalShow);
  const jenisSoal = useSelector((state) => state.jenisSoal.jenisSoalShow);

  useEffect(() => {
    if (kategoriSoal) {
      setValue("kategori_soal", kategoriSoal)
    }
    if (jenisSoal) {
      setValue("jenis_soal", jenisSoal)
    }
    if (audio) {
      setValue("fileSoal", audio)
    }
  }, [kategoriSoal, jenisSoal, audio, setValue])

  const handleChange = (e) => {
    if (e.target.files.length) {
      setAudio(e.target.files[0])
    }
  }

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/soal/create-soal-audio', data, {
        headers: {
          'Authorization': `Bearer ${session.user.token}`,
          'Content-Type': 'multipart/form-data'
        },
      })
      SweatAlertTimer(response.data.message, "success");
    }
    catch (error) {
      SweatAlertTimer("Failed to create soal", "error");
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}
        marginTop={2}>
        Soal {kategoriSoal} Jenis {jenisSoal}
        <Box
          marginTop={3}
          marginBottom={3}
        >
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input accept="audio/*" type="file" onChange={handleChange} />

          </IconButton>
        </Box>
        <TextField
          id="outlined-textarea"
          label="Ketikkan Soal..."
          multiline
          rows={4}
          fullWidth
          sx={{ mb: 2 }}
          {...register("soal")}
        />
        Jawaban
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="outlined-textarea"
              label="Jawaban A"
              multiline
              rows={2}
              fullWidth
              required
              {...register("jawaban_a")}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="outlined-textarea"
              label="Jawaban B"
              multiline
              rows={2}
              fullWidth
              required
              {...register("jawaban_b")}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="outlined-textarea"
              label="Jawaban C"
              multiline
              rows={2}
              fullWidth
              required
              {...register("jawaban_c")}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="outlined-textarea"
              label="Jawaban D"
              multiline
              rows={2}
              fullWidth
              required
              {...register("jawaban_d")}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              id="outlined-textarea"
              label="Jawaban E (Opsional)"
              multiline
              rows={2}
              fullWidth
              {...register("jawaban_e")}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            Kunci Jawaban
            <TextField
              id="outlined-textarea"
              label="Copy Jawaban Benar"
              multiline
              size='small'
              fullWidth
              required
              {...register("jawaban_benar")}
            />
            <Button variant="contained" color='primary' type='submit'
              sx={{
                marginTop: 2,
              }}>
              Simpan
            </Button>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}
