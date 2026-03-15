# Penggunaan UmaTL

UmaTL sebenarnya adalah patch terjemahan pertama untuk game tersebut. Patch ini menyertakan alat pengeditan, yang sebagian besar masih bisa digunakan hingga sekarang.

## Instalasi

1. Instal [python 3.13 (64bit)](https://www.python.org/downloads/)
1. Instal [git](https://git-scm.com/)
1. Buat folder di mana kamu ingin menempatkan UmaTL (`D:\uma-tools\umatl` atau apapun)
1. Ekstrak konten [wheels.zip dari rilis](https://github.com/UmaTL/hachimi-tl-en/releases/tag/support) ke folder umatl\wheels.
1. Buka cmdline di folder dasar umatl tersebut lalu jalankan:
   ``` bat
   git clone https://github.com/noccu/umamusu-translate.git .
   py -m venv .venv
   .venv\Scripts\activate.bat
   py -m pip install -r src\requirements.txt --find-links=wheels/ --prefer-binary
   py -m pip install -r src\devreq.txt --find-links=wheels/ --prefer-binary
   ```

## Bahasa berbeda

Jika kamu membutuhkan font khusus untuk bahasa yang diinginkan, kamu harus mengganti font yang ada di `src\data` dan membuat Unity AssetBundle dengan font tersebut untuk digunakan di dalam game melalui Hachimi. Gunakan sumber terjemahan yang sudah ada sebagai referensi. Langkah ini mengharuskan kamu menginstal Unity Editor versi *full*, atau mencari alat pihak ketiga meskipun alat-alat tersebut biasanya kurang stabil.

UmaTL yang lama tidak dibuat dengan dukungan terjemahan multibahasa, sehingga beberapa hal mungkin tidak berfungsi dengan benar. Periksa `replacer.json` dan fungsi pemeriksa ejaan secara khusus saat kamu mengalami masalah.

## Penggunaan *tools*/alat

::: tip
Selalu aktifkan venv (run `.venv\Scripts\activate.bat` di cmdline) sebelum menggunakan alat-alat UmaTL.  
:::

1. Lihat [dokumen ini](https://github.com/noccu/umamusu-translate/blob/master/docs/id-structure.md) atau tanyakan sendiri untuk menemukan “target” yang ingin kamu terjemahkan.
   - Sebagian besar skrip menggunakan argumen yang sama `-set x`, `-group x`, dsb.
   - Kamu juga bisa menggunakan `-sid xx` untuk mengubah sekaligus.
   - Perhatikan argumen `-t x` untuk types! Nilainya akan menjadi `story` secara default.
1. Jalankan `src\extract.py -sid xxxxxx` untuk mengekstrak file, jika dibutuhkan.
   - Berhati-hatilah dengan argumen yang kamu gunakan. Skrip ini akan mengekstrak **"semuanya"** yang cocok, dan jika kamu membuat kesalahan, akan menyebabkan ratusan bahkan ribuan file tertulis ke penyimpanan kamu.
1. Jalankan: `py src\edit_story.py -sid xxxxxx` untuk membuka GUI untuk targetmu.

Jika kamu mengalami masalah dengan skrip apa pun, kamu bisa menjalankannya dengan `-h` untuk bantuan dasar.
Lihat [konversi](#konversi-ke-format-hachimi) tentang cara memperoleh file format Hachimi.

### Contoh target

- Cerita karakter Special Week: `-sid 041001`
- Semua interaksi beranda Maruzensky: `-t home -id 1004`

### Editor pintasan

| Pintasan                   | Keterangan                                                                   |
| -------------------------- | ---------------------------------------------------------------------------- |
| Ctrl+enter/Alt+down        | Blok selanjutnya                                                             |
| Alt+Up                     | Blok sebelumnya                                                              |
| Ctrl+Alt+down              | Chapter selanjutnya                                                          |
| Ctrl+Alt+Up                | Chapter sebelumnya                                                           |
| Alt+Right                  | Salin teks jepang ke *clipboard*                                             |
| Ctrl+s                     | Simpan file                                                                  |
| Ctrl+i/b                   | Miringkan/tebalkan pilihan                                                   |
| Ctrl+Shift+c               | Warnai pilihan (dengan warna terakhir, tambah Alt untuk memilih warna baru)  |
| (shift+)alt+f              | Jalankan blok dengan textprocess.py (shift = hapus semua *line breaks* dulu) |
| alt+x                      | Konversi poin kode sebelum penanda ke unicode (ketik poin kode, hit shortcut)|
| (shift+)ctrl+del/backspace | Hapus kata (shift = hapus baris)                                             |
| Alt+c                      | Buka/tutup pilihan                                                           |
| Ctrl+Alt+c                 | Buka/tutup daftar teks berwarna                                              |
| Ctrl+f                     | Buka pencarian (enter di kotak untuk mencari)                                |
| Tab (in text box)          | Beralih antara kotak teks & nama                                             |
| Ctrl+d                     | Nyalakan *raw*<->teks berformat                                              |
| Ctrl+shift+up/down         | Pindah baris atas/bawah                                                      |
| Ctrl+h                     | Dengar blok saat ini (game tidak diperlukan)                                 |
| Ctrl+space                 | Nyalakan *autocomplete* (bisa klik / kunci + enter untuk arahkan dan pilih)  |

### Pemeriksaan ejaan & Penyelesaian otomatis

Editor akan menampilkan garis merah bergelombang di bawah kata yang tidak dikenali. Klik kanan pada kata tersebut untuk mendapatkan saran. Nama karakter secara otomatis dimuat sebagai kata khusus melalui file `char-name.json`. Perbarui file tersebut jika diperlukan. *Dict* yang sama digunakan untuk keduanya, sehingga fitur `autocomplete` mendukung karakter.

### Warna

Teks berwarna apa pun bisa diklik kanan untuk menyimpan warna tersebut sebagai warna aktif yang digunakan dengan pintasan "*color selection*".

### Judul

Judul tidak selalu tersedia di dalam data aset, dan Editor mungkin tidak menampilkannya dengan benar. Jangan biarkan hal ini menghalangi kamu untuk mencari judul di tempat lain untuk diterjemahkan. Judul digunakan dalam beberapa skrip konversi.

## Konversi ke format Hachimi

::: tip
Saat bekerja di repositori terjemahan UmaTL, lebih disarankan untuk kontribusi Dialog ke repositori UmaTL yang lama, daripada menyumbangkan file yang sudah dikonversi ke format Hachimi.
:::

Untuk berkontribusi pada repositori berbasis Hachimi atau menguji terjemahan di dalam game, kamu memerlukan file dalam format yang benar. Kamu juga bisa menggunakan skrip `import.py` jika mau, tetapi hal itu tidak disarankan karena skrip tersebut memodifikasi file game asli (meskipun bisa dibalik)

Gunakan skrip `to_hachimi.py` dari [laman rilis ini](https://github.com/UmaTL/hachimi-tl-en/releases/tag/support) untuk mengkonversi ke format Hachimi dan test didalam game.  
Ingat untuk memuat ulang data lokalisasi di menu Hachimi jika kamu sedang masuk ke game.
