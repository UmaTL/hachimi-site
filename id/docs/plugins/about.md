---
title: Tentang
---

# Plugin <!-- markdownlint-disable-line MD025 -->

Hachimi mendukung sistem plugin yang memungkinkan para pengembang untuk memperluas fungsionalitasnya melalui pustaka dinamis (*dynamic libraries*). Plugin bisa melakukan hook ke dalam game, memodifikasi perilaku sistem, menambah elemen GUI, dan masih banyak lagi.

## Apa itu plugin?

Plugin merupakan berkas pustaka dinamis (file `.so` pada Android, file `.dll` pada Windows) yang terintegrasi dengan Hachimi Edge melalui API yang telah ditentukan. Plugin ini berjalan pada proses yang sama dengan game dan memiliki akses ke fitur-fitur canggih untuk memodifikasi perilaku game.

## Apa yang plugin bisa lakukan?

Plugin memiliki akses ke API komprehensif yang memungkinkan mereka untuk:

- ***Hook* dan *inspect* IL2CPP**: Mencegat (intercept) fungsi dan mengakses *class*, metode, serta *field* dari Unity IL2CPP.
- **Menambahkan Elemen GUI**: Mendaftarkan item menu, bagian (*section*), dan menampilkan notifikasi di dalam GUI bawaan Hachimi.
- **Memuat Android DEX**: Memuat dan mengeksekusi kode Java/Kotlin di Android (API v2+)
- **..dan masih banyak lagi**

## Aspek keamanan ⚠️

Jangan pernah menginstal plugin dari sumber yang tidak dikenal atau pengembang yang tidak tepercaya.
Plugin berjalan dengan akses penuh ke proses game. Plugin berbahaya bisa menyebabkan:

- Mencuri kredensial akun game dan token sesi.
- Memodifikasi data game dengan cara yang bisa mengakibatkan pemblokiran akun (*banned*).
- Menyebabkan game rusak (*crash*) atau korup.
- Mengirim data game kamu ke server eksternal.
- Mengeksekusi kode arbitrer (*arbitrary code*) dengan izin (*permissions*) game.

::: danger ⚠️ PERINGATAN KEAMANAN SERIUS
**Di Windows, plugin memiliki AKSES ADMINISTRATOR PENUH ke seluruh sistem kamu karena game berjalan dengan hak istimewa admin (*admin privileges*). Plugin tersebut bisa memasang malware, memodifikasi file sistem, mengakses semua data kamu, dll.**
:::

Sebelum memasang plugin, harap untuk:

- **Sumber terpercaya**: Hanya gunakan plugin dari pengembang (*developer*) yang kamu percayai.
- **Verifikasi komunitas**: Cek apakah plugin sudah di ulas (*review*) oleh para komunitas.
- **Resiko Pembaruan**: Plugin yang sebelumnya tepercaya bisa saja berubah menjadi berbahaya seiring berjalannya waktu.

Pengembang Hachimi Edge tidak bisa memverifikasi plugin pihak ketiga dan tidak bertanggung jawab atas masalah atau kerusakan apa pun yang disebabkan oleh penggunaan plugin tersebut.

## Plugin tersedia

Tunggu update selanjutnya
<!-- List plugins here. -->

## Langkah selanjutnya

- **Untuk Pengguna**: [Pelajari cara memasang plugin](/id/docs/plugins/installation.md).
- **Untuk Pengembang**: [Pelajari cara membuat plugin](/id/docs/plugins/development.md).
