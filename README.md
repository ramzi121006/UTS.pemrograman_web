# UTS.pemrograman_web

**NAMA                : Muhamad Valentino Ramzi**

**NIM                 : 312410454**

**KELAS               : TI.24.A.5**

**MATKUL              : PEMOGRAMAN WEB 1**

---

## Deskripsi singkat

Aplikasi web sederhana untuk mengelola pemesanan buku, lengkap dengan fitur login, dashboard, stok buku, checkout, history transaksi, dan tracking pengiriman.
Sistem ini dirancang menggunakan HTML, CSS, dan JavaScript murni (tanpa framework) agar mudah dipahami dan dijalankan di lingkungan lokal.

---

## Demo singkat (fitur utama)

- Login & Dashboard Ceria: Login demo, dilengkapi Modal Box, Validasi Form, dan Greeting Dinamis (waktu lokal).
- Katalog Dinamis: Tabel buku dimuat dari data JS (JS DOM), menampilkan Cover Buku dan Highlight Stok Rendah.
- Manajemen Stok: Fitur Tambah Stok Manual langsung ke dalam tabel.
- Checkout: Perhitungan Total Pembayaran dinamis berdasarkan kuantitas.
- Tracking Kreatif: Cek status pengiriman (Nomor DO) dengan visualisasi Progress Bar Dinamis.
- Styling Unik: Desain Pink Lucu yang modern, responsif, dan konsisten (termasuk penggunaan Emoji).

---

## Cara menjalankan (lokal)

- Struktur Folder: Pastikan Anda telah meng-clone atau mengunduh semua file proyek dengan struktur folder yang benar
- Buka Proyek: Buka folder utama proyek (UTS-Pemweb-Project/) di Visual Studio Code.
- Jalankan Live Server
  1. Klik kanan pada file index.html (halaman Login).
  2. Pilih opsi Open with Live Server.
- Akses Aplikasi: Browser Anda akan otomatis terbuka ke alamat lokal (biasanya http://127.0.0.1:5500/index.html).
- Gunakan Akun Demo: Anda bisa mencoba login menggunakan akun demo yang tersedia di js/data.js untuk mengakses Dashboard, Katalog, dan fitur lainnya.

---

## Struktur folder proyek

tugas-uts-web1/
├── assets/

│   └── logo.png (Opsional: untuk ikon atau logo)

├── css/

│   └── style.css (File styling utama)

├── img/

│   ├── bukul.png

│   ├── buku2.png

│   └── dst... (Folder untuk menyimpan gambar cover buku)

├── js/

│   ├── data.js (Sumber data (Array JSON) untuk katalog dan pengguna)

│   └── script.js (Logika utama, JS DOM, validasi, dan fungsi)

├── index.html (Halaman Login Utama)

├── dashboard.html (Halaman Menu Utama)

├── stok.html (Halaman Katalog/Stok Buku)

├── tracking.html (Halaman Cek Status Pengiriman)

└── checkout.html (Halaman Keranjang dan Pemesanan)

## penjelasan dari setiap file
1. Login

Sebagai gerbang utama sebelum mengakses sistem.

Memverifikasi email dan password pengguna dari file data.js.

Jika login berhasil → diarahkan ke halaman Dashboard.

Jika gagal → muncul notifikasi bahwa data tidak valid.

2. Dashboard

Berfungsi sebagai pusat informasi utama setelah pengguna berhasil login.

Menampilkan ringkasan data sistem, seperti jumlah buku, transaksi, dan pengiriman.

Menyediakan menu navigasi cepat ke halaman lain (Stok, Checkout, History, Tracking).

3. Stok Buku

Menampilkan daftar seluruh buku dari data.js dalam bentuk tabel.

Pengguna (admin) dapat menambahkan judul buku baru langsung melalui form.

Setelah ditambahkan, tabel akan otomatis terupdate tanpa perlu reload halaman.

Data berisi atribut: judul buku, penulis, stok, dan harga.

4. Checkout

Digunakan untuk melakukan pembelian buku.

Pengguna memilih buku dari daftar stok, lalu mengisi data pembeli dan alamat.

Sistem menampilkan total harga dan menyimpan data transaksi ke history.

Setelah checkout, stok buku berkurang sesuai jumlah pembelian.

5. History Transaksi

Menyimpan catatan transaksi pembelian buku yang sudah dilakukan.

Ditampilkan dalam bentuk tabel dengan informasi:

Nomor transaksi

Nama buku

Jumlah pembelian

Total harga

Status pembayaran

Tanggal transaksi

Membantu admin memantau aktivitas penjualan.

6. Tracking Pengiriman

Fitur untuk melacak status pengiriman buku setelah transaksi selesai.

Setiap pesanan memiliki nomor resi unik.

Menampilkan status pengiriman seperti:

“Dikemas”

“Dikirim”

“Dalam Perjalanan”

“Sampai Tujuan”

Dapat diakses oleh pembeli maupun admin.

## Teknologi yang Digunakan

- HTML5: Digunakan untuk struktur dasar dan konten semantik.
- CSS3: Digunakan untuk styling dan desain responsif, termasuk implementasi tema Pink Lucu dan Pseudo-elements (untuk emoji).
- avaScript (Vanilla JS): Digunakan untuk semua logika, manipulasi DOM, validasi form, pengolahan data tabel, dan interaksi UI (Alert, Modal, Greeting Dinamis).

## Kriteria Implementasi Proyek

- Struktur & Validitas: Memastikan HTML semantik dan struktur file modular.
- Gaya Antar Muka: Implementasi tema Pink Lucu yang konsisten dan responsif.
- avaScript DOM: Penggunaan JS untuk Validasi Form, Manipulasi Data Tabel, dan Interaksi UI Kreatif (Progress Bar, Modal Box, Alert Box).

## Link Youtube

[Tonton Video Presentasi UTS Pemrograman Web di YouTube](https://www.youtube.com/watch?v=sJ2yDwY6m0E) 
