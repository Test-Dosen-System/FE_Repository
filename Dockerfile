# Gunakan image Node.js versi 20.10.0 sebagai dasar
FROM node:20.10-alpine3.18

# Set direktori kerja di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json terlebih dahulu
COPY package*.json ./

# Install dependensi
RUN npm install

# Salin seluruh kode sumber aplikasi
COPY . .

# Port yang akan diexpose oleh aplikasi
EXPOSE 3000

# Perintah untuk menjalankan aplikasi
CMD ["npm", "run", "dev"]