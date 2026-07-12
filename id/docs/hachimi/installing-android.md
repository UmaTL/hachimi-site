# Panduan Instalasi (Android)

::: danger BAHAYA
Instalasi pada Android sangat rentan eror dan banyak kendala tak terduga. Bacalah halaman ini dengan cermat!
:::

Cara kerjanya adalah dengan memasang patch Hachimi Edge ke dalam file APK game.

Proses ini akan membuat dan menginstal sebuah **aplikasi baru yang terpisah**, dan inilah yang memicu sebagian besar kendala teknis.

Selain itu, banyak hal yang bisa berjalan tidak semestinya tergantung pada perangkat atau versi Android kamu. Selalu sertakan informasi tersebut saat meminta bantuan.

Hachimi Edge tidak mendukung versi Global di Android!

## ⚠️ Bahaya ⚠️

Jika kamu memiliki data yang tersimpan, setel dahulu **Link Data** atau **Cygames ID** sebelum menginstal versi yang di-*patch* untuk mentransfer kemajuan kamu karena login melalui akun Google Play sudah dinonaktifkan.

Jika kamu memasang game yang *belum di-patch*, **kamu harus menghapusnya terlebih dahulu**. Game yang di-*patch* nantinya bisa diperbarui tanpa harus menghapusnya.

Kamu tidak bisa menggunakan **Google Play Store** setelah game di-*patch*, termasuk pembelian. Cygames store seharusnya masih bisa.

## Menggunakan UmaPatcher Edge (disarankan)

::: tip
Pada perangkat Xiaomi tanpa HyperOS, disarankan menggunakan opsi Shizuku.
Kamu juga bisa coba nonaktifkan `Optimalisasi MIUI` sebelum melakukan instalasi, tetapi ini akan me-reset semua **semua izin aplikasi**.
:::

UmaPatcher adalah alat *installer* untuk membuat *patch* APK secara otomatis. Ini akan mengunduh versi terbaru Hachimi Edge ketika melakukan *patching*.

1. (*Hanya sekali*) Jika kamu menggunakan UmaPatcher yang non-Edge, buka laman pengaturan dan **ekspor *signing key*** di tempat yang aman, mungkin akan kamu gunakan kembali.
1. (*Hanya sekali*) Uninstall game asli **jika kamu belum pernah melakukan patch sebelumnya menggunakan salah satu versi UmaPatcher**.
1. Unduh dan instal [UmaPatcher Edge](https://github.com/kairusds/UmaPatcher-Edge/releases/latest/download/app-release.apk) versi terbaru.
1. Unduh file APK game. Format yang didukung berupa:
    - ***Split APK files*:**
    Sebuah file APK dasar dan salah satu dari *split config* APK (config.arm64_v8a, config.armeabi-v7a, dll.), pilih hanya satu *split config* yang sesuai dengan perangkat kamu.
    - ***Single APK file***: Sebuah file APK lengkap (fat APK). Sudah tidak digunakan lagi.
    - ***XAPK file***: Sebuah file ZIP yang berisi split APK, dengan ekstensi diganti menjadi XAPK.
    ::: warning PERINGATAN
    Jangan mengambil APK dari APKPure, karena bisa menimbulkan masalah. Sumber yang direkomendasikan adalah [Qoopy](https://qoopy.leadrdrk.com/), gunakan ID 6172.
    :::
1. Buka UmaPatcher.
1. (*Hanya sekali*) Jika bermigrasi atau sudah menghapus UmaPatcher, impor *signing key* yang telah di ekspor pada langkah pertama.
1. Pilih ***Normal install***. Pilih file yang telah kamu unduh.
1. Ketuk *Patch* untuk memulai *patching* dan proses instalasi.
1. (*Hanya sekali*) Setelah proses berhasil, jika kamu belum memiliki *key* yang tersimpan, ekspor *signing key* dari pengaturan UmaPatcher Edge.
Simpan dengan aman! Kamu mungkin akan membutuhkannya lagi nanti untuk memecahkan masalah.

⚠️ Kamu perlu mengulangi proses ini mulai dari langkah 4 setiap kali aplikasi diperbarui. Kamu **tidak perlu** menghapus game untuk melakukan pembaruan. [Info lanjut tentang pembaruan](faqs#bagaimana-cara-saya-memperbarui-di-android).

::: warning Jangan membagikan kunci *signing keys* kamu atau menggunakan APK yang sudah di-*patch* oleh orang lain!
*Key* ini bersifat unik untuk setiap perangkat dan tertulis ke dalam APK. Hal tersebut **pasti akan** menimbulkan masalah saat melakukan pembaruan.
:::

➡ Lanjutkan dengan [Setup Pertama Kali](getting-started#setup-pertama-kali).

::: details Menggunakan Shizuku (alternatif, mungkin mengaktifkan toko)
UmaPatcher Edge bisa diinstal dengan [Shizuku](https://github.com/RikkaApps/Shizuku/releases).
Fitur ini berfungsi mirip dengan “instal langsung tanpa root/*rootless direct install*” dan bisa mengatasi beberapa masalah instalasi. Jika kamu tidak melihat opsi ini, perbarui ke versi terbaru.

1. Pertama-tama, instal [Shizuku](https://github.com/RikkaApps/Shizuku/releases).
1. Ikuti [Panduan aktivasi Shizuku](https://shizuku.rikka.app/guide/setup/) untuk menyalakan Shizuku.
1. Ikuti panduan instal normal UmaPatcher Edge di atas, tetapi pilih **metode Shizuku** pada langkah ke-7, sekarang seharusnya akan menampilkan `available`.
1. Setelah selesai, disarankan untuk menghentikan Shizuku dan menonaktifkan kembali debugging nirkabel.
:::

::: details Patch tanpa uninstall + pembaruan toko (butuh root)
UmaPatcher menyertakan opsi instalasi root yang tidak mengharuskan kamu menghapus game atau mengotak-atik APK, sehingga kamu bisa memperbarui secara normal dari toko aplikasi mana pun.

Dengan game terpasang, ketuk kartu di bagian atas layar utama aplikasi untuk memilih aplikasi yang ingin kamu *patch* (jika diperlukan). Lalu pilih “*Direct install*” sebagai metode instalasi dan ketuk *Patch*. Tidak ada file input yang diperlukan.

Kamu **masih harus** melakukan *patch* ulang game dengan UmaPatcher setiap kali game diperbarui.
:::

## Instal Manual (tidak disarankan)

1. Bangun/*Build* atau unduh *library* yang sudah dibangun dari [halaman Rilis](https://github.com/kairusds/Hachimi-Edge/releases).
1. Ekstrak file dari APK game. Kamu mungkin akan menggunakan [apktool](https://apktool.org/) untuk ini.
1. Ubah nama file `libmain.so` di setiap folder di dalam `lib` ke `libmain_orig.so`.
1. Salin *library* proxy ke folder yang sesuai. (mis. `libmain-arm64-v8a.so` ke `lib/arm64-v8a`). Ubah nama mereka ke `libmain.so`.
1. *Build* file APK dan instal.

➡ Lanjutkan dengan [Setup Pertama Kali](getting-started#setup-pertama-kali).
