import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from '@mui/material/Link';

export default function mainListItems() {
  return (
    <>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <Link color="inherit" href="/admin/dashboard" underline='none'>
          <ListItemText primary="Dashboard" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <NoteAddIcon />
        </ListItemIcon>
        <Link color="inherit" href="/admin/createAssesment" underline='none'>
          <ListItemText primary="Buat Soal" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <Link color="inherit" href="/admin/assesment" underline='none'>
          <ListItemText primary="Daftar Soal" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </>
  )
};

