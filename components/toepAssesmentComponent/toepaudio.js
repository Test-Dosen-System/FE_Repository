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
import { setPartSoal } from '../../config/redux/slices/partSoalSlice'

export default function toepaudio() {
  const [audio, setAudio] = useState(null)
  const { register, handleSubmit, setValue, reset } = useForm();
  const { data: session, status } = useSession();
  const dispatch = useDispatch();

  const kategoriSoal = useSelector((state) => state.kategoriSoal.kategoriSoalShow);
  const jenisSoal = useSelector((state) => state.jenisSoal.jenisSoalShow);
  const partSoal = useSelector((state) => state.partSoal.partSoalShow);
  console.log(partSoal)

  useEffect(() => {
    if (audio) {
      setValue("fileSoal", audio)
    }
  }, [audio, setValue])

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
      reset();
    }
    catch (error) {
      SweatAlertTimer("Failed to create soal", "error");
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}
        marginTop={5}>
        <Grid item xs={12} md={12} lg={12}>
          Part Soal:
          <Select
            native
            required
            sx={{ mb: 2, ml: 2, height: 30 }}
            onChange={(e) => dispatch(setPartSoal(e.target.value))}
          >
            <option>Pilih Part Soal...</option>
            <option value="RESPONSES">Responses</option>
            <option value="CONVERSATION">Conversation</option>
            <option value="MINI TALKS">Mini Talks</option>
          </Select>
        </Grid>
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
        {/* <TextField
          id="outlined-textarea"
          label="Ketikkan Soal..."
          multiline
          rows={4}
          fullWidth
          sx={{ mb: 2 }}
          {...register("soal")}
        /> */}
        Jawaban
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={3}>
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
          <Grid item xs={12} md={6} lg={3}>
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
          <Grid item xs={12} md={6} lg={3}>
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
          <Grid item xs={12} md={6} lg={3}>
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
          <Grid item xs={12} md={6} lg={3}>
            <TextField
              id="outlined-textarea"
              label="Point"
              size="small"
              type="number"
              fullWidth
              required
              sx={{ mt: 2 }}
              {...register("skor", {
                valueAsNumber: true,
              })}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField
              id="outlined-textarea"
              label="Waktu"
              size="small"
              type="number"
              fullWidth
              required
              sx={{ mt: 2 }}
              {...register("durasi", {
                valueAsNumber: true,
              })}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            Kunci Jawaban
            <Select
              native
              fullWidth
              required
              sx={{ mb: 2, height: 30 }}
              {...register("jawaban_benar")}
            >
              <option>Pilih Jawaban Benar...</option>
              <option value="a">Jawaban A</option>
              <option value="b">Jawaban B</option>
              <option value="c">Jawaban C</option>
              <option value="d">Jawaban D</option>
            </Select>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Button variant="contained" color='primary' type='submit' fullWidth
              sx={{
                marginTop: 2
              }}>
              Simpan
            </Button>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider >
  )
}
