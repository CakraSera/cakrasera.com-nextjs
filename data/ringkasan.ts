// data/ringkasan.ts

export type DayProtocol = {
  day: number;
  action: string; // aksi utama (5-15 menit)
  micro: string; // micro-action (2 menit, fallback)
};

export type Ringkasan = {
  slug: string; // dipakai di URL: /actiongap/ringkasan/[slug]
  judul: string; // judul buku asli
  penulis: string;
  deskripsiSingkat: string; // 1-2 kalimat, untuk meta description & card
  poinUtama: string[]; // 5 poin ringkasan buku
  wawasan: {
    // 5 wawasan mendalam
    judul: string;
    penjelasan: string;
  }[];
  preview30Hari: DayProtocol[]; // 3 hari pertama dari 30-day plan (untuk SEO preview)
  ctaText: string; // teks CTA yang spesifik untuk buku ini
};

export const ringkasanData: Ringkasan[] = [
  {
    slug: "atomic-habits",
    judul: "Atomic Habits",
    penulis: "James Clear",
    deskripsiSingkat:
      "Panduan praktis membangun kebiasaan baik dan menghilangkan kebiasaan buruk melalui perubahan kecil yang konsisten setiap hari.",
    poinUtama: [
      "Perubahan 1% setiap hari menghasilkan perbedaan 37x lipat dalam setahun — konsistensi kecil lebih kuat dari motivasi besar.",
      "Identitas adalah pondasi kebiasaan: bukan 'saya ingin lari' tapi 'saya adalah pelari'. Kebiasaan tumbuh dari siapa kamu, bukan apa yang kamu inginkan.",
      "Loop kebiasaan terdiri dari empat tahap: Cue (pemicu), Craving (keinginan), Response (respons), Reward (hadiah). Ubah satu tahap, ubah seluruh kebiasaan.",
      "Habit stacking adalah cara tercepat membangun kebiasaan baru: tempel kebiasaan baru di belakang kebiasaan yang sudah ada.",
      "Lingkungan lebih kuat dari motivasi. Desain lingkunganmu supaya kebiasaan baik jadi pilihan termudah.",
    ],
    wawasan: [
      {
        judul: "Sistem lebih penting dari target",
        penjelasan:
          "James Clear berargumen bahwa kamu tidak naik ke level targetmu — kamu turun ke level sistemmu. Atlet yang gagal di olimpiade bukan karena kurang motivasi, tapi karena sistem latihannya tidak mendukung. Fokus pada memperbaiki sistem, bukan mengejar angka.",
      },
      {
        judul: "Hukum 2 Menit: mulai dari yang sangat mudah",
        penjelasan:
          "Setiap kebiasaan baru harus bisa dimulai dalam 2 menit. Bukan 'lari 5 km', tapi 'pakai sepatu lari'. Bukan 'baca 30 menit', tapi 'buka buku'. Memulai adalah hambatan terbesar — setelah mulai, momentum mengambil alih.",
      },
      {
        judul: "Identitas sebagai kompas",
        penjelasan:
          "Mayoritas buku self-help fokus pada outcome (apa yang ingin dicapai). Atomic Habits fokus pada identity (siapa yang ingin kamu jadi). Setiap kali kamu melakukan kebiasaan kecil, kamu sedang 'vote' untuk identitas versi dirimu yang lebih baik.",
      },
      {
        judul: "Membuat kebiasaan buruk tidak menarik",
        penjelasan:
          "Kebiasaan buruk sulit dihentikan bukan karena kamu lemah, tapi karena cue-nya ada di mana-mana. Solusinya bukan willpower — tapi redesain lingkungan. Sembunyikan snack di lemari tertinggi. Hapus aplikasi game dari halaman utama HP.",
      },
      {
        judul: "Goldilocks Rule: zona kesulitan optimal",
        penjelasan:
          "Manusia paling termotivasi ketika mengerjakan sesuatu yang tepat di batas kemampuannya — tidak terlalu mudah (membosankan), tidak terlalu sulit (frustrasi). Desain kebiasaanmu untuk selalu berada di zona 'challenging tapi bisa'.",
      },
    ],
    preview30Hari: [
      {
        day: 1,
        action:
          "Pilih SATU kebiasaan yang ingin kamu bangun bulan ini. Tulis di kertas: (1) apa kebiasaannya, (2) kapan kamu akan melakukannya, (3) di mana. Spesifik: bukan 'olahraga lebih banyak', tapi 'push-up 10x setelah bangun tidur di kamar'.",
        micro:
          "Tulis satu kalimat: 'Saya adalah orang yang [identitas yang kamu inginkan]'. Simpan di Notes HP-mu.",
      },
      {
        day: 2,
        action:
          "Lakukan habit stacking. Identifikasi satu kebiasaan yang sudah kamu lakukan setiap hari tanpa berpikir (sikat gigi, sarapan, buka laptop kerja). Tempel kebiasaan baru-mu tepat setelah itu. Tulis formulanya: 'Setelah [kebiasaan lama], saya akan [kebiasaan baru]'.",
        micro:
          "Set pengingat di HP untuk waktu kebiasaan barumu. Beri label yang memotivasi, bukan generik.",
      },
      {
        day: 3,
        action:
          "Desain ulang satu sudut lingkunganmu. Kalau kebiasaan barumu adalah membaca, taruh buku di meja makan — bukan di rak. Kalau mau minum lebih banyak air, taruh botol di meja kerja dalam jangkauan tangan. Prinsipnya: buat kebiasaan baik jadi pilihan yang paling terlihat.",
        micro:
          "Sembunyikan atau hapus satu hal yang memicumu melakukan kebiasaan buruk yang ingin dihilangkan.",
      },
    ],
    ctaText: "Mulai Protokol 30 Hari Atomic Habits — Gratis",
  },
  {
    slug: "filosofi-teras",
    judul: "Filosofi Teras",
    penulis: "Henry Manampiring",
    deskripsiSingkat:
      "Panduan praktis filsafat Stoa yang ditulis untuk konteks Indonesia modern — cara menghadapi quarter-life crisis, tekanan sosial, dan ketidakpastian hidup dengan tenang.",
    poinUtama: [
      "Dikotomi kendali adalah inti Stoicism: ada hal yang bisa kamu kendalikan (pikiran, respons, usaha) dan yang tidak (pendapat orang, hasil, cuaca). Fokus hanya pada yang pertama.",
      "Emosi negatif bukan musuh — yang bermasalah adalah penilaian kita tentangnya. Marah bukan karena macet, tapi karena kamu menilai macet sebagai 'tidak seharusnya terjadi'.",
      "Premeditatio malorum: bayangkan skenario buruk sebelum terjadi. Bukan pesimisme — ini latihan mental supaya kamu tidak panik ketika hal buruk sungguh terjadi.",
      "Virtue (kebajikan) adalah satu-satunya kebaikan sejati. Kekayaan, popularitas, dan jabatan adalah 'preferred indifferents' — boleh dikejar tapi tidak menentukan hidupmu yang baik.",
      "Hidup sesuai alam berarti hidup sesuai kemampuan rasional manusia — membuat keputusan dengan pikiran jernih, bukan dikuasai emosi atau opini orang lain.",
    ],
    wawasan: [
      {
        judul: "Stoicism bukan tentang tidak merasa",
        penjelasan:
          "Banyak yang salah kaprah bahwa Stoic berarti dingin dan tidak punya perasaan. Justru sebaliknya — Stoicism mengajarkan bagaimana merasakan emosi tanpa dikuasai olehnya. Kamu boleh sedih, tapi tidak perlu larut. Kamu boleh marah, tapi tidak harus meledak.",
      },
      {
        judul: "Amor fati: cintai takdirmu",
        penjelasan:
          "Marcus Aurelius menulis bahwa tidak ada yang terjadi padamu — semua terjadi untukmu. Ini bukan pasif menerima kemalangan, tapi aktif mencari pelajaran di setiap kejadian, termasuk yang buruk. Bukan 'kenapa ini terjadi padaku' tapi 'apa yang bisa kupelajari dari ini'.",
      },
      {
        judul: "Memento mori sebagai alat produktivitas",
        penjelasan:
          "'Ingat bahwa kamu akan mati' bukan kalimat depresi — ini adalah pengingat untuk tidak membuang waktu pada hal yang tidak penting. Kalau kamu tahu hidupmu terbatas, apakah kamu masih akan menghabiskan energi untuk drama kantor yang tidak berarti?",
      },
      {
        judul: "Journal Stoic: alat refleksi harian",
        penjelasan:
          "Marcus Aurelius, salah satu kaisar terkuat dalam sejarah, menulis jurnal refleksi setiap hari. Bukan untuk dipublikasikan — untuk memeriksa apakah tindakannya hari itu sesuai dengan nilai-nilainya. Ini adalah praktek Stoicism yang paling mudah dimulai.",
      },
      {
        judul: "Relevansi untuk generasi sandwich Indonesia",
        penjelasan:
          "Henry Manampiring menulis buku ini sebagai respons langsung terhadap tekanan yang dirasakan generasi muda Indonesia: tuntutan keluarga, perbandingan sosial, ketidakpastian karir. Stoicism menawarkan framework yang tidak menghilangkan masalah tersebut, tapi mengubah cara kita meresponsnya.",
      },
    ],
    preview30Hari: [
      {
        day: 1,
        action:
          "Buat dua kolom di kertas atau Notes HP-mu. Kolom kiri: 'Yang bisa saya kendalikan'. Kolom kanan: 'Yang tidak bisa saya kendalikan'. Tulis semua kekhawatiran atau stres yang kamu rasakan minggu ini, lalu kategorikan ke dua kolom tersebut. Perhatikan berapa banyak energimu yang terpakai untuk kolom kanan.",
        micro:
          "Saat kamu merasa cemas atau marah hari ini, tanyakan satu pertanyaan: 'Apakah ini dalam kendali saya?'. Tidak perlu melakukan apapun — cukup tanyakan.",
      },
      {
        day: 2,
        action:
          "Praktikkan negative visualization selama 10 menit. Pilih satu hal yang sangat kamu syukuri (pekerjaan, hubungan, kesehatan). Bayangkan dengan detail jika hal itu hilang. Rasakan emosi yang muncul. Lalu kembalikan ke realita. Tujuannya: melatih rasa syukur yang lebih dalam, dan kesiapan mental menghadapi perubahan.",
        micro:
          "Sebelum tidur, tulis satu kalimat: 'Hari ini saya bersyukur karena...' — tapi spesifik, bukan generik.",
      },
      {
        day: 3,
        action:
          "Identifikasi satu emosi negatif yang sering muncul minggu ini (marah, cemas, iri, kecewa). Tulis: (1) apa pemicunya, (2) penilaian apa yang kamu buat tentang pemicu itu, (3) apakah penilaian itu akurat atau berlebihan? Stoicism mengajarkan bahwa emosi berasal dari penilaian, bukan dari kejadian.",
        micro:
          "Saat ada sesuatu yang membuatmu kesal, tambahkan kata 'tapi' setelahnya. 'Macet parah, tapi saya masih punya waktu untuk mendengarkan podcast.' Latihan sederhana mengubah framing.",
      },
    ],
    ctaText: "Mulai Protokol 30 Hari Filosofi Teras — Gratis",
  },
  // Tambahkan buku lain di sini dengan format yang sama...
  // Deep Work, Psychology of Money, Mindset, dll.
];

// Helper function untuk find by slug — dipakai di page.tsx
export function getRingkasanBySlug(slug: string): Ringkasan | undefined {
  return ringkasanData.find((r) => r.slug === slug);
}
