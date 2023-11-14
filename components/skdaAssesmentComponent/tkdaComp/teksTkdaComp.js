'use client';

import { ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux'
import { useSession } from "next-auth/react";
import { useEffect } from 'react';
import axios from 'axios';
import SweatAlertTimer from '@/config/SweatAlert/timer';
import theme from '@/config/theme';
import { Box, TextField, Grid, Button, Select, IconButton } from '@mui/material'
import RichTextEditor from '@/components/richTextEditor';

export default function TeksSkdaComp() {
  const { register, handleSubmit, setValue, reset } = useForm();

  const { data: session, status } = useSession();

  const partSoal = useSelector((state) => state.partSoal.partSoalShow);
  console.log(partSoal)
  const soal = ""

  useEffect(() => {
    if (partSoal) {
      setValue("part_soal", partSoal)
    }
    setValue("soal", soal)
  }, [partSoal, soal, setValue])

  const onSubmit = async (data) => {
    try {
      console.log(data)
      const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/soal-tkda/create-soal-teks', data, {
        headers: {
          'Authorization': `Bearer ${session.user.token}`,
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
        Soal TKDA Jenis Text
        <TextField
          id="outlined-textarea"
          label="Ketikkan Soal..."
          multiline
          rows={4}
          fullWidth
          required
          sx={{ mb: 2 }}
          {...register("soal")}
        />
        Jawaban
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={2}>
            <TextField
              id="outlined-textarea"
              label="Jawaban A"
              size='small'
              fullWidth
              required
              {...register("jawaban_a")}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <TextField
              id="outlined-textarea"
              label="Jawaban B"
              size='small'
              fullWidth
              required
              {...register("jawaban_b")}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <TextField
              id="outlined-textarea"
              label="Jawaban C"
              size='small'
              fullWidth
              required
              {...register("jawaban_c")}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <TextField
              id="outlined-textarea"
              label="Jawaban D"
              size='small'
              fullWidth
              required
              {...register("jawaban_d")}
            />
          </Grid>
          {/* <Grid item xs={12} md={6} lg={2}>
            <TextField
              id="outlined-textarea"
              label="Jawaban E"
              size='small'
              fullWidth
              {...register("jawaban_e")}
            />
          </Grid> */}
          <Grid item xs={12} md={6} lg={2}>
            <TextField
              id="outlined-textarea"
              label="Point"
              size="small"
              fullWidth
              type="number"
              required
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
              fullWidth
              type="number"
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
              {/* <option value="e">Jawaban E</option> */}
            </Select>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Button variant="contained" type="submit" fullWidth
              sx={{
                marginTop: 2,
              }}>
              Simpan
            </Button>
          </Grid>

        </Grid>
      </Box>
    </ThemeProvider>
  );
}