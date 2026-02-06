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

## Kompabilitas

⚠️ Harap cek sebelum memasangnya.

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

- ✅ - Sangat mendukung.
- ⚠️ - Bekerja, tetapi menyebabkan game gagal berjalan karena faktor eksternal.
- ❔ - Belum dicoba. Mungkin bekerja, tapi tidak dihitung.
- ❌ - Tidak mendukung.

## Petunjuk Instalasi

Ikuti panduan sesuai dengan perangkatmu dibawah, kemudian lanjutkan dengan [Setup Pertama Kali](#setup-pertama-kali).

## JP

### Windows (JP)

Mulai 24/09/2025, kamu harus menggunakan Hachimi Edge v0.14.2 atau yang lebih baru karena adanya pembaruan besar pada game.
Jika kamu mengalami masalah, silakan periksa bagian [pemecahan masalah](troubleshooting).

::: warning PERINGATAN
Proses instalasi DMM menggunakan pengalihan DotLocal DLL.
Hal ini tidak kompatibel dengan beberapa sistem *anti‑cheat* (seperti Vanguard yang digunakan di LoL/Valorant). Kamu harus menonaktifkannya setiap kali ingin memainkan game yang terdampak. Kamu bisa gunakan
[DotLocalToggle](https://github.com/LeadRDRK/DotLocalToggle/releases) untuk menyalakan/mematikannya dengan cepat. Jalankan hingga muncul pesan pengalihan DLL telah dinonaktifkan, lalu *restart* komputer kamu.  
Steam tidak terpengaruh.
:::

1. Unduh [Installer terbaru](https://github.com/kairusds/Hachimi-Edge/releases/latest/download/hachimi_installer.exe) dan jalankan.
1. Jika kamu menggunakan Hachimi non-Edge sebelumnya, harap *Uninstall* dahulu.
1. Pilih versi game kamu di kotak bawah.
1. Periksa apakah direktori instalasi sudah benar dan ubah jika diperlukan.
1. Klik *Install*.  
    - Saat instalasi pertama kali, Installer mungkin akan meminta kamu untuk mengaktifkan pengalihan DotLocal DLL. Tekan OK dan fitur tersebut akan diaktifkan. **Kamu harus melakukan *RESTART* (bukan *shutdown*) komputer setelah mengaktifkannya.**
<!-- Todo: show how to find the install dir -->

⚠️ Kamu harus mengulangi proses ini setelah "beberapa" pembaruan game (game tidak akan bisa dijalankan) karena file yang telah dimodifikasi akan terganti secara otomatis.

<details>
<summary class="collapsible-header-sub">Instal manual</summary>

::: tip
Hanya tambahkan ekstensi file jika kamu melihatnya pada file asli. Windows dapat menyembunyikan ekstensi tersebut, dan jika kamu mengganti namanya (dengan ekstensi ganda), hal itu akan merusak game. Ketentuan ini tidak berlaku untuk folder.
:::

#### Steam

1. Unduh `hachimi.dll` terbaru di [Laman rilis](https://github.com/kairusds/Hachimi-Edge/releases).
1. Ubah namanya menjadi `cri_mana_vpx.dll` kemudian pindahkan ke [folder instalasi game](faqs#bagaimana-cara-menemukan-folder-instalasi-game)
1. Unduh [Ferns' `FunnyHoney.exe`](https://codeberg.org/LeadRDRK/FunnyHoney).
1. Ubah namanya ke `UmamusumePrettyDerby_Jpn.exe` kemudian pindahkan ke folder instalasi game, timpa file yang aslinya.

#### DMM

1. Lihat bagian "*Configure the registry*" pada [artikel ini](https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-redirection#optional-configure-the-registry) untuk mengaktifkan pengalihan DLL. ***Restart*** komputer kamu setelah selesai.
1. Unduh `hachimi.dll` terbaru di [Laman rilis](https://github.com/kairusds/Hachimi-Edge/releases).
1. Di [folder instalasi game](faqs#bagaimana-cara-menemukan-folder-instalasi-game), buat folder baru bernama `umamusume.exe.local` dan pindahkan file DLL yang telah diunduh ke sana. Ubah namanya menjadi `UnityPlayer.dll`
1. Unduh `cellar.dll` terbaru di [laman rilis Cellar](https://github.com/Hachimi-Hachimi/Cellar/releases).
1. Pindahkan ke `umamusume.exe.local` dan ubah namanya menjadi `apphelp.dll`.

</details>
<details>
<summary class="collapsible-header-sub">Migrasi dari metode plugin shimming yang sudah usang.</summary>

Kamu harus menghapus Shinmy dengan bersih terlebih dahulu; pastikan program tersebut tidak sedang berjalan saat kamu menghapusnya karena bisa bertahan hingga 30 detik setelah DMM ditutup dan memulihkan dirinya sendiri. **Cara termudah adalah dengan menggunakan installer** (yang juga berfungsi sebagai uninstaller), sehingga semuanya akan dibersihkan dengan benar.

Setelah itu, kamu bisa menghapus Hachimi seperti biasa.
</details>

### Android (JP)

::: warning PERINGATAN
Melakukan patch pada game di Android akan menonaktifkan Google Play Store untuk game tersebut, termasuk pembelian. Kamu bisa mencoba menggunakan toko milik pengembang game.
:::

::: danger BAHAYA
Jika kamu sudah memiliki data game tersimpan, pastikan kamu telah menyiapkan Data Link atau Cygames ID sebelum menginstal versi patch untuk mentransfer progres kamu. Login melalui akun Google Play dinonaktifkan
:::

::: danger BAHAYA
Jika kamu memiliki game belum di patch yang terpasang, kamu harus menghapusnya terlebih dahulu. game yang sudah dipatch nantinya bisa diperbarui tanpa perlu dihapus.
:::

::: tip
Pada perangkat Xiaomi tanpa HyperOS, coba nonaktifkan MIUI Optimizations sebelum melakukan instalasi. Kamu juga bisa mencoba opsi Shizuku yang versi lebih bawah.
:::

1. Jika kamu menggunakan UmaPatcher yang non-Edge, buka laman pengaturan dan **ekspor *signing key*** di tempat yang aman, mungkin akan kamu gunakan kembali.
1. Uninstall game asli **jika kamu belum pernah melakukan patch sebelumnya menggunakan salah satu versi UmaPatcher**.
1. Unduh dan instal [UmaPatcher Edge](https://github.com/kairusds/UmaPatcher-Edge/releases/latest/download/app-release.apk) versi terbaru.
1. Siapkan paket instalasi untuk game yang berupa:
    - ***Split APK files*:**
    Sebuah file APK dasar dan salah satu dari *split config* APK (config.arm64_v8a, config.armeabi-v7a, dll.), pilih hanya satu *split config* yang sesuai dengan perangkat kamu.
    - ***Single APK file***: Sebuah file APK lengkap (fat APK).
    - ***XAPK file***: Sebuah file ZIP yang berisi split APK, dengan ekstensi diganti menjadi XAPK.
    ::: warning PERINGATAN
    Jangan mengambil APK dari APKPure, karena bisa menimbulkan masalah. Sumber yang direkomendasikan adalah [Qoopy](https://qoopy.leadrdrk.com/), gunakan ID 6172.
    :::
1. Buka UmaPatcher, impor *signing key* yang telah di ekspor jika diperlukan, dan pilih ***Normal install***. Pilih file yang telah kamu siapkan.
1. Ketuk *Patch* untuk memulai *patching* dan proses instalasi.
    - Jika instalasi gagal, kamu bisa mencoba metode instal dengan Shizuku di bawah.

⚠️ Kamu perlu mengulangi proses ini mulai dari langkah 4 setiap kali aplikasi diperbarui. Kamu **tidak perlu** menghapus game untuk melakukan pembaruan.

<details>
<summary class="collapsible-header-sub">Patch dengan Shizuku (alternatif, mungkin mengaktifkan toko)</summary>

UmaPatcher Edge bisa diinstal dengan [Shizuku](https://github.com/RikkaApps/Shizuku/releases).
Fitur ini berfungsi mirip dengan “*rootless direct install*” dan bisa mengatasi beberapa masalah instalasi. Jika kamu tidak melihat opsi ini, perbarui ke versi terbaru.

Tidak terbiasa? kamu perlu mengaktifkan beberapa hal:

1. Pertama-tama, instal [Shizuku](https://github.com/RikkaApps/Shizuku/releases).
1. Pergi ke `Pengaturan > Tentang ponsel` dan ketuk `Nomor versi (Build number)` 5 kali, sampai mendapatkan popup.
1. Cari dan buka pengaturan sistem `Opsi pengembang/developer`.
1. Nyalakan (`Opsi pengembang/developer`), kemudian cari dan nyalakan `Debugging nirkabel/wireless`.
    - Kamu mungkin perlu mengaktifkan `USB debugging` jika ini tidak berfungsi dengan sendirinya.
1. Ketuk nama pengaturan untuk membuka pengaturan debugging nirkabel secara detail.
1. Pilih `Sambungkan dengan kode penghubung` dan masukan kode ke notifikasi Shizuku.
1. Buka Shizuku dan nyalakan.
1. Sekarang opsi instalasi UmaPatcher Edge akan menampilkan metode Shizuku sebagai `available`.
1. Setelah selesai, disarankan untuk menghentikan Shizuku dan menonaktifkan debugging nirkabel kembali.

</details>

<details>
<summary class="collapsible-header-sub">Patch tanpa uninstall + pembaruan toko (butuh root)</summary>

UmaPatcher menyertakan opsi instalasi root yang tidak mengharuskan kamu menghapus game atau mengotak-atik APK, sehingga kamu bisa memperbarui secara normal dari toko aplikasi mana pun.

Dengan game terpasang, ketuk kartu di bagian atas layar utama patcher untuk memilih aplikasi yang ingin kamu patch (jika diperlukan). Lalu pilih “*Direct install*” sebagai metode instalasi dan ketuk Patch. Tidak diperlukan file input.

Kamu perlu melakukan patch ulang game dengan UmaPatcher setiap kali game diperbarui.
</details>

<details>
<summary class="collapsible-header-sub">Instal Manual (tidak disarankan)</summary>

1. Bangun/*Build* atau unduh *library* yang sudah dibangun dari [halaman Rilis](https://github.com/kairusds/Hachimi-Edge/releases).
1. Ekstrak file dari APK game. Kamu mungkin akan menggunakan [apktool](https://apktool.org/) untuk ini.
1. Ubah nama file `libmain.so` di setiap folder di dalam `lib` ke `libmain_orig.so`.
1. Salin *library* proxy ke folder yang sesuai. (mis. `libmain-arm64-v8a.so` ke `lib/arm64-v8a`). Ubah nama mereka ke `libmain.so`.
1. *Build* file APK dan instal.

</details>

## Global / TW / CN

Ikuti panduan sesuai dengan perangkatmu dibawah, kemudian lanjutkan dengan [Setup Pertama Kali](#setup-pertama-kali).

### Windows (Global)

Sejak 2025/11/11, Semua versi menggunakan rilis Hachimi Edge yang sama.

1. Jika kamu memiliki versi lama khusus `Hachimi 2020` yang terpasang, hapus instalasinya terlebih dahulu.
    - Kamu bisa menggunakan installer asli, atau [mengunduhnya disini](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases/download/v0.14.0-2deadd3/hachimi_installer.exe).
1. Ikuti [panduan JP](getting-started#windows-jp) dengan sedikit penyesuaian:
    - Pilih versi untuk Steam di menu *dropdown*.
    - Arahkan installer ke lokasi instalasi global
    (Default: `C:\Program Files (x86)\Steam\steamapps\common\UmamusumePrettyDerby`).

<details>
<summary class="collapsible-header-sub">Instal manual</summary>
Instalasi manual juga mudah, jika kamu lebih suka mengalami masalah.

::: tip
Hanya tambahkan ekstensi `.dll` saat mengganti nama file jika kamu melihatnya pada nama file asli. Jika tidak terlihat, berarti Windows sedang menyembunyikan ekstensi file tersebut; jika kamu tetap menambahkannya, nama file akan berakhir menjadi `.dll.dll` dan menyebabkan game tidak bisa dijalankan.
:::

Unduh `hachimi.dll` terbaru di [Laman rilis](https://github.com/kairusds/Hachimi-Edge/releases).
Ubah namanya menjadi `cri_mana_vpx.dll` kemudian pindahkan ke [folder instalasi game](faqs#bagaimana-cara-menemukan-folder-instalasi-game)
</details>

<details>
<summary class="collapsible-header-sub">Metode lama</summary>

::: warning PERINGATAN
Bagian ini bersifat historis dan hanya boleh digunakan jika versi game kamu belum diperbarui atau jika kamu ada kebutuhan khusus.
:::

1. Unduh `hachimi_installer.exe` terbaru dari [Laman rilis lama](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases).
1. Jalankan dan klik instal. Tidak perlu mengubah opsi apa pun jika kamu tidak mengerti maksud atau fungsinya.

<details>
<summary class="collapsible-header-sub">Instal manual metode lama</summary>

::: tip
Hanya tambahkan ekstensi `.dll` saat mengganti nama jika kamu melihatnya pada nama file asli. Jika tidak terlihat, berarti Windows sedang menyembunyikan ekstensi file tersebut; jika kamu tetap menambahkannya, nama file akan berakhir menjadi `.dll.dll` dan menyebabkan game tidak bisa dijalankan.
:::

1. Unduh `hachimi.dll` terbaru dari [Laman rilis lama](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases).
1. pindahkan ke [folder instalasi game](faqs#bagaimana-cara-menemukan-folder-instalasi-game)
1. Ubah namanya ke `winhttp.dll`, `version.dll` atau `opengl32.dll`.

</details>
</details>

### Android (Global)

::: warning PERINGATAN
Hachimi tidak bisa digunakan dengan versi ini tanpa root. Mengingat versi global di Android tidak didukung.
:::

::: danger BAHAYA
Sejak 2025/11/11, Versi Hachimi yang ditautkan di bawah kemungkinan besar akan gagal. Sebagai gantinya gunakan file dari [rilis Edge terbaru](https://github.com/kairusds/Hachimi-Edge/releases/latest). Status dukungan saat ini tidak pasti.
:::

### Zygisk

Unduh Zygisk zip terbaru dari [laman rilis](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases) dan instal menggunakan Magisk atau KernelSU (dengan Zygisk).

## Setup Pertama Kali

Saat meluncurkan game untuk pertama kali setelah menginstal Hachimi, kamu akan disambut dengan dialog berikut:

![First Time Setup](/assets/id/first-time-setup.webp)

::: warning PERINGATAN
Jika kamu tidak melihatnya setelah melakukan pembaruan ke Edge untuk pertama kali, bukalah melalui menu Hachimi dan selesaikan *setup*-nya. Jika kamu tidak melakukannya, terjemahan yang muncul akan menjadi usang dan dapat menyebabkan masalah tekstur yang rusak.
:::

::: info
Jika kamu tetap tidak melihatnya, berarti Hachimi tidak terpasang dengan benar. Harap baca panduan instalasi dengan seksama dan coba lagi, atau lihat di [Pemecahan masalah](troubleshooting)
:::

Cukup ikuti panduan yang ada, lalu ketuk Selesai untuk menyimpan konfigurasi kamu. Jika kamu memilih terjemahan, hal ini juga akan memulai pemeriksaan pembaruan dan meminta kamu untuk mengunduh terjemahan baru jika tersedia.

Kamu bisa kembali ke dialog ini nanti untuk mengubah sumber terjemahan melalui menu Hachimi.

::: tip
Jika kamu mengalami masalah dengan terjemahan, kamu bisa menonaktifkannya di `Editor konfig > Gameplay`, lalu muat ulang (*restart*) game-nya.
:::
