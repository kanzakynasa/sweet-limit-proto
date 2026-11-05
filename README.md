# SweetLimits - Prototype Web App

> **Solusi Pemantauan Konsumsi Gula Cerdas & Pencegahan Diabetes**  
> Dibuat berdasarkan desain resmi [Figma SweetLimit](https://www.figma.com/design/fKRnW35ct7EAxyB0BVahzm/SweetLimit?node-id=0-1&p=f&t=GCqX69Yq2e7d6i8C-0).

---

## 📌 Gambaran Umum Proyek

**SweetLimits** adalah aplikasi pemantau nutrisi dan pembatas asupan gula harian cerdas yang dirancang untuk membantu masyarakat menjaga kadar gula darah, mencegah resistensi insulin, dan memitigasi risiko diabetes tipe 2 sesuai standar gizi **Kementerian Kesehatan Republik Indonesia (Kemenkes RI)** dan **WHO** (maksimal 50 gram / 4 sendok makan gula per hari).

---

## ✨ Fitur Utama & 12 Layar Prototipe

Aplikasi ini mencakup **12 layar lengkap** yang sepenuhnya fungsional dan dapat dinavigasikan langsung:

1. **Splash Screen**: Layar selamat datang dengan identitas brand SweetLimits dan edukasi batas harian Kemenkes RI.
2. **Onboarding**: Panduan pengenalan fitur SmartScan OCR pendeteksi tabel Informasi Nilai Gizi BPOM RI.
3. **Masuk & Registrasi (Auth)**: Formulir autentikasi pengguna dengan tab switch, validasi, dan login alternatif.
4. **Pengaturan Batas Gula**: Kalkulator personalisasi batas gula harian berdasarkan usia, jenis kelamin, IMT (Indeks Massa Tubuh), dan tingkat aktivitas fisik.
5. **Dashboard Beranda (Home)**:
   - **Header**: Back button, logo SweetLimits, lonceng notifikasi, dan **Avatar Foto Profil Asli Budi Santoso** di kanan atas.
   - **Greeting**: Salam personal `Halo, Budi! 🌿` dan tanggal hari ini.
   - **Target Gula Harian**: Donut Gauge interaktif dengan persentase real-time konsumsi gula harian vs target.
   - **Edukasi & Info Diabetes**: Kartu artikel nutrisi resmi Kemenkes RI & peringatan nama samaran gula kemasan (*HFCS, Sukrosa, Maltodekstrin*).
   - **Riwayat Konsumsi Hari Ini**: Daftar log konsumsi minuman/makanan dengan ikon asli Figma dan badge level gula.
6. **SmartScan OCR Kamera**: Simulasi pemindaian kemasan makanan/minuman dengan laser scanner, selektor sampel BPOM, deteksi takaran saji dan total gula instan.
7. **Analisis Gula Produk**: Rincian komposisi gula (sukrosa, glukosa alami), kalori, natrium, ekuivalen sendok makan, serta rekomendasi alternatif sehat rendah gula.
8. **Kalkulator Asupan Gula**: Simulator perhitungan kumulatif takaran gula per porsi.
9. **Riwayat Konsumsi**: Log riwayat terperinci dengan filter tab waktu (*Hari Ini*, *7 Hari Terakhir*, *Bulan Ini*) dan kategori (*Minuman*, *Camilan*, *Bumbu*).
10. **Tren Asupan Gula**: Grafik statistik tren mingguan & bulanan untuk evaluasi kestabilan metabolik.
11. **Pengingat & Notifikasi**: Pusat notifikasi terjadwal (cek gula pagi, waspada camilan sore) dengan modal tambah pengingat baru.
12. **Profil & Pengaturan**: Rincian profil Budi Santoso, 3 metrik fisik (*Beban Gula 62%*, *BB 64kg*, *TB 172cm*), preferensi takaran, dan status privasi data.

---

## 🧭 Navigasi Cepat (5-Item Bottom Dock)

Bottom navigation bar dirancang secara ergonomis untuk kemudahan akses satu jempol (*thumb zone*):

```
[ Beranda ]  →  [ Catat Manual ]  →  [ ⭐ SmartScan (Center Elevated) ]  →  [ Cek Aman ]  →  [ Riwayat ]
```

- **Beranda**: Akses cepat ke dashboard utama.
- **Catat**: Membuka modal pencatatan konsumsi manual secara instan.
- **SmartScan (Tengah Menonjol)**: Tombol lingkaran hijau toska elevated (`#00A86B`) untuk membuka kamera pemindai.
- **Cek Aman**: Akses ke kalkulator pangan aman gula.
- **Riwayat**: Akses log riwayat konsumsi harian dan akumulasi mingguan.
- **Profil**: Terintegrasi langsung pada **Foto Profil di Header Atas**.

---

## 🎨 Standar Desain & Anti-Slop (*Crafted by Designer*)

- **Penyelarasan 100% Figma**: Menggunakan token warna resmi (`#00A86B` Emerald Green, `#F8FAFC` Clean Surface, `#0F172A` Text Slate).
- **Aset Asli**: Menggunakan foto profil resolusi tinggi dan ikon produk Figma otentik.
- **Zero AI-Slop**:
  - Bebas dari border radius 9999px berlebihan pada kartu dan formulir.
  - Bebas dari emoji sembarangan; digantikan ikon vektor semantik yang rapi.
  - Bebas dari gradien norak / glow berlebihan.
  - Tipografi terstruktur menggunakan *Plus Jakarta Sans* & *Inter*.

---

## 🚀 Cara Menjalankan Prototipe

Tidak memerlukan instalasi server atau dependensi runtime khusus. Cukup buka file:

```bash
# Jalankan langsung di browser
double-click index.html
# atau buka via live server:
npx serve .
```

Di bagian atas webapp terdapat **Prototype Review Toolbar**:
- **Lompat ke Screen**: Pindah ke salah satu dari 12 layar Figma secara langsung.
- **Viewport Toggle**: Beralih antara *Phone Frame Mode (iPhone 14 Pro)* dan *Full Width Mode*.
- **Bandingkan Desain Figma**: Modal inspeksi perbandingan langsung dengan desain asli Figma.

---

*Dikembangkan untuk Tugas Mata Kuliah Project Management - Semester 5.*
