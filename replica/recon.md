# Recon map: SweetLimits (Mobile Webapp / iOS & Android Frame)

**Benchmark Reference**: **Lifesum** (Intake Tracking, Circular Quota Gauge, Food Diary) + **Yuka** (Label/Barcode OCR Scanner, Nutritional Risk Grading, Healthier Alternatives)  
**Product Adaptation**: **SweetLimits** difokuskan secara spesifik untuk **Pengendalian Asupan Gula & Pencegahan Risiko Diabetes Melitus** berbasis standar **Kemenkes RI** (maks. 50g/hari) & **WHO**.  
**Date**: 2026-11-08  
**Scope**: Core Loop Kontrol Gula Harian (Biometrik Personal -> Pindai OCR Kemasan BPOM -> Analisis Risiko Gula -> Dashboard Donut -> Jurnal Riwayat Konsumsi -> Tren Mingguan).  
**Target User**: Individu sadar kesehatan di Indonesia, penderita pradiabetes, serta keluarga yang ingin mengontrol konsumsi gula harian dari makanan/minuman kemasan.

---

## 1. Sources & Benchmark References

| # | Source | URL / Reference | What it gives you |
|---|---|---|---|
| 1 | **Lifesum** Mobile App | `https://lifesum.com/` | Pola UX Circular Donut Gauge, Diary harian, kalkulasi kebutuhan kalori/nutrisi berbasis IMT & aktivitas fisik. |
| 2 | **Yuka** Food Scanner | `https://yuka.io/en/` | Pola UX OCR/Barcode Scanner kemasan, sistem evaluasi lampu lalu lintas (Hijau/Kuning/Merah), dan fitur rekomendasi alternatif produk yang lebih sehat. |
| 3 | **Kemenkes RI** Pedoman Gizi Seimbang | Permenkes No. 30 Tahun 2013 | Acuan legal batas konsumsi gula maksimal 50 gram (4 sendok makan) per orang per hari di Indonesia. |
| 4 | **BPOM RI** Regulasi Label Gizi | PerBPOM No. 26 Tahun 2021 | Standar penyajian Informasi Nilai Gizi (ING) pada kemasan pangan olahan Indonesia. |
| 5 | **SweetLimits** Figma Prototype | [Figma SweetLimit](https://www.figma.com/design/fKRnW35ct7EAxyB0BVahzm/SweetLimit?node-id=0-1) | 12 screen inventory resmi, token warna hijau toska (`#00A86B`), dan aset visual otentik. |

---

## 2. Core Loop

> **"Pindai label kemasan instan (atau catat cepat) → Dapatkan grade risiko gula & sisa kuota harian → Jaga akumulasi di bawah ambang batas aman 50g Kemenkes untuk cegah resistensi insulin."**

Pengguna membuka aplikasi dalam hitungan detik saat berbelanja atau sebelum minum/makan untuk memastikan pilihan mereka aman dan tidak melebihi sisa jatah gula harian.

---

## 3. Screen Inventory (12 Screens)

| ID | Screen | Route / Trigger | Purpose | Key Components | States Seen |
|---|---|---|---|---|---|
| **S01** | Splash Screen | Initial Load | Pengenalan brand SweetLimits & edukasi batas 50g Kemenkes | Brand Logo Leaf, Headline, Standar Kemenkes Card, CTA Mulai | Default, Transitioning |
| **S02** | Onboarding | S01 -> "Mulai" | Edukasi teknologi SmartScan OCR tabel gizi kemasan Indonesia | Mockup Card OCR BPOM, Pagination Dots, Button "Lanjut", Link "Lewati" | Slide 1 (active), Slide 2, Slide 3 |
| **S03** | Auth (Masuk & Daftar) | S02 -> "Lanjut" / "Lewati" | Akses akun pengguna dengan validasi email & password | Segmented Tab Masuk/Daftar, Form Input Email & Password, Social Login Google/Apple | Login mode, Register mode, Validation error |
| **S04** | Limit Settings (Biometrik) | S03 -> Login / S12 -> Edit | Personalisasi batas gula harian berdasarkan data biologis | Input Usia, Gender Selector, BB (kg), TB (cm), Activity Grid (4 tiles), Health Focus Pills, Suggested Limit Card | Default, Recalculating, Saved |
| **S05** | Dashboard Beranda | S04 -> Simpan / Nav "Beranda" | Pusat kendali visual asupan gula harian & wawasan kesehatan | Header (Notif + Foto Budi), Donut Gauge Card (20.5g/30g), Edukasi Kemenkes Card, Riwayat Hari Ini List, 5-Item Nav Bar | Safe (<75%), Warning (75-100%), Overlimit (>100%), Empty logs |
| **S06** | SmartScan OCR Kamera | Nav "Scan" (Center) / Quick CTA | Viewfinder pemindai tabel nilai gizi BPOM dengan laser OCR | Viewfinder Frame, Laser Scanner, Sample Selector, OCR Tag Pills (Takaran Saji & Gula), Bottom Sheet Hasil Instan | Scanning, Detected, Flashlight On/Off, Sample Switched |
| **S07** | Analisis Gula Produk | S06 -> "Lihat Analisis Lengkap" | Bedah mendalam kandungan gula produk & saran substitusi | Grade Banner (Sedang/Tinggi/Aman), Kandungan Sukrosa/Glukosa, Ekuivalen Sendok, Rekomendasi Alternatif Sehat | Safe Product, Moderate Sugar, High Sugar (>80% quota) |
| **S08** | Kalkulator Asupan Gula | Nav "Cek Aman" | Simulator perhitungan gula kumulatif per porsi konsumsi | Search Input Produk, Porsi Counter (+/-), Visual Gauge Gula, Card Rekomendasi Medis | Initial, Custom Portions, Max Limit Alert |
| **S09** | Riwayat Konsumsi | Nav "Riwayat" / S05 -> "Lihat Semua"| Log konsumsi terinci dengan filter waktu dan kategori | Time Filter Segmented (Hari Ini, 7 Hari, Bulan Ini), Category Pills, Akumulasi 7 Hari Bar Chart, Log Cards List | Filtered by Minuman, Filtered by Camilan, Empty search |
| **S10** | Tren Asupan Gula | Header Trend / S09 Analytics | Analisis pola metabolik & evaluasi mingguan/bulanan | Period Switch (Mingguan/Bulanan), 2 Summary Stat Tiles, Daily Average Card, Metabolic Risk Evaluation Card | Weekly view, Monthly view |
| **S11** | Pengingat & Notifikasi | Header Bell Icon | Pengaturan reminder log harian dan pencapaian target | Notification List, Reminder Switches (Pagi/Malam), Modal "Tambah Pengingat", Status Dibaca | Active items, Empty notif, Add reminder open |
| **S12** | Profil & Pengaturan | Header Avatar Photo | Manajemen profil pengguna, biometrik, preferensi, privasi | Profile Hero Tile (Foto Budi, Tag Sehat), 3 Tri-Metrics (Beban 62%, BB 64kg, TB 172cm), Personal Limit Card, Menu List | Default, Target Changed, Logout confirmed |

---

## 4. User Flows

### F01: Personalisasi Batas Gula Awal (Happy Path: 4 taps)
```
S01 Splash -> [Mulai] -> S02 Onboarding -> [Lanjut] -> S03 Masuk -> [Masuk] -> S04 Limit Settings -> [Simpan & Masuk] -> S05 Beranda
Happy path clicks: 4
Edge cases: Pengguna dengan pradiabetes/diabetes otomatis menurunkan batas rekomendasi harian menjadi 25g.
```

### F02: SmartScan Label Minuman di Toko/Supermarket (Happy Path: 3 taps)
```
S05 Beranda -> [Tombol Scan Tengah] -> S06 Viewfinder (Laser aktif otomatis mendeteksi ING BPOM) -> S06 Bottom Sheet -> [Lihat Analisis Lengkap] -> S07 Analisis Produk -> [Catat ke Konsumsi Hari Ini] -> S05 Beranda (Donut Gauge bertambah)
Happy path clicks: 3
Edge cases: Produk terdeteksi TINGGI GULA (>80% sisa kuota) -> Tampilkan banner merah & rekomendasi 2 minuman alternatif bebas gula.
```

### F03: Catat Manual Cepat Minuman/Kopi Kedai (Happy Path: 3 taps)
```
S05 Beranda -> [Tombol Catat di Nav Bawah] -> Modal Catat Manual Terbuka -> Input Nama ("Kopi Susu Aren") & Gula (14g) -> [Simpan Catatan] -> S05 Beranda (Donut terupdate secara reaktif)
Happy path clicks: 3
```

### F04: Evaluasi Jurnal Mingguan (Happy Path: 2 taps)
```
S05 Beranda -> [Tombol Riwayat di Nav Bawah] -> S09 Riwayat Konsumsi -> Tap [7 Hari Terakhir] -> Lihat Akumulasi Bar Chart (Sen 16g, Sel 19g, Rab 34g-over, Kam 22g, Jum 18.5g, Sab 18g, Min 16.5g)
Happy path clicks: 2
```

---

## 5. Components Architecture (Anti-Slop Standard)

Mengacu pada prinsip desain humanis Lifesum & Yuka (bebas elemen AI generik, tanpa border-radius kapsul 9999px sembarangan, tanpa em-dash, tanpa ikon acak):

1. **Header Bar**:
   - Back arrow navigasi kiri (`←`).
   - Center brand identity `SweetLimits` hijau toska tebal (`#00A86B`).
   - Notification bell dengan dot merah peringatan.
   - **Foto Profil Otentik Budi Santoso** (`assets/avatar_budi_hq.png`) dengan diameter 36px, outline hijau zamrud dan active online indicator.
2. **Circular Donut Intake Gauge**:
   - Lingkaran progress SVG presisi (`stroke-width: 16`, background track `#E2E8F0`, active track `#00A86B`).
   - Angka nilai konsumsi besar (`20.5 g`), label batas (`30.0 g`), dan badge persentase (`68% Terpakai`).
3. **5-Item Floating Navigation Dock**:
   - `Beranda` (Home icon)
   - `Catat` (Pencil log icon)
   - `Scan` (**Elevated Center Circle**: Lingkaran 52px hijau toska melayang dengan ikon viewfinder QR putih)
   - `Cek Aman` (Shield calculator icon)
   - `Riwayat` (Clock history icon)
4. **Product Log Card**:
   - Kotak ikon produk 48x48px pastel (`#EFF6FF` / `#F0FDF4`) dengan ikon resmi (Teh, Yogurt, Biskuit).
   - Tipografi hierarki: Nama produk bold `#0F172A`, waktu `12.30 WIB`, dan badge status oval (`• Sedang` / `• Rendah`).
   - Nilai gramasi gula tebal (`14.0 g`) dan unit label `gula`.
5. **Editorial Health Insight Card**:
   - Kartu wawasan kesehatan Kemenkes RI (`#F0FDF4` gradien ke putih, border `#BBF7D0`).
   - Tidak menggunakan template AI generik; mengedepankan data kesehatan konkret (aturan 50g gula = 4 sdm, bahaya HFCS).

---

## 6. Inferred Data Model

```
User {
  id: string,
  name: string,
  email: string,
  memberSince: string,
  healthFocus: "diabetes_prevention" | "prediabetes" | "low_calorie" | "general"
}

UserBiometrics {
  userId: string,
  age: number,
  gender: "pria" | "wanita",
  weightKg: number,
  heightCm: number,
  bmi: number,
  activityLevel: "sedentari" | "ringan" | "sedang" | "aktif",
  calculatedDailyLimitGram: number
}

ConsumptionLog {
  id: string,
  userId: string,
  productId: string?,
  productName: string,
  category: "minuman" | "camilan" | "bumbu",
  sugarGrams: number,
  servingSize: string,
  loggedAt: timestamp,
  dayGroup: "Hari Ini" | "Kemarin" | string,
  riskLevel: "Rendah" | "Sedang" | "Tinggi"
}

ProductNutrition {
  id: string,
  name: string,
  categoryName: string,
  servingSize: string,
  sugarPerServingGrams: number,
  caloriesKcal: number,
  sodiumMg: number,
  sucroseGrams: number,
  glucoseGrams: number,
  spoonEquiv: number,
  grade: "AMAN" | "SEDANG" | "TINGGI GULA" | "OVER LIMIT",
  gradeColor: string,
  description: string,
  alternatives: Array<{ name: string, desc: string, sugar: string, tag: string }>
}
```

---

## 7. Out of Scope (What Cannot / Should Not Be Cloned)

1. **Continuous Glucose Monitor (CGM) Hardware Sensor**: Aplikasi fokus pada pencegahan dan kontrol asupan dari makanan/minuman kemasan, bukan membaca cairan interstisial darah lewat sensor fisik Bluetooth.
2. **Resep Medis Insulin Otomatis**: SweetLimits adalah alat edukasi gizi dan pemantauan mandiri (Kemenkes/BPOM), bukan perangkat diagnostik medis untuk meresepkan dosis insulin.
3. **Database Cloud 3 Juta Produk Global**: Dibatasi pada katalog pangan olahan yang terdaftar di BPOM RI dan makanan/minuman populer di Indonesia.

---

## 8. Sizing & Implementation Architecture

- **Screens**: 12 Layar Lengkap
- **User Flows**: 4 Alur Utama (Onboarding, SmartScan, Catat Cepat, Riwayat & Tren)
- **Hard Parts**: 
  1. Simulasi kamera OCR interaktif dengan frame laser scanner & sample switcher.
  2. Kalkulasi dinamis persentase Donut Gauge secara reaktif saat ada log konsumsi baru.
  3. Floating bottom dock 5 tombol yang ergonomis tanpa memotong konten scrollable.
- **Complexity Size**: **S (Small / Weekend)** untuk prototipe fungsional mobile webapp berstandar tinggi.
