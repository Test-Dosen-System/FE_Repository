import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';

export default function mainListItems() {
  return (
    <>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <Link href="/admin/dashboard" style={{
          textDecoration: 'none',
          color: 'inherit',
        }}>
          <ListItemText primary="Dashboard" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <NoteAddIcon />
        </ListItemIcon>
        <Link href="/admin/createAssesment" style={{
          textDecoration: 'none',
          color: 'inherit',
        }}>
          <ListItemText primary="Buat Soal" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <Link href="/admin/assesment" style={{
          textDecoration: 'none',
          color: 'inherit',
        }}>
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
