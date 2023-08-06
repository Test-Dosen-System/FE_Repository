import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SweatAlertTimer from '@/config/SweatAlert/timer';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import DnsIcon from '@mui/icons-material/Dns';
import FactCheckIcon from '@mui/icons-material/FactCheck';

export default function mainListItems() {
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleLogout = () => {
    localStorage.clear()
    router.push('/admin/login')
    SweatAlertTimer("Logout berhasil", "success");
  }

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
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <NoteAddIcon />
        </ListItemIcon>
        <ListItemText primary="Buat Soal" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PlaylistAddCheckIcon />
            </ListItemIcon>
            <Link href="/admin/createAssesment/toep" style={{
              textDecoration: 'none',
              color: 'inherit',
            }}>
              <ListItemText primary="Buat Soal TOEP" />
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PlaylistAddIcon />
            </ListItemIcon>
            <Link href="/admin/createAssesment/skda" style={{
              textDecoration: 'none',
              color: 'inherit',
            }}>
              <ListItemText primary="Buat Soal SKDA" />
            </Link>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick2}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Daftar Soal" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <DnsIcon />
            </ListItemIcon>
            <Link href="/admin/assesment/toep" style={{
              textDecoration: 'none',
              color: 'inherit',
            }}>
              <ListItemText primary="Daftar Soal TOEP" />
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <FactCheckIcon />
            </ListItemIcon>
            <Link href="/admin/assesment/skda" style={{
              textDecoration: 'none',
              color: 'inherit',
            }}>
              <ListItemText primary="Daftar Soal SKDA" />
            </Link>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" onClick={handleLogout} />
      </ListItemButton>
    </>
  )
};

