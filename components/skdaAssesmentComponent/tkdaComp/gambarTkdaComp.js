"use client";

import { ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import SweatAlertTimer from "@/config/SweatAlert/timer";
import {
  Box,
  TextField,
  Grid,
  Button,
  Select,
  IconButton,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Image from "next/image";
import theme from "@/config/theme";

export default function GambarTkdaComp() {
  const { register, handleSubmit, setValue, reset } = useForm();

  const { data: session, status } = useSession();

  const [image, setImage] = useState({ preview: "/upload.png", raw: "" });
  const [imageA, setImageA] = useState({ preview: "/a.png", raw: "" });
  const [imageB, setImageB] = useState({ preview: "/b.png", raw: "" });
  const [imageC, setImageC] = useState({ preview: "/c.png", raw: "" });
  const [imageD, setImageD] = useState({ preview: "/d.png", raw: "" });
  // const [imageE, setImageE] = useState({ preview: '/e.png', raw: '' })

  const partSoal = useSelector((state) => state.partSoal.partSoalShow);
  console.log(partSoal);
  const soal = "";

  useEffect(() => {
    if (partSoal) {
      setValue("part_soal", partSoal);
    }
    setValue("soal", soal);
  }, [partSoal, soal, setValue]);

  useEffect(() => {
    if (image) {
      setValue("fileSoal", image.raw);
    }
    if (imageA) {
      setValue("fileJawabanA", imageA.raw);
    }
    if (imageB) {
      setValue("fileJawabanB", imageB.raw);
    }
    if (imageC) {
      setValue("fileJawabanC", imageC.raw);
    }
    if (imageD) {
      setValue("fileJawabanD", imageD.raw);
    }
    if (partSoal) {
      setValue("part_soal", partSoal);
    }
    // if (imageE) {
    //   setValue("jawaban_e", imageE.raw)
    // }
  }, [image, imageA, imageB, imageC, imageD, partSoal, setValue]);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "/soal-tkda/create-soal-gambar",
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
      SweatAlertTimer("Failed to create soal", "error");
    }
  };

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleChangeA = (e) => {
    if (e.target.files.length) {
      setImageA({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleChangeB = (e) => {
    if (e.target.files.length) {
      setImageB({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleChangeC = (e) => {
    if (e.target.files.length) {
      setImageC({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleChangeD = (e) => {
    if (e.target.files.length) {
      setImageD({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  // const handleChangeE = (e) => {
  //   if (e.target.files.length) {
  //     setImageE({
  //       preview: URL.createObjectURL(e.target.files[0]),
  //       raw: e.target.files[0]
  //     })
  //   }
  // }

  const handleFiles = (files) => {
    setImage(files);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} marginTop={2}>
      Soal TKDA Jenis Gambar
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
          width={250}
          height={250}
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
            }}
          />
        </IconButton>
      </Box>
      {/* <TextField
        id="outlined-textarea"
        label="Ketikkan Soal..."
        multiline
        rows={4}
        fullWidth
        sx={{ mb: 2 }}
      /> */}
      <Grid container spacing={5}>
        <Grid item xs={12} md={4} lg={3}>
          Jawaban A<br></br>
          <Image
            src={imageA.preview}
            alt="Picture of the author"
            width={150}
            height={150}
            style={{ objectFit: "cover" }}
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={handleChangeA}
            />
            <AddAPhotoIcon
              sx={{
                width: 35,
                height: 35,
              }}
            />
          </IconButton>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          Jawaban B<br></br>
          <Image
            src={imageB.preview}
            alt="Picture of the author"
            width={150}
            height={150}
            style={{ objectFit: "cover" }}
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={handleChangeB}
            />
            <AddAPhotoIcon
              sx={{
                width: 35,
                height: 35,
              }}
            />
          </IconButton>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          Jawaban C<br></br>
          <Image
            src={imageC.preview}
            alt="Picture of the author"
            width={150}
            height={150}
            style={{ objectFit: "cover" }}
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={handleChangeC}
            />
            <AddAPhotoIcon
              sx={{
                width: 35,
                height: 35,
              }}
            />
          </IconButton>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          Jawaban D<br></br>
          <Image
            src={imageD.preview}
            alt="Picture of the author"
            width={150}
            height={150}
            style={{ objectFit: "cover" }}
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={handleChangeD}
            />
            <AddAPhotoIcon
              sx={{
                width: 35,
                height: 35,
              }}
            />
          </IconButton>
        </Grid>
        {/* <Grid item xs={12} md={4} lg={3}>
          Jawaban E
          <br></br>
          <Image
            src={imageE.preview}
            alt="Picture of the author"
            width={150}
            height={150}
            style={{ objectFit: "cover" }}
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" onChange={handleChangeE} />
            <AddAPhotoIcon
              sx={{
                width: 35,
                height: 35,
              }} />
          </IconButton>
        </Grid> */}
        <Grid item xs={12} md={4} lg={4}>
          <TextField
            id="outlined-textarea"
            label="Point"
            size="small"
            fullWidth
            type="number"
            required
            sx={{ mb: 2 }}
            {...register("skor", {
              valueAsNumber: true,
            })}
          />
          <TextField
            id="outlined-textarea"
            label="Waktu"
            size="small"
            fullWidth
            type="number"
            required
            sx={{ mb: 2 }}
            {...register("durasi", {
              valueAsNumber: true,
            })}
          />
          <Select
            native
            fullWidth
            required
            sx={{ mb: 2, height: 30 }}
            {...register("jawaban_benar")}
          >
            <option>Pilih Jawaban Benar...</option>
            <option value={"a"}>Jawaban A</option>
            <option value={"b"}>Jawaban B</option>
            <option value={"c"}>Jawaban C</option>
            <option value={"d"}>Jawaban D</option>
            {/* <option value={"e"}>Jawaban E</option> */}
          </Select>
          <Button variant="contained" color="primary" type="submit">
            Simpan
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
