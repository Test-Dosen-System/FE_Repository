"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { ThemeProvider } from "@mui/material/styles";
import {
  Box,
  TextField,
  Grid,
  Button,
  Select,
  IconButton,
} from "@mui/material";
import theme from "@/config/theme";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import SweatAlertTimer from "@/config/SweatAlert/timer";
// import { FadeLoader } from "react-spinners";

export default function AllToepAudio() {
  const [audio, setAudio] = useState(null);
  const { register, handleSubmit, setValue, reset } = useForm();
  const { data: session } = useSession();
  const partSoal = useSelector((state) => state.partSoal.partSoalShow);
  const [loading, setLoading] = useState(false);
  // console.log(partSoal)
  const soal = "";

  useEffect(() => {
    if (audio) {
      setValue("fileSoal", audio);
    }
    if (partSoal) {
      setValue("part_soal", partSoal);
    }
    setValue("soal", soal);
  }, [audio, partSoal, soal, setValue]);

  const handleChange = (e) => {
    if (e.target.files.length) {
      setAudio(e.target.files[0]);
    }
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        // setLoading(true),
        process.env.NEXT_PUBLIC_API_URL + "/soal-toep/create-soal-audio",
        data,
        {
          headers: {
            Authorization: `Bearer ${session.user.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // setLoading(false);
      SweatAlertTimer(response.data.message, "success");
      reset();
    } catch (error) {
      SweatAlertTimer(
        "Failed to create soal, please cek the format of audio",
        "error"
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <FadeLoader loading={loading} color={"#e49011"} size={150} /> */}
      <Box component="form" onSubmit={handleSubmit(onSubmit)} marginTop={5}>
        <Box marginTop={3} marginBottom={3} bgcolor={"bgbox.main"}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input accept="audio/*" type="file" onChange={handleChange} />
          </IconButton>
        </Box>
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
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{
                marginTop: 2,
              }}
            >
              Simpan
            </Button>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
