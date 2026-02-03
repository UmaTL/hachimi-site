# GUI Bawaan

GUI bawaan bisa digunakan untuk mengaktifkan beberapa fungsi dalam game dan mengubah konfigurasi.

![Tangkapan layar GUI](/assets/id/built-in-gui.webp)

## Membuka Menu

Menu bisa dibuka dengan menekan tombol atau kombinasi tombol. Ini berbeda untuk setiap platform:

- **Android:** Tombol Volume Atas + Volume Bawah
- **Windows:** Tombol panah kanan(\*)

**Catatan:** Saat menu atau dialog dari Hachimi terbuka, semua input dari sistem akan diblokir agar tidak masuk ke game. Kamu harus menutup semuanya untuk bisa mengendalikan game kembali.

(\*) Tombol ini bisa diubah. Lihat opsi `menu_open_key` di [halaman Konfigurasi](/id/docs/hachimi/config).

## Konfigurasi

- **Editor konfig:** Tempat untuk mengedit file konfigurasi di dalam game. Lihat halaman Konfigurasi untuk detail setiap opsi.
- **Muat ulang konfig:** Memuat ulang file konfigurasi dari penyimpanan. Ini dilakukan secara otomatis oleh editor konfigurasi.
- **Setup pertama kali:** Menjalankan wizard pengaturan awal. Kamu bisa mengubah repo terjemahan di sini.

## Grafik

Di sini kamu bisa mengubah opsi grafis secara *real-time*.

Perhatikan bahwa opsi ini tidak permanen dan akan direset saat game dimulai kembali. Untuk menerapkan opsi ini secara permanen, ubah langsung melalui Editor Konfig.

## Terjemahan

- **Muat ulang data lokalisasi:** Ditujukan untuk penerjemah. Akan memuat ulang file terjemahan dari disk.
- **Cek pembaruan:** Menjalankan pengecekan pembaruan data translasi.

## Zona Rawan

Opsi-opsi ini sebenarnya tidak terlalu berbahaya jika digunakan dengan benar; tapi justru karena itu diletakkan di bagian ini. **Jangan utak-atik jika kamu tidak tahu risikonya!.**

Cukup dengan peringatan, jika kamu tetap penasaran, berikut fungsinya dan hal yang harus dihindari:

- **Restart ringan:** Memicu sebuah error dalam game dan memaksa pengguna untuk mengonfirmasi restart, yang hanya akan mengembalikan game ke layar judul. Ini adalah cara cepat untuk menerapkan beberapa pengaturan grafis yang biasanya tidak berlaku sampai game benar‑benar ditutup dan dibuka kembali. **Tentu saja, jangan gunakan saat sedang bermain, karena tidak bisa dibatalkan.**
- **Buka browser in-game:** (hanya Android) Ini sebenarnya cukup aman digunakan, hanya akan membuka browser dalam game, yang bisa dipakai untuk menjelajahi web (~~atau main DOOM~~) tanpa keluar dari game. Secara default membuka Google, tapi bisa dikonfigurasi. Diletakkan di sini karena bisa mengganggu sistem dialog game. Jangan buka saat game sedang menampilkan prompt/dialog lain.
- **Atur UI game:** Mengaktifkan/nonaktifkan semua objek UI game yang sedang aktif. Objek yang dibuat setelah toggle diaktifkan tidak akan terpengaruh. Bisa saja mengembalikan status UI secara salah (misalnya mengaktifkan objek yang seharusnya mati), tapi umumnya tidak menimbulkan masalah besar.
