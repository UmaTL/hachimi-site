# Memulai

<small>

Lihat halaman ini dari berbagai bahasa:  
[English](/docs/hachimi/getting-started.html) | [Tiếng Việt](/vi/docs/hachimi/getting-started.html) | [Deustch](/de/docs/hachimi/getting-started.html) | [简体中文](/zh-cn/docs/hachimi/getting-started.html) | [繁體中文](/zh-tw/docs/hachimi/getting-started.html) | [日本語](/ja/docs/hachimi/getting-started.html)

</small>

::: warning PERINGATAN
Proyek ini tidak sesuai dengan Ketentuan layanan/*Terms of Service* (TOS) dari game. Gunakan dengan penuh kesadaran akan risiko sendiri. Mohon distribusikan nama dan tautan dengan penuh tanggung jawab, dan hindari membagikannya di ruang publik yang bisa memicu perhatian developer.
:::

::: warning PERINGATAN
Sudah menggunakan Hachimi? kamu perlu beralih ke Hachimi Edge karena pembaruan besar game pada 24/09/2025 (JP) dan 11/11/2025 (Global)
:::

Silakan ikuti seluruh proses ini walaupun kamu sudah menggunakan Hachimi sebelumnya, mengingat ada beberapa perubahan pada Hachimi Edge. Jika kamu mendapat masalah, silakan periksa [pemecahan masalah](troubleshooting).

## Kompabilitas

Hachimi Edge mendukung Steam, DMM, dan versi android untuk server Jepang, dan versi steam untuk server Global.

::: details Detail

### Windows

| Versi | Mendukung |
| --- | :---: |
| JP (DMM) | ✅ |
| JP (Steam) | ✅ |
| KR | ❌ |
| Global | ✅ |
| Emulator (semua *region*) | ❌ |

### Android

| Versi | Instal Normal | Instal Langsung | Zygisk |
| --- | :---: | :---: | :---: |
| JP | ✅ | ✅ | ✅ |
| KR | ❌ | ❌ | ❌ |
| TW GP | ⚠️ | ⚠️ | ✅ |
| TW MC | ⚠️ | ⚠️ | ✅ |
| CN | ⚠️ | ⚠️ | ✅ |
| Global | ❌ | ❌ | ❌ |

<small>

- ✅ - Sangat mendukung.
- ⚠️ - Bekerja, tetapi menyebabkan game gagal berjalan karena faktor eksternal.
- ❔ - Belum dicoba. Mungkin bekerja, tapi tidak dihitung.
- ❌ - Tidak mendukung.

</small>

:::

## Petunjuk Instalasi

Hachimi Edge memiliki *installer* untuk Windows dan Android. Keduanya berbeda!
Silakan lihat panduan khusus dan lanjutkan dengan membaca halaman ini setelah menginstalnya.

[Untuk Windows](installing-windows)  
[Untuk Android](installing-android)

## Setup Pertama Kali

Saat meluncurkan game untuk pertama kali setelah menginstal Hachimi, kamu akan disambut dengan dialog berikut:

![First Time Setup](/assets/id/first-time-setup.webp)

::: details Saya tidak bisa menemukannya!
**Jika kamu bermigrasi ke Edge**:  
Kemungkinan besar kamu tidak *uninstall* terlebih dahulu. Hal ini menyisakan nilai-nilai lama pada konfigurasi. Buka pengaturan ini dari menu Hachimi Edge dan pastikan Meta URL menggunakan `https://gitlab.com/umatl/hachimi-meta/-/raw/main/meta.json` (Kecuali jika kamu **sengaja** menggunakan URL yang berbeda). Mengabaikan hal ini akan menyebabkan translasi menjadi usang dan memicu masalah tekstur rusak.

**Alternatif**:  
Jika Hachimi Edge tidak terinstal dengan benar. Silakan baca panduan instalasi dengan cermat dan coba lagi, atau lihat bagian [Pemecahan Masalah](troubleshooting).
:::

Ketuk Lanjut dan pilih sumber terjemahan yang diinginkan, lalu ketuk Selesai  untuk menyimpan konfigurasi dan memulai pemeriksaan pembaruan.

Jika sudah dipilih, Hachimi Edge sekarang akan meminta kamu untuk mengunduh pembaruan terjemahan baru, klik Ya untuk mulai mengunduh file.

Kamu bisa kembali ke dialog ini nanti untuk mengubah sumber terjemahan melalui menu Hachimi.

::: tip
Jika kamu mengalami masalah dengan terjemahan, kamu bisa menonaktifkannya di `Editor konfig > Gameplay`, lalu muat ulang (*restart*) game-nya.
:::

## Penggunaan

Konfigurasi dilakukan menggunakan [menu dalam game](built-in-gui) atau melalui [file konfigurasi](config).  
Hachimi Edge juga mendukung [Plugin](/id/docs/plugins/about).
