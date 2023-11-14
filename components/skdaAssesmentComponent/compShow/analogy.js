import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  IconButton,
  Backdrop,
  Box,
  Modal,
  Fade,
  Typography,
  TextField,
  Grid,
  Select,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SweatAlertTimer from "@/config/SweatAlert/timer";

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function analogy() {
  const columns = [
    { field: "soal", headerName: "Soal", width: 300, sortable: false },
    { field: "jawaban_a", headerName: "Jawaban A", width: 200 },
    { field: "jawaban_b", headerName: "Jawaban B", width: 200 },
    { field: "jawaban_c", headerName: "Jawaban C", width: 200 },
    { field: "jawaban_d", headerName: "Jawaban D", width: 200 },
    { field: "jawaban_benar", headerName: "Jawaban Benar", width: 200 },
    { field: "skor", headerName: "Skor", width: 75 },
    { field: "durasi", headerName: "Durasi", width: 75 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <div>
          {/* <IconButton
            size="small"
            color="blueSky"
            onClick={() => {
              const fetchData = async () => {
                const response = await axios.get(
                  process.env.NEXT_PUBLIC_API_URL +
                    `/soal-tkda/${params.row.id}`,
                  {
                    headers: {
                      Authorization: `Bearer ${session.user.token}`,
                    },
                  }
                );
                setDetailData(response.data.data);
                console.log(response.data.data);
              };
              fetchData();
              handleOpen();
            }}
          >
            <EditIcon />
          </IconButton> */}
          <IconButton
            size="small"
            color="error"
            onClick={() => {
              const deleteData = async () => {
                await axios.delete(
                  process.env.NEXT_PUBLIC_API_URL +
                    `/soal-tkda/delete/${params.row.id}`,
                  {
                    headers: {
                      Authorization: `Bearer ${session.user.token}`,
                    },
                  }
                );
              };
              SweatAlertTimer("Data deleted successfully", "success"),
                deleteData();
              setUpdate(!update);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [update, setUpdate] = useState(false);

  const [data, setData] = useState([]);
  const [detailData, setDetailData] = useState([]);

  const { data: session } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + `/soal-tkda?part_soal=ANALOGY`,
        {
          headers: {
            Authorization: `Bearer ${session.user.token}`,
          },
        }
      );
      setData(response.data.data);
      // console.log(response.data.data)
    };
    fetchData();
  }, [update]);

  const updateHandler = async (id) => {
    try {
      console.log(detailData);
      const response = await axios.put(
        process.env.NEXT_PUBLIC_API_URL + `/soal-tkda/update/${id}`,
        detailData,
        {
          headers: {
            Authorization: `Bearer ${session.user.token}`,
          },
        }
      );
      SweatAlertTimer(response.data.message, "success");
      setUpdate(!update);
      console.log(detailData);
      handleClose();
    } catch (error) {
      console.log(detailData);
      SweatAlertTimer("Failed to update data", "error");
    }
  };

  return (
    <>
      <div style={{ height: 600, width: "100%", marginTop: 10 }}>
        <DataGrid rows={data} columns={columns} pageSize={12} />
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={styleModal}>
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
              Edit Data
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="Soal"
                  variant="outlined"
                  size="small"
                  value={detailData.soal}
                  sx={{ mb: 2 }}
                  onChange={(e) =>
                    setDetailData({ ...detailData, soal: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={3}>
                {/* <input type="" value={detailData.soal} onChange={(e) => setDetailData({ ...detailData, soal: e.target.value })}/> */}
                <TextField
                  fullWidth
                  label="Jawaban A"
                  variant="outlined"
                  size="small"
                  value={detailData.jawaban_a}
                  sx={{ mb: 2 }}
                  onChange={(e) =>
                    setDetailData({ ...detailData, jawaban_a: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="Jawaban B"
                  variant="outlined"
                  size="small"
                  value={detailData.jawaban_b}
                  sx={{ mb: 2 }}
                  onChange={(e) =>
                    setDetailData({ ...detailData, jawaban_b: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="Jawaban C"
                  variant="outlined"
                  size="small"
                  value={detailData.jawaban_c}
                  sx={{ mb: 2 }}
                  onChange={(e) =>
                    setDetailData({ ...detailData, jawaban_c: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="Jawaban D"
                  variant="outlined"
                  size="small"
                  value={detailData.jawaban_d}
                  sx={{ mb: 2 }}
                  onChange={(e) =>
                    setDetailData({ ...detailData, jawaban_d: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <Select
                  native
                  fullWidth
                  required
                  value={detailData.jawaban_benar}
                  sx={{ mb: 2, height: 30 }}
                  onChange={(e) =>
                    setDetailData({
                      ...detailData,
                      jawaban_benar: e.target.value,
                    })
                  }
                >
                  <option>Pilih Jawaban Benar...</option>
                  <option value="a">Jawaban A</option>
                  <option value="b">Jawaban B</option>
                  <option value="c">Jawaban C</option>
                  <option value="d">Jawaban D</option>
                </Select>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="Skor"
                  variant="outlined"
                  size="small"
                  type="number"
                  value={detailData.skor}
                  sx={{ mb: 2 }}
                  onChange={(e) =>
                    setDetailData({ ...detailData, skor: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="Durasi"
                  variant="outlined"
                  size="small"
                  type="number"
                  value={detailData.durasi}
                  sx={{ mb: 2 }}
                  onChange={(e) =>
                    setDetailData({ ...detailData, durasi: e.target.value })
                  }
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => updateHandler(detailData.id)}
              sx={{
                marginTop: 2,
              }}
            >
              Update
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
