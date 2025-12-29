# Birthday Greeting Website 🎉

Sebuah website ucapan ulang tahun yang indah, berkesan, dan kreatif yang dibangun dengan React dan Tailwind CSS.

## Fitur Utama

### ✨ Efek Visual Memukau
- **Animasi Balon**: Balon-balon berwarna yang terbang ke atas
- **Bintang Berkelip**: Bintang-bintang yang berkilau di seluruh layar
- **Confetti Cannon**: Ledakan confetti yang mmeriah saat merayakan
- **Gradient Text**: Teks dengan gradient warna yang bergerak
- **Floating Effects**: Elemen-elemen yang melayang dengan smooth

### 🎨 Komponen Interaktif
1. **Hero Section**: Halaman sambutan yang menarik dengan pesan ucapan
2. **Birthday Card**: Kartu ucapan yang dapat dibuka dengan animasi 3D flip
3. **Gift Box**: Kotak hadiah yang dapat diklik untuk membuka
4. **Countdown Timer**: Hitung mundur menuju ulang tahun berikutnya
5. **Happiness Meter**: Meter kebahagiaan dengan animasi count-up
6. **Gallery**: Galeri dengan berbagai pilihan untuk merayakan

### 🎯 Fitur Tambahan
- Responsive design untuk semua ukuran layar
- Smooth animations dan transitions
- Interactive elements yang memberikan feedback visual
- Background music dan sound effects (dapat ditambahkan)
- Customizable messages dan nama

## Teknologi yang Digunakan

- **React 18.2**: Library UI modern
- **Tailwind CSS 3.3**: Utility-first CSS framework
- **Vite 5.0**: Fast build tool dan development server
- **Canvas Confetti**: Efek ledakan confetti yang spektakuler

## Cara Install & Menjalankan

### Prerequisites
- Node.js (v16 atau lebih tinggi)
- npm atau yarn

### Install Dependencies
```bash
cd birthday-greeting
npm install
```

### Development Server
```bash
npm run dev
```
Buka http://localhost:5173 di browser Anda

### Build untuk Production
```bash
npm run build
npm run preview
```

## Struktur File

```
birthday-greeting/
├── src/
│   ├── components/
│   │   ├── Cards.jsx          # Kartu ucapan dan kotak hadiah
│   │   ├── Confetti.jsx       # Efek confetti
│   │   ├── Countdown.jsx      # Timer dan statistik
│   │   ├── Effects.jsx        # Efek visual (balon, bintang)
│   │   ├── Footer.jsx         # Footer dengan pesan spesial
│   │   ├── Gallery.jsx        # Galeri komponen
│   │   └── Hero.jsx           # Halaman utama
│   ├── App.jsx                # Root component
│   ├── index.css              # Global styles
│   └── main.jsx               # Entry point
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.cjs
└── package.json
```

## Customization

### Mengubah Nama & Pesan
Edit file `src/components/Gallery.jsx`:
```jsx
const birthdays = [
  {
    name: 'Nama Orang Terkasih',
    message: 'Pesan ucapan Anda di sini...',
  },
];
```

### Mengubah Warna
Edit file `tailwind.config.js` untuk mengubah color scheme

### Menambah Sound Effect
1. Install package: `npm install howler`
2. Tambahkan audio di folder `public/audio/`
3. Gunakan di components sesuai kebutuhan

## Tips Personalisasi

1. **Ganti Nama**: Ubah nama pada components/Gallery.jsx
2. **Custom Colors**: Sesuaikan dengan tema favorit
3. **Tambah Foto**: Tambahkan foto di Gallery section
4. **Custom Message**: Buat pesan yang lebih personal
5. **Musik Latar**: Tambahkan lagu favorit si birthday person

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized animations dengan GPU acceleration
- Lazy loading untuk komponen
- Minimal bundle size dengan Vite
- Progressive enhancement

---

**Made with 💜 for celebrating special moments!**
