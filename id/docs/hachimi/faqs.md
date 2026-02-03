# FAQ

## Bagaimana cara menggunakan mod lain bersama Hachimi?

Lihat opsi `load_libraries` di [halaman Konfigurasi](/id/docs/hachimi/config). Perlu dicatat bahwa beberapa mod tidak akan berfungsi dengan metode ini karena memang tidak dirancang untuk dipakai bersamaan.

## Update baru saja selesai diinstal tapi kenapa semuanya masih belum diterjemahkan?

Terjemahan mungkin sudah terinstal, tapi game belum mencoba memuat terjemahan baru tersebut. Cukup pindah ke layar lain (yang memicu proses loading), maka kamu akan melihat terjemahan mulai muncul.

## Apakah saya bisa tetap bermain saat update sedang berlangsung?

Ya, sepenuhnya aman untuk tetap bermain ketika data terjemahan masih diperbarui. Tapi, perlu diketahui bahwa terjemahan akan nonaktif selama update dan akan hilang ketika kamu berpindah layar di dalam game. Terjemahan akan kembali setelah update selesai diinstal dan game mulai memuatnya (lihat penjelasan di atas).

## Saya tidak sengaja menutup game saat update sedang berjalan. Apakah semuanya rusak?

Tidak. Cukup buka kembali game dan akan ada permintaan untuk mengunduh ulang dari awal.

## Apa itu file `.tl_repo_cache` di folder Hachimi saya? Apakah bisa dimakan?

Tidak. File itu digunakan untuk melacak status terkini file terjemahan demi pembaruan inkremental berikutnya. Jangan ubah secara manual atau hapus file tersebut.

## Apakah ada versi atau mod lain untuk perangkat Apple (iOS)?

Tidak. Perangkat Apple sangat terkunci rapat, sehingga sangat sulit untuk membuat atau memasang mod semacam ini.

## Bagaimana cara menghapus Hachimi?

Installer memiliki opsi uninstall. Jika kamu tidak lagi memilikinya, kamu bisa mengunduh versi terbaru dan menggunakannya.

## Apakah saya akan terkena ban karena menggunakan Hachimi? Apakah sudah pernah ada ban?

Hachimi dan alat serupa melanggar ketentuan layanan/*terms of services* (TOS). Kamu yang menanggung risikonya. Namun hal itu tidak mungkin terjadi, dan tidak ada ban terkait Hachimi atau alat terjemahan lain yang dilaporkan sejak 2022.

## Bisakah saya memainkan JP dan Global secara bersamaan?

Ya, tetapi kamu perlu menggunakan solusi tambahan jika memakai versi DMM. Lihat [langkah-langkah ini](/id/docs/hachimi/troubleshooting.md#error-501).

## Apa perbedaan antara Mode Pembaruan Fisik?

Mode ini didefinisikan secara internal oleh game, dan tidak diimplementasikan oleh Hachimi. Sedikit yang diketahui tentangnya.

- `ModeNormal` adalah bawaan.
- `Mode60FPS` tampaknya memulihkan beberapa gerakan fisik saat *framerate* ditingkatkan, tetapi kadang masih agak bermasalah.
- Kedua mode `SkipFrame` tidak diketahui namun tampaknya rusak

## Bagaimana saya memperbarui di Android?

### Game / Hachimi

Ikuti [Langkah install](/id/docs/hachimi/getting-started.md#android) dari langkah ke-4.
Kamu tidak perlu mengimpor *key* lagi. Saat memperbarui Hachimi, kamu cukup menginstal ulang versi game saat ini jika masih memiliki filenya.

### UmaPatcher

1. Jika kamu belum pernah melakukannya, Pengaturan -> Ekspor *signing key*.
1. Uninstall UmaPatcher.
1. Unduh & install UmaPatcher terbaru.
1. Pengaturan -> Impor *signing key*.

## Saya mematikan GUI/Overlay Hachimi, bagaimana cara menyalakannya kembali?

Pertama-tama, kemungkinan kamu melakukan ini sebagai solusi sementara di Android. Masalah tersebut sudah diperbaiki sejak v0.15.1, jadi pastikan kamu telah memperbarui ke Hachimi Edge terbaru.

Buka file konfigurasi Hachimi (config.json) dengan editor teks dan ubah nilai `disable_gui` dari `true` menjadi `false`, lalu mulai ulang game. File konfigurasi ini berada di folder `hachimi` dalam folder instalasi game. Pada Android, lokasinya adalah `android/media/jp.co.cygames.umamusume` (bisa berbeda tergantung merek ponsel).

Jika kamu merasa tidak nyaman dengan ini atau mengalami masalah, aman juga untuk menghapus file konfigurasi tersebut. Hachimi akan membuat ulang file default
