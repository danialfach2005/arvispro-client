# Arvispro Client

Repositori ini berisi *source code* *frontend* untuk aplikasi/portal web **PT Arvispro Sinergi Indonesia**. Proyek ini dirancang menggunakan arsitektur modern yang menjamin performa tinggi, kemudahan pemeliharaan, dan *developer experience* (DX) yang baik.

## 🚀 Tech Stack

Aplikasi ini dibangun menggunakan teknologi terbaru di ekosistem Frontend:
- **Framework & Core:** React 18, TypeScript, Vite
- **Package Manager & Runtime:** [Bun](https://bun.sh/) (Sangat cepat untuk installasi & menjalankan script)
- **State Management:** Redux Toolkit (RTK) & RTK Query
- **Routing:** React Router v6 (SPA)
- **Styling:** CSS Modules, Vanilla CSS (Custom Design System), Tailwind CSS (opsional utilitas)
- **Testing:** Vitest, React Testing Library
- **Deployment:** Docker, Nginx, Vercel Ready

## 📦 Persyaratan Sistem

Pastikan Anda telah menginstal:
- [Bun](https://bun.sh/) (v1.0.0 atau lebih baru)
- Node.js (sebagai fallback opsional, minimum v18)

## 🛠️ Panduan Pengembangan Lokal (*Local Development*)

1. **Clone repository:**
   ```bash
   git clone https://github.com/danialfach2005/arvispro-client.git
   cd arvispro-client
   ```

2. **Buat file Environment Variables:**
   Salin dari template (atau buat baru) `.env`.
   ```bash
   echo "VITE_API_URL=http://localhost:3001" > .env
   ```

3. **Install Dependencies:**
   ```bash
   bun install
   ```

4. **Jalankan *Development Server*:**
   ```bash
   bun run dev
   ```
   Aplikasi dapat diakses melalui `http://localhost:5173`.

## 🧪 Testing

Aplikasi ini menggunakan **Vitest** untuk unit testing. Semua tes telah diatur untuk berjalan mulus menggunakan *environment JSDOM*.

- **Menjalankan semua test:**
  ```bash
  bun run test
  ```
- **Menjalankan test beserta laporan *Coverage*:**
  ```bash
  bun run test:coverage
  ```
  *(Coverage Report bisa dilihat di folder `coverage/` yang akan otomatis terbuat).*

## 🚢 Panduan Deployment

Proyek ini sangat fleksibel dan dapat di-*deploy* ke berbagai jenis infrastruktur.

### 1. Deployment ke VPS via Nginx (Statis)
Gunakan konfigurasi Nginx untuk men-*serve* file statis SPA (*Single Page Application*).
1. Build aplikasi: `bun run build`
2. Pindahkan isi folder `dist/` ke direktori web Anda (contoh: `/var/www/arvispro/`).
3. Gunakan Nginx *Virtual Host* dengan konfigurasi `try_files $uri /index.html;` untuk mengatasi *React Router 404*.

### 2. Deployment ke Vercel (Paling Mudah)
Proyek ini memiliki file `vercel.json` bawaan yang sudah dioptimasi untuk SPA dan Bun.
1. Hubungkan repositori GitHub Anda ke [Vercel](https://vercel.com).
2. Set *Environment Variable* `VITE_API_URL` di Vercel Dashboard.
3. Vercel akan otomatis mengenali *build script* dan men-*deploy* aplikasi setiap ada perubahan.

### 3. Deployment via Docker
Terdapat `Dockerfile` dan `docker-compose.yml` untuk *containerized environment*.
```bash
docker compose up -d --build
```
Aplikasi akan berjalan dan di-ekspos di port `3000`.

## ⚙️ CI/CD (GitHub Actions)

Proyek ini telah dikonfigurasi dengan **GitHub Actions** untuk mempermudah CD (*Continuous Deployment*) ke VPS. 
Setiap kali ada kode baru yang di-*push* ke *branch* `main`, *pipeline* otomatis akan melakukan proses:
1. *Setup environment* menggunakan Bun.
2. Memasang dependensi & membangun (*build*) aplikasi.
3. Masuk ke VPS melalui koneksi SSH yang aman (menggunakan rahasia `SERVER_IP`, `SERVER_USER`, `SSH_PRIVATE_KEY`).
4. Memperbarui container Docker di VPS.

## 📄 Struktur Direktori Penting

- `/src/components`: UI Components yang dapat digunakan kembali (*reusable*).
- `/src/store`: Konfigurasi Redux Toolkit (Slices & RTK Query).
- `/src/infrastructure`: Eksternal service, integrasi API, atau *Agent logic*.
- `/dist`: Folder hasil kompilasi/build untuk *production*.

---
**PT Arvispro Sinergi Indonesia** © 2026. *Confidential & Proprietary*.
