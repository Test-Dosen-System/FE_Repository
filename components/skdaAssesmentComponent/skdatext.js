'use client';

import { Box, TextField, Grid, Button, Select } from '@mui/material'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import { useSession } from "next-auth/react";
import { useEffect } from 'react';
import axios from 'axios';
import SweatAlertTimer from '@/config/SweatAlert/timer';

export default function skdatext() {
  const { register, handleSubmit, setValue, reset } = useForm();

  const { data: session, status } = useSession();

  const partSoal = useSelector((state) => state.partSoal.partSoalShow);

  return (
    <Box
      marginTop={2}>
      Soal TKDA Jenis Text
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
        <Grid item xs={12} md={6} lg={2}>
          <TextField
            id="outlined-textarea"
            label="Jawaban A"
            size='small'
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} md={6} lg={2}>
          <TextField
            id="outlined-textarea"
            label="Jawaban B"
            size='small'
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} md={6} lg={2}>
          <TextField
            id="outlined-textarea"
            label="Jawaban C"
            size='small'
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} md={6} lg={2}>
          <TextField
            id="outlined-textarea"
            label="Jawaban D"
            size='small'
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} md={6} lg={2}>
          <TextField
            id="outlined-textarea"
            label="Jawaban E"
            size='small'
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          Kunci Jawaban
          <Select
            native
            fullWidth
            required
            sx={{ mb: 2, height: 30 }}
            {...register("jawaban_benar")}
          >
            <option>Pilih Jawaban Benar...</option>
            <option value="jawaban_a">Jawaban A</option>
            <option value="jawaban_b">Jawaban B</option>
            <option value="jawaban_c">Jawaban C</option>
            <option value="jawaban_d">Jawaban D</option>
            <option value="jawaban_d">Jawaban E</option>
          </Select>
          <Button variant="contained" type="submit"
            sx={{
              marginTop: 2,
            }}>
            Simpan
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
