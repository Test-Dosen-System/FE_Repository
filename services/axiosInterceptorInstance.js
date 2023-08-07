import axios from 'axios';
import { useSession } from "next-auth/react";

const API = axios.create({
  baseURL: 'http://localhost:1242',
});

// Tambahkan interceptor untuk mengirim token otentikasi jika ada
API.interceptors.request.use(async (config) => {
  const session = await useSession();
  if (session?.user?.token) {
    config.headers.Authorization = `Bearer ${session.user.token}`;
  }
  return config;
});

export default API;
