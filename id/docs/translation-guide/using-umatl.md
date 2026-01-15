# Penggunaan UmaTL
UmaTL sebenarnya adalah patch terjemahan pertama untuk game tersebut. Patch ini menyertakan alat pengeditan, yang sebagian besar masih bisa digunakan hingga sekarang.

## Instalasi

1. Install [python 3.13 (64bit)](https://www.python.org/downloads/)
1. Install [git](https://git-scm.com/)
1. Buat folder di mana kamu ingin menempatkan UmaTL (`D:\uma-tools\umatl` atau apapun)
1. Buka cmdline di folder tersebut lalu jalankan:
   ```
   git clone https://github.com/noccu/umamusu-translate.git .
   py -m venv .venv
   .venv\Scripts\activate.bat
   py -m pip install -r src\requirements.txt --find-links=wheels/ --prefer-binary
   py -m pip install -r src\devreq.txt --find-links=wheels/ --prefer-binary
   ```
1. Ekstrak konten [wheels.zip dari rilis](https://github.com/UmaTL/hachimi-tl-en/releases/tag/support) ke folder umatl\wheels.

## Bahasa Berbeda

Jika kamu membutuhkan font khusus untuk bahasa yang diinginkan, kamu harus mengganti font yang ada di `src\data` dan membuat Unity AssetBundle dengan font tersebut untuk digunakan di dalam game melalui Hachimi. Gunakan sumber terjemahan yang sudah ada sebagai referensi. Langkah ini mengharuskan kamu menginstal Unity Editor versi _full_, atau mencari alat pihak ketiga meskipun alat-alat tersebut biasanya kurang stabil.

UmaTL yang lama tidak dibuat dengan dukungan terjemahan multibahasa, sehingga beberapa hal mungkin tidak berfungsi dengan benar. Periksa replacer.json dan fungsi pemeriksa ejaan secara khusus saat kamu mengalami masalah.

## Penggunaan Alat

::: tip
Selalu aktifkan venv (run `.venv\Scripts\activate.bat` di cmdline) sebelum menggunakan alat-alat UmaTL.  
:::

1. Lihat [dokumen ini](https://github.com/noccu/umamusu-translate/blob/master/docs/id-structure.md) atau tanyakan sendiri untuk menemukan “target” yang ingin kamu terjemahkan.
   - Sebagian besar skrip menggunakan argumen yang sama `-set x`, `-group x`, dsb.
   - Kamu juga bisa menggunakan `-sid xx` untuk mengubah sekaligus.
   - Perhatikan argumen `-t x` untuk types! Nilainya akan menjadi `story` secara default.
1. Jalankan `src\extract.py -sid xxxxxx` untuk mengekstrak file, jika dibutuhkan.
   - Be careful with your arguments. The script will extract **everything** that matches and can lead to 100s if not 1000s of files being written if you make a mistake.
1. Run: `py src\edit_story.py -sid xxxxxx` to open the GUI for your targets.

Jika kamu mengalami masalah dengan skrip apa pun, kamu bisa menjalankannya dengan `-h` untuk bantuan dasar.
Lihat [konversi](#konversi-ke-format-hachimi) tentang cara memperoleh file format Hachimi.

### Contoh target

- Cerita karakter Special Week: `-sid 041001`
- Semua interaksi beranda Maruzensky: `-t home -id 1004`

### Editor pintasan

| Pintasan                   | Keterangan                                                                   |
| -------------------------- | ----------------------------------------------------------------------------- |
| Ctrl+enter/Alt+down        | Next block                                                                    |
| Alt+Up                     | Prev block                                                                    |
| Ctrl+Alt+down              | Next chapter                                                                  |
| Ctrl+Alt+Up                | Prev chapter                                                                  |
| Alt+Right                  | Copy Japanese text to clipboard                                               |
| Ctrl+s                     | Save file                                                                     |
| Ctrl+i/b                   | Italicize/bold selection                                                      |
| Ctrl+Shift+c               | Color selection (uses last color, add Alt to select a new color)              |
| (shift+)alt+f              | Run block through textprocess.py (shift = remove all line breaks first)       |
| alt+x                      | Convert code point before cursor to unicode (type code point, hit shortcut)   |
| (shift+)ctrl+del/backspace | Delete word (shift = delete line)                                             |
| Alt+c                      | Open/close choices                                                            |
| Ctrl+Alt+c                 | Open/close colored text list                                                  |
| Ctrl+f                     | Open search (enter in search box will search)                                 |
| Tab (in text box)          | Switch between text & name box                                                |
| Ctrl+d                     | toggle raw<->formatted text                                                   |
| Ctrl+shift+up/down         | move line up/down                                                             |
| Ctrl+h                     | listen to current block (game not needed)                                     |
| Ctrl+space                 | Activate autocomplete (Can click or use keys + enter to navigate and choose) |

### Pemeriksaan ejaan & Penyelesaian otomatis

Editor akan menampilkan garis merah bergelombang di bawah kata yang tidak dikenali. Klik kanan pada kata tersebut untuk mendapatkan saran. Nama karakter secara otomatis dimuat sebagai kata khusus melalui file `char-name.json`. Perbarui file tersebut jika diperlukan. Kamus yang sama digunakan untuk keduanya, sehingga fitur `autocomplete` mendukung karakter.


### Warna

Teks berwarna apa pun bisa diklik kanan untuk menyimpan warna tersebut sebagai warna aktif yang digunakan dengan pintasan "_color selection_".

### Judul

Judul tidak selalu tersedia di dalam data aset, dan Editor mungkin tidak menampilkannya dengan benar. Jangan biarkan hal ini menghalangi kamu untuk mencari judul di tempat lain untuk diterjemahkan. Judul digunakan dalam beberapa skrip konversi.

## Konversi ke format Hachimi

::: tip
Saat bekerja di repositori terjemahan UmaTL, lebih disarankan untuk kontribusi Dialog ke repositori UmaTL yang lama, daripada menyumbangkan file yang sudah dikonversi ke format Hachimi.
:::

Untuk berkontribusi pada repositori berbasis Hachimi atau menguji terjemahan di dalam game, kamu memerlukan file dalam format yang benar. Kamu juga bisa menggunakan skrip `import.py` jika mau, tetapi hal itu tidak disarankan karena skrip tersebut memodifikasi file game asli (meskipun bisa dibalik)


Gunakan skrip `to_hachimi.py` dari [laman rilis ini](https://github.com/UmaTL/hachimi-tl-en/releases/tag/support) untuk mengkonversi ke format Hachimi dan test didalam game.  
Ingat untuk memuat ulang data lokalisasi di menu Hachimi jika kamu sedang masuk ke game.