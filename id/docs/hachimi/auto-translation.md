# Terjemahan Otomatis

Hachimi bisa secara otomatis menerjemahkan sebagian isi game melalui **Sugoi Offline Translator** atau server terjemahan lain yang kompatibel dan menggunakan API serupa (seperti [py3translationServer](https://github.com/gdiaz384/py3translationServer)).

### Apa artinya?

- Kamu akan mendapatkan mesin terjemahan untuk konten yang belum diterjemahkan.
- Terjemahan mesin akan digantikan dengan terjemahan asli begitu tersedia di repo terjemahan.

### Catatan

- Proses terjemahan berjalan secara sinkron; game akan *freeze* (berhenti sejenak) saat menunggu hasil terjemahan. Masalah ini akan berkurang seiring waktu karena semakin banyak konten diterjemahkan dan Hachimi bisa memuat ulang data yang sudah diterjemahkan.

## Cara Menggunakan

Buka **Editor Konfig** dan aktifkan salah satu opsi terjemahan otomatis (Terjemahkan otomatis cerita/UI).

::: PERHATIAN!
"Terjemahkan otomatis UI" umumnya tidak disarankan, terutama jika menggunakan penerjemah yang tidak memiliki cache internal.
:::

Kamu juga harus menjalankan program penerjemah bersamaan dengan game.

### Untuk Sugoi Offline Translator

Jalankan file **"Offline Translator" (.bat)** di dalam Sugoi Toolkit. Biarkan program penerjemah/jendela *command prompt* tetap terbuka agar Hachimi bisa menggunakannya (meskipun tidak akan menampilkan apa pun melalui jendela tersebut).

**"Terjemahkan otomatis UI" tidak disarankan dengan penerjemah ini.**

### Untuk py3translationServer

Dengan asumsi model sudah dikonfigurasi dengan benar, tidak ada pengaturan tambahan yang diperlukan. Cukup jalankan server dan seharusnya langsung berfungsi.

## URL Kustom

Jika server terjemahanmu berjalan di port berbeda atau di mesin lain, kamu mungkin ingin mengatur agar Hachimi terhubung ke alamat lain.

Untuk melakukannya, atur opsi `sugoi_url` secara manual di file konfigurasi. Contoh:

```json
"sugoi_url": "http://127.0.0.1:14366"
```

Secara default, nilai ini mungkin kosong atau diset ke `null` di file konfigurasi. Hal ini normal, dan Hachimi tetap akan terhubung ke `http://127.0.0.1:14366` jika tidak diatur secara manual.
