import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SweatAlertTimer from "@/config/SweatAlert/timer";

export default function readingSection() {
  const [data, setData] = useState([]);
  const { data: session } = useSession();
  const [update, setUpdate] = useState(false);

  const columns = [
    { field: "soal", headerName: "Soal", width: 200 },
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
                    `/soal-toep/${params.row.id}`,
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
                    `/soal-toep/delete/${params.row.id}`,
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

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_URL +
          `/soal-toep?part_soal=READING SECTION`,
        {
          headers: {
            Authorization: `Bearer ${session.user.token}`,
          },
        }
      );
      setData(response.data.data);
      console.log(response.data.data);
    };
    fetchData();
  }, [update]);

  return (
    <div style={{ height: 600, width: "100%", marginTop: 10 }}>
      <DataGrid rows={data} columns={columns} pageSize={12} />
    </div>
  );
}
