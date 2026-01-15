# Menerjemahkan

::: Tips — Jika kamu tiba di sini melalui tautan langsung, disarankan untuk membaca [panduan dari awal](welcome.md).
:::

Setelah kamu memahami dasar-dasar aset game dan bagaimana Hachimi menggunakannya, mari kita lihat bagaimana cara memulai proses penerjemahan.

## Peralatan (_Tools_)

Ada beberapa alat berbeda yang tersedia untuk membuat dan mengedit terjemahan.

### ZokuZoku

Dikembangkan oleh pencipta Hachimi, ini adalah yang paling mudah untuk mulai digunakan dan mendukung sebagian besar format Hachimi.

Namun, ia tidak lagi bisa mengedit cerita setelah pembaruan besar di server Jepang pada 24/09/2025, serta memiliki banyak bug dan masalah penggunaan yang belum terselesaikan dan saat ini tidak lagi dipelihara.

Lihat [panduan ZokuZoku](/id/docs/translation-guide/using-zokuzoku.md).

### ZokuZoku-Edge

Ini adalah _fork_ aktif komunitas dari ekstensi ZokuZoku asli. Tujuannya adalah untuk mengembalikan fungsi pengeditan sebelumnya, menambahkan peningkatan kualitas penggunaan, dan menyelesaikan masalah yang ditinggalkan oleh pengembang utama ZokuZoku.

Meskipun fork ini berfungsi, beberapa fitur mungkin tidak stabil.

Tautan: [Kode sumber](https://github.com/Mario0051/ZokuZoku), [_Extension Builder_ (Repositori belum resmi rilis)](https://github.com/tenshou170/ZokuZoku-Edge)

### _Tools_ lama UmaTL (_legacy_)

::: info
Sebuah pembaruan sedang dalam proses untuk mendukung semua bagian game dengan benar, beserta fitur-fitur baru. Setelah selesai, ini akan menjadi kumpulan alat utama.
:::

Ini adalah bagian dari patch terjemahan game paling awal, sehingga tidak secara langsung mendukung format Hachimi. Mereka juga sedikit kurang ramah pengguna.

Namun, masih bisa digunakan dengan bantuan beberapa skrip tambahan, dan sangat berguna untuk cerita, menyediakan lebih banyak fitur serta pengalaman yang lebih mulus.

Lihat [Panduan UmaTL](/id/docs/translation-guide/using-umatl.md).

### Hachimi _Tools_

Ini adalah kumpulan alat tambahan kecil yang berfokus terutama pada penanganan aset `textures` dan `uianimation`. Ia juga menyediakan beberapa fitur _random_ yang berguna.

Alat ini cukup teknis, sehingga diasumsikan pengguna memiliki pengetahuan yang memadai dan hanya menyertakan dokumentasi dasar dalam _readme_.

Seperti ZokuZoku, alat ini tidak lagi dipelihara dan berhenti berfungsi setelah pembaruan game.

Gunakan [Fork terpelihara ini](https://github.com/noccu/hachimi-tools) dengan dukungan yang telah diperbaiki dan fitur-fitur baru.

### Carotene _Tools_

Bagian dari patch Carotene yang lebih lama. Alat ini tidak lagi dipelihara dan tidak berfungsi dengan benar.

## Menangani terjemahan tertentu

### UI (_Localize / Hashed dicts_)

_Localize_ saat ini hanya didukung oleh [ZokuZoku](#zokuzoku).

_Hashed dicts_ tidak didukung oleh alat apa pun dan harus diedit secara manual. Kamu juga memerlukan cara untuk menghasilkan hash yang benar. [Alat ini](https://github.com/Hidden-is-fun/UmamusumeTextHashCalc/releases/tag/v0.1) adalah salah satu cara tersebut.

Kamu harus mengekspor file `localize_dict.json` dari game menggunakan menu Hachimi setelah pembaruan game. Aktifkan `translator mode` untuk melihat opsi tersebut.

### MDB

Di beberapa kasus, kamu masih harus menggunakan [ZokuZoku](#zokuzoku). Alat UmaTL bisa digunakan jika kamu tahu cara menggunakannya, dan sesekali memberikan keuntungan.

Perhatikan di dalam `text_data`, terdapat banyak kategori dan kadang-kadang kategori tersebut terduplikasi seluruhnya atau hanya sebagian. Kombinasi juga tersedia

### Dialog (Cerita / Balapan / _Dict_ aset lirik)

Kemungkinan ini adalah yang paling mudah untuk ditangani. Mereka sederhana, semua alat mendukung pratinjau audio dan percabangan pilihan (yang tidak rumit dalam sebagian besar kasus), dan tidak ada jebakan nyata. Jangan lupa untuk menerjemahkan judul.

Pembaruan game pada 2025/09/24 mengenkripsi baik aset maupun basis data `meta` yang mengindeksnya. ZokuZoku tidak mendukung hal ini.

Pilihan terbaik adalah menggunakan [_Tools_ lama UmaTL (_legacy_)](#tools-lama-umatl-legacy), yang juga memiliki beberapa fitur relevan yang tidak ditemukan di alat lain.

### Tekstur (termasuk Atlas)

Gunakan [_Tools spesial_](#hachimi-tools) untuk mengekstrak tekstur sekaligus membuat` diff.png` setelah pengeditan. Setelah diff dibuat, kamu juga bisa menggunakannya untuk pembaruan game dengan memanfaatkan alat yang tersedia.

Kamu akan memerlukan editor gambar untuk mengedit gambar. Perhatikan batas ukuran dalam game, karena Hachimi saat ini tidak mendukung perubahan tersebut.

Dokumentasi dasar disertakan bersama alat.

### Animasi UI

Gunakan [_Tools spesial_](#hachimi-tools) untuk mengekstrak dan memperbarui.
Dokumentasi dasar disertakan bersama alat.

Kebanyakan hanya akan menampilkan metadata untuk tekstur yang sesuai (lihat di atas). Itu adalah asset hash sumber untuk sistem proteksi.

Jika menyertakan teks, cukup edit teks di file hasil ekstraksi. Kamu juga bisa menyesuaikan ukuran dan posisinya. File-file ini akan diekstrak ke `flash` atau `flashcombine`. Pastikan untuk memeriksa keduanya.
Kamu harus menghapus semua bagian ([objek JSON](https://www.w3schools.com/js/js_json.asp)) yang tidak diedit.

Kamu akan sangat terbantu jika memiliki cara untuk memeriksa file `meta` (yang merupakan SQLite DB) dan mencari nama aset potensial. Ketika teks tidak ditemukan di tempat lain, kemungkinan besar teks tersebut “tersembunyi” di salah satu file ini. Hal ini umum terjadi pada beberapa bagian antarmuka (UI) skenario.


### Cuplikan video (_Movies_)

Aja sendiri, semoga beruntung.

## Pertimbangan lain

Hachimi berfungsi di Windows maupun Android. Kamu akan memerlukan akses ke file `meta` Android yang terbaru untuk menghasilkan hash bagi `sistem proteksi aset yang usang`. File tersebut tidak diperlukan untuk hal lain.

Tentu saja, kamu sama sekali tidak memerlukan alat. Kadang lebih mudah melakukan pengeditan langsung di file `.json`. Menelusuri file-file tersebut juga bisa menjadi cara praktis untuk menemukan sesuatu.
