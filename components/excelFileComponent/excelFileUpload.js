"use client";

import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
  Box,
  TextField,
  Grid,
  Button,
  Select,
  IconButton,
} from "@mui/material";
import theme from "../../config/theme";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";
import SweatAlertTimer from "@/config/SweatAlert/timer";

export default function excelfileupload() {
  const [excelFile, setExcelFile] = useState(null);
  // const [start, setStart] = useState("B2")
  const { register, handleSubmit, setValue } = useForm();
  const { data: session, status } = useSession();

  const kategoriSoal = useSelector(
    (state) => state.kategoriSoal.kategoriSoalShow
  );

  useEffect(() => {
    if (kategoriSoal) {
      setValue("kategori_soal", kategoriSoal);
    }
    if (excelFile) {
      setValue("file", excelFile);
    }
    setValue("startCell", "B2");
  }, [kategoriSoal, excelFile, setValue]);

  const handleChange = (e) => {
    if (e.target.files.length) {
      setExcelFile(e.target.files[0]);
    }
  };

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "/soal-toep/import-file",
        data,
        {
          headers: {
            Authorization: `Bearer ${session.user.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      SweatAlertTimer(response.data.message, "success");
    } catch (error) {
      SweatAlertTimer("Error", "error");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} marginTop={2}>
        Soal {kategoriSoal}
        <Box marginTop={3} marginBottom={3}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              type="file"
              onChange={handleChange}
            />
          </IconButton>
        </Box>
        Definisikan file excel yang akan diupload
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={3}>
            <TextField
              id="outlined-textarea"
              value="B2"
              size="small"
              fullWidth
              disabled
              required
              {...register("startCell")}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField
              id="outlined-textarea"
              label="Cell Akhir"
              size="small"
              placeholder="contoh : G20"
              fullWidth
              required
              {...register("endCell")}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField
              id="outlined-textarea"
              label="Nomor Sheet"
              size="small"
              placeholder="contoh : 0 untuk sheet pertama, 1 untuk sheet kedua, dst"
              fullWidth
              {...register("noSheet")}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Button variant="contained" color="primary" type="submit">
              Simpan
            </Button>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
