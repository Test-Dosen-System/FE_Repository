"use client"

import { Box, TextField, Grid, Button, Select, IconButton } from "@mui/material"
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { useSession } from "next-auth/react"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import axios from "axios"
import SweatAlertTimer from "@/config/SweatAlert/timer"
import TextFormattingTool from "../TextFormattingTool"

export default function toeptext() {
  const [image, setImage] = useState({ preview: "/upload.png", raw: "" })
  const dispatch = useDispatch()
  const { register, handleSubmit, setValue, reset } = useForm()

  const { data: session, status } = useSession()

  const partSoal = "READING SECTION"

  useEffect(() => {
    if (image) {
      setValue("fileSoal", image.raw)
    }
    setValue("part_soal", partSoal)
  }, [partSoal, image, setValue])

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      })
    }
  }

  const onSubmit = async (data) => {
    try {
      console.log(data)
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "/soal-toep/create-soal-teks",
        data,
        {
          headers: {
            Authorization: `Bearer ${session.user.token}`,
          },
        }
      )
      SweatAlertTimer(response.data.message, "success")
      reset()
    } catch (error) {
      SweatAlertTimer("Failed to create soal", "error")
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} marginTop={2}>
      {/* <TextFormattingTool /> */}
      Part Soal: Reading Section
      {/* <TextField
        id="outlined-textarea"
        label="Paragraph..."
        multiline
        rows={4}
        fullWidth
        sx={{ mb: 2, mt: 2 }}
        {...register("paragraph")}
      />
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
            }}
          />
        </IconButton>
      </Box> */}
      <TextField
        id="outlined-textarea"
        label="Ketikkan Soal..."
        multiline
        rows={2}
        fullWidth
        sx={{ mb: 2 }}
        required
        {...register("soal")}
      />
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
            fullWidth
            type="number"
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
          </Select>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Button
            variant="contained"
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
  )
}
