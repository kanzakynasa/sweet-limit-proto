/**
 * SweetLimits - Prototype Data Store & Initial State
 * Sesuai dengan desain dan spesifikasi konten dari Figma SweetLimit
 */

const INITIAL_DATA = {
  user: {
    name: "Budi Santoso",
    title: "Pola Sehat Rendah Gula 🌱",
    memberSince: "Maret 2024",
    age: 28,
    gender: "pria",
    weight: 64, // kg
    height: 172, // cm
    activityLevel: "sedang", // sedentari, ringan, sedang, aktif
    healthFocus: "diabetes_prevention",
    dailyTarget: 30.0, // gram
    unit: "g" // g, sdt, sdm
  },
  
  todayStats: {
    date: "2024-05-24",
    displayDate: "Hari ini, 24 Mei 2024",
    consumed: 20.5,
    target: 30.0,
    status: "Kondisi Aman"
  },

  historyItems: [
    {
      id: "log-1",
      name: "Teh Kemasan Melati 250ml",
      brand: "Teh Kotak Harum",
      time: "12:30 WIB",
      date: "2024-05-24",
      dayGroup: "Hari Ini",
      category: "minuman",
      sugar: 14.0,
      serving: "250ml",
      level: "Sedang", // Rendah, Sedang, Tinggi
      color: "#F59E0B"
    },
    {
      id: "log-2",
      name: "Yogurt Greek Plain 120ml",
      brand: "Healthy Bio",
      time: "08:15 WIB",
      date: "2024-05-24",
      dayGroup: "Hari Ini",
      category: "camilan",
      sugar: 4.5,
      serving: "120g",
      level: "Rendah",
      color: "#10B981"
    },
    {
      id: "log-3",
      name: "Biskuit Gandum (2 keping)",
      brand: "Oat Crunch",
      time: "15:45 WIB",
      date: "2024-05-24",
      dayGroup: "Hari Ini",
      category: "camilan",
      sugar: 2.0,
      serving: "30g",
      level: "Rendah",
      color: "#10B981"
    },
    {
      id: "log-4",
      name: "Susu UHT Cokelat 200ml",
      brand: "Fresh Milky",
      time: "16:45 WIB",
      date: "2024-05-23",
      dayGroup: "Kemarin",
      category: "minuman",
      sugar: 18.0,
      serving: "200ml",
      level: "Tinggi",
      color: "#EF4444"
    },
    {
      id: "log-5",
      name: "Kopi Susu Aren Sedikit",
      brand: "Kopi Kenangan Senja",
      time: "10:10 WIB",
      date: "2024-05-23",
      dayGroup: "Kemarin",
      category: "minuman",
      sugar: 8.0,
      serving: "Regular (250ml)",
      level: "Sedang",
      color: "#F59E0B"
    },
    {
      id: "log-6",
      name: "Keripik Gandum Madu",
      brand: "Nature Snack",
      time: "14:20 WIB",
      date: "2024-05-23",
      dayGroup: "Kemarin",
      category: "camilan",
      sugar: 3.5,
      serving: "45g",
      level: "Rendah",
      color: "#10B981"
    }
  ],

  weeklyTrend: [
    { day: "Sen", date: "16 Mei", sugar: 16.0, status: "safe" },
    { day: "Sel", date: "17 Mei", sugar: 19.0, status: "safe" },
    { day: "Rab", date: "18 Mei", sugar: 34.0, status: "over", note: "Rabu 18 Mei: 34g (+4g over limit)" },
    { day: "Kam", date: "19 Mei", sugar: 22.0, status: "safe" },
    { day: "Jum", date: "20 Mei", sugar: 18.5, status: "safe" },
    { day: "Sab", date: "21 Mei", sugar: 18.0, status: "safe" },
    { day: "Min", date: "22 Mei", sugar: 16.5, status: "safe" }
  ],

  productsCatalog: [
    {
      id: "prod-apple-tea",
      name: "Teh Rasa Apel 350ml",
      categoryName: "Teh Buah Siap Minum",
      servingSize: "1 botol (350 ml)",
      servingDetails: "350 ml (1 botol)",
      packaging: "Kemasan Botol",
      grade: "TINGGI GULA",
      gradeColor: "#EF4444",
      gradeBg: "#FEE2E2",
      sugarPerServing: 24.0,
      calories: 130,
      sodium: 35,
      sucrose: 22.0,
      naturalGlucose: 2.0,
      spoonEquiv: 6.0, // sendok teh
      warningPercentage: 80, // % of 30g daily
      description: "Mengandung 80% dari total batas harian gula Anda (30g). Mengonsumsi botol ini menyisakan sangat sedikit ruang untuk makanan/minuman manis lainnya hari ini.",
      alternatives: [
        {
          name: "Teh Hijau / Hitam Tawar",
          desc: "Tanpa gula tambahan sama sekali",
          sugar: "0g Gula",
          tag: "Pilihan Terbaik"
        },
        {
          name: "Air Infusi Apel & Kayu Manis",
          desc: "Rasa manis alami dan menyegarkan",
          sugar: "< 1g Gula",
          tag: "Segar Alami"
        }
      ]
    },
    {
      id: "prod-jasmine-tea",
      name: "Minuman Teh Melati Kotak 250ml",
      categoryName: "Minuman Teh Siap Minum",
      servingSize: "1 kotak (250 ml)",
      servingDetails: "250 ml (1 sajian)",
      packaging: "Kemasan Kotak Tetra",
      grade: "SEDANG",
      gradeColor: "#F59E0B",
      gradeBg: "#FEF3C7",
      sugarPerServing: 18.0,
      calories: 90,
      sodium: 20,
      sucrose: 16.0,
      naturalGlucose: 2.0,
      spoonEquiv: 4.5,
      warningPercentage: 60,
      description: "Mengandung 60% batas harian rekomendasi (30g). Cocok diminum sesekali asalkan tidak disertai camilan manis lainnya.",
      alternatives: [
        {
          name: "Teh Melati Tawar Dingin",
          desc: "Aroma melati khas tanpa gula",
          sugar: "0g Gula",
          tag: "Rekomendasi"
        }
      ]
    },
    {
      id: "prod-boba-brown",
      name: "Teh Susu Boba Sedang (Regular)",
      categoryName: "Minuman Kekinian Manis",
      servingSize: "1 gelas (375 ml)",
      servingDetails: "375 ml (1.5 porsi basis)",
      packaging: "Cup Plastik",
      grade: "OVER LIMIT",
      gradeColor: "#DC2626",
      gradeBg: "#FEE2E2",
      sugarPerServing: 27.0,
      calories: 280,
      sodium: 65,
      sucrose: 24.0,
      naturalGlucose: 3.0,
      spoonEquiv: 6.75,
      warningPercentage: 90,
      description: "Melebihi jatah sisa harian Anda! Mengandung gula cair pekat dan boba berkarbohidrat tinggi.",
      alternatives: [
        {
          name: "Boba Less Sugar 30% / Fresh Milk",
          desc: "Kurangi gula hingga 70%",
          sugar: "8g Gula",
          tag: "Alternatif Sehat"
        }
      ]
    },
    {
      id: "prod-soda-can",
      name: "Minuman Soda Berkarbonasi 330ml",
      categoryName: "Minuman Bersoda",
      servingSize: "1 kaleng (330 ml)",
      servingDetails: "330 ml",
      packaging: "Kemasan Kaleng",
      grade: "TINGGI GULA",
      gradeColor: "#EF4444",
      gradeBg: "#FEE2E2",
      sugarPerServing: 35.0,
      calories: 140,
      sodium: 40,
      sucrose: 35.0,
      naturalGlucose: 0.0,
      spoonEquiv: 8.75,
      warningPercentage: 116,
      description: "Melebihi 100% total batas rekomendasi harian dalam sekali teguk!",
      alternatives: [
        {
          name: "Sparkling Water + Jeruk Lemon",
          desc: "Sensasi soda menyegarkan tanpa gula",
          sugar: "0g Gula",
          tag: "Bebas Kalori"
        }
      ]
    }
  ],

  notifications: [
    {
      id: "notif-1",
      title: "Peringatan Asupan Sore 🔔",
      time: "15 mnt lalu",
      read: false,
      tag: "68% batas harian",
      tagColor: "#F59E0B",
      tagBg: "#FEF3C7",
      body: "Anda telah mengonsumsi 20.5g gula hari ini. Sisa kuota aman 9.5g untuk makan malam.",
      actionText: "Lihat Ringkasan"
    },
    {
      id: "notif-2",
      title: "Waktunya Catat Camilan Siang 🍵",
      time: "3 jam lalu",
      read: false,
      tag: "Pengingat Rutin",
      tagColor: "#10B981",
      tagBg: "#D1FAE5",
      body: "Jangan lupa pindai label kemasan minuman Anda untuk memastikan kadar gula tetap terkontrol.",
      actionText: "Pindai Produk Sekarang"
    },
    {
      id: "notif-3",
      title: "Pencapaian Minggu Ini 🏆",
      time: "Kemarin",
      read: true,
      tag: "Disiplin Sehat",
      tagColor: "#10B981",
      tagBg: "#D1FAE5",
      body: "Hebat! Anda berhasil 5 hari berturut-turut di bawah batas rekomendasi konsumsi gula BPOM. Pertahankan!",
      actionText: "Lihat Laporan"
    }
  ],

  schedules: [
    {
      id: "sch-1",
      name: "Pengingat Makan Siang",
      desc: "Jadwal otomatis 12:30 WIB",
      active: true
    },
    {
      id: "sch-2",
      name: "Pengingat Camilan Sore",
      desc: "Jadwal otomatis 16:00 WIB",
      active: true
    },
    {
      id: "sch-3",
      name: "Peringatan Mendekati Batas Harian",
      desc: "Saat sisa kuota <5g batas aman",
      active: true
    },
    {
      id: "sch-4",
      name: "Rangkuman Gula Harian Malam",
      desc: "Laporan penutup 20:30 WIB",
      active: true
    },
    {
      id: "sch-5",
      name: "Kiat Gizi & Berita BPOM Terkini",
      desc: "Artikel edukasi dan regulasi pangan",
      active: false
    }
  ]
};

// Expose globally
window.SWEET_LIMIT_DATA = INITIAL_DATA;
