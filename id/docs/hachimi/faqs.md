# FAQ

## Bagaimana cara menggunakan mod lain bersama Hachimi?

Lihat opsi `load_libraries` di [halaman Konfigurasi](config). Perlu dicatat bahwa beberapa mod tidak akan berfungsi dengan metode ini karena memang tidak dirancang untuk dipakai bersamaan.

## Update baru saja selesai diinstal tapi kenapa semuanya masih belum diterjemahkan?

Terjemahan mungkin sudah terinstal, tapi game belum mencoba memuat terjemahan baru tersebut. Cukup pindah ke layar lain (yang memicu proses loading), maka kamu akan melihat terjemahan mulai muncul.

## Apakah saya bisa tetap bermain saat update sedang berlangsung?

Ya, sepenuhnya aman untuk tetap bermain ketika data terjemahan masih diperbarui. Tapi, perlu diketahui bahwa terjemahan akan nonaktif selama update dan akan hilang ketika kamu berpindah layar di dalam game. Terjemahan akan kembali setelah update selesai diinstal dan game mulai memuatnya (lihat penjelasan di atas).

## Saya tidak sengaja menutup game saat update sedang berjalan. Apakah semuanya rusak?

Tidak. Cukup buka kembali game dan akan ada permintaan untuk mengunduh ulang dari awal.

## Apa itu file `.tl_repo_cache` di folder Hachimi saya? Apakah bisa dimakan?

Tidak. File itu digunakan untuk melacak status terkini file terjemahan demi pembaruan berkala berikutnya. Jangan ubah secara manual atau hapus file tersebut.

## Apakah ada versi atau mod lain untuk perangkat Apple (iOS)?

Tidak. Perangkat Apple sangat terkunci rapat, sehingga sangat sulit untuk membuat atau memasang mod semacam ini.

## Bagaimana cara menghapus Hachimi?

Installer memiliki opsi uninstall. Jika kamu tidak lagi memilikinya, kamu bisa mengunduh versi terbaru dan menggunakannya.

## Apakah saya akan terkena ban karena menggunakan Hachimi? Apakah sudah pernah ada ban?

Hachimi dan alat serupa melanggar ketentuan layanan/*terms of services* (TOS). Kamu yang menanggung risikonya. Namun hal itu tidak mungkin terjadi, dan tidak ada ban terkait Hachimi atau alat terjemahan lain yang dilaporkan sejak 2022.

## Bisakah saya memainkan JP dan Global secara bersamaan?

Ya, tetapi kamu perlu menggunakan solusi tambahan jika memakai versi DMM. Lihat [langkah-langkah ini](troubleshooting.md#error-501).

## Apa perbedaan antara Mode *Update* Fisik?

Mode ini didefinisikan secara internal oleh game, dan tidak diimplementasikan oleh Hachimi. Sedikit yang diketahui tentangnya.

- `ModeNormal` adalah bawaan.
- `Mode60FPS` tampaknya memulihkan beberapa gerakan fisik saat *framerate* ditingkatkan, tetapi kadang masih agak bermasalah.
- Kedua mode `SkipFrame` tidak diketahui namun tampaknya rusak

## Bagaimana saya memperbarui di Android?

::: info
Menghapus game hanya diperlukan untuk instalasi pertama kali, bukan untuk pembaruan jenis apapun.
:::

### Game

Jika ada notifikasi di dalam game untuk memperbarui dari Play Store berarti kamu perlu memperbarui game itu sendiri dengan mengunduh paket instalasi terbaru. Kemudian kamu harus menginstalnya melalui UmaPatcher, yang secara otomatis akan menerapkan rilis Hachimi Edge terbaru yang tersedia.

Ikuti [panduan instalasi](getting-started.md#android-jp) mulai dari langkah ke-4.

### Hachimi

Ketika versi baru Hachimi Edge dirilis, kamu bisa memilih untuk menginstalnya agar mendapatkan fitur baru atau perbaikan. Kamu **tidak harus** melakukannya segera. Melakukan pembaruan ini memerlukan proses penambalan ulang (*re-patching*).

Ikuti [panduan instalasi](getting-started.md#android-jp) mulai dari langkah ke-5 hanya untuk menginstal ulang versi game saat ini, atau mulai dari langkah ke-4 jika kamu sudah tidak memiliki paket instalasi.

### UmaPatcher

Memperbarui UmaPatcher hanya diperlukan dalam kasus tertentu, seperti saat kamu menghadapi masalah instalasi. Tidak ada pengaruh apa pun di dalam game jika melakukan pembaruan ini."

1. Jika kamu belum pernah melakukannya, Pengaturan -> Ekspor *signing key*.
1. Uninstall UmaPatcher.
1. Ikuti [panduan instalasi](getting-started.md#android-jp) mulai dari langkah ke-3, sesuai kebutuhan di kasus yang kamu alami.

## Saya mematikan GUI/Overlay Hachimi, bagaimana cara menyalakannya kembali?

Pertama-tama, kemungkinan kamu melakukan ini sebagai solusi sementara di Android. Masalah tersebut sudah diperbaiki sejak v0.15.1, jadi pastikan kamu telah memperbarui ke Hachimi Edge terbaru.

Buka file konfigurasi Hachimi (`config.json`) dengan editor teks dan ubah nilai `disable_gui` dari `true` menjadi `false`, lalu mulai ulang game. File konfigurasi ini berada di folder `hachimi` dalam [folder instalasi game](faqs#bagaimana-cara-menemukan-folder-instalasi-game)

Jika kamu merasa tidak nyaman dengan cara ini atau mengalami masalah, aman untuk menghapus file konfigurasi tersebut. Hachimi akan membuat ulang file default.

## Bagaimana cara menemukan folder instalasi game?

**Steam**: Klik kanan di game Steam -> *Manage* -> *Browse local files*

**DMM**: Klik titik 3 di nama game di DMM -> 🛈 ikon -> 📁 ikon  

**Android**: Tidak bisa diakses, tapi beberapa data terdapat di `Android/media/jp.co.cygames.umamusume` (mungkin berbeda di setiap merek hp)
