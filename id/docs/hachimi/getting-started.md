# Memulai

<small>

Lihat halaman ini dari berbagai bahasa:

[Tiếng Việt](/vi/docs/hachimi/getting-started.html) | [Deustch](/de/docs/hachimi/getting-started.html) | [简体中文](/zh-cn/docs/hachimi/getting-started.html) | [繁體中文](/zh-tw/docs/hachimi/getting-started.html) | [Bahasa Indonesia](/id/docs/hachimi/getting-started.html) | [日本語](/ja/docs/hachimi/getting-started.html)

</small>

::: **PERINGATAN!**
Proyek ini tidak sesuai dengan Ketentuan layanan/Terms of Service (TOS) dari game. Gunakan dengan penuh kesadaran akan risiko sendiri. Mohon distribusikan nama dan tautan dengan penuh tanggung jawab, dan hindari membagikannya di ruang publik yang bisa memicu perhatian developer.
:::

::: **PERHATIAN!**
Sudah menggunakan Hachimi? kamu perlu beralih ke Hachimi Edge karena pembaruan besar game pada 24/09/2025 (JP) dan 11/11/2025 (Global)
:::

## Kompabilitas

Harap cek kompabilitasnya dahulu.

### Windows

| Versi | Mendukung |
| --- | :---: |
| JP (DMM) | ✅ |
| JP (Steam) | ✅ |
| KR | ❌ |
| Global | ✅ |
| Emulator (semua *region*) | ❌ |

### Android

| Versi | Pasang Normal | Pasang Langsung | Zygisk |
| --- | :---: | :---: | :---: |
| JP | ✅ | ✅ | ✅ |
| KR | ❌ | ❌ | ❌ |
| TW GP | ⚠️ | ⚠️ | ✅ |
| TW MC | ⚠️ | ⚠️ | ✅ |
| CN | ⚠️ | ⚠️ | ✅ |
| Global | ⚠️ | ⚠️ | ❔ |

- ✅ - Sangat mendukung.
- ⚠️ - Bekerja, tetapi menyebabkan game gagal berjalan karena faktor eksternal.
- ❔ - Belum dicoba. Mungkin bekerja, tapi tidak dihitung.
- ❌ - Tidak mendukung.

## Petunjuk Instalasi

Ikuti panduan sesuai dengan perangkatmu dibawah, kemudian lanjutkan dengan [Setup Pertama Kali](#setup-pertama-kali).

<details>
<summary style="font-size: 20px; font-weight: 600;">JP</summary>

### Windows

::: PERINGATAN!
Proses instalasi DMM menggunakan pengalihan DotLocal DLL.
Hal ini tidak kompatibel dengan beberapa sistem *anti‑cheat* (seperti Vanguard yang digunakan di LoL/Valorant). Kamu harus menonaktifkannya setiap kali ingin memainkan game yang terdampak.
[Berikut ini](https://github.com/LeadRDRK/DotLocalToggle/releases) adalah program untuk menyalakan/mematikan fitur tersebut dengan cepat. Jalankan hingga muncul pesan pengalihan DLL telah dinonaktifkan, lalu *restart* komputer kamu. Steam tidak terpengaruh.
:::

1. Unduh [Installer terbaru](https://github.com/kairusds/Hachimi-Edge/releases/latest/download/hachimi_installer.exe) dan jalankan.
1. Jika kamu menggunakan Hachimi non-edge sebelumnya, harap *Uninstall* dahulu.
1. Pilih versi game kamu di kotak bawah.
1. Periksa apakah direktori instalasi sudah benar dan ubah jika diperlukan.
1. Klik *Install*.
<!-- Todo: show how to find the install dir -->

Saat instalasi pertama kali, Installer mungkin akan meminta kamu untuk mengaktifkan pengalihan DotLocal DLL. Tekan OK dan fitur tersebut akan diaktifkan. **Kamu harus melakukan *RESTART* (bukan *shutdown*) komputer setelah mengaktifkannya.**

<details>
<summary class="collapsible-header-sub">Install manual</summary>

::: Tip
Tambahkan ekstensi **file** (`.exe`, `.dll`) hanya saat kamu melihatnya di file asli. Jika tidak terlihat, berarti Windows disetel untuk menyembunyikannya, dan hasil ganti nama akan berakhir dengan `.exe.exe`, sehingga game menjadi rusak. Tidak berlaku untuk folder
:::

::: Tip
Panduan ini berdasarkan versi DMM. Jika kamu menggunakan Steam, ganti `umamusume.exe` dengan `UmamusumePrettyDerby.exe` dengan langkah‑langkah di bawah.
:::

1. Lihat bagian "Configure the registry" pada [artikel ini](https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-redirection#optional-configure-the-registry) untuk mengaktifkan pengalihan DLL. *Restart* komputer kamu setelah selesai.
1. Unduh `hachimi.dll` terbaru di [Laman rilis](https://github.com/kairusds/Hachimi-Edge/releases).
1. Di folder instalasi game, buat folder baru bernama `umamusume.exe.local` dan pindahkan file DLL yang telah diunduh ke sana. Ubah namanya menjadi `UnityPlayer.dll`
1. Unduh `cellar.dll` terbaru di [laman rilis Cellar](https://github.com/Hachimi-Hachimi/Cellar/releases).
1. Pindahkan ke `umamusume.exe.local` dan ubah namanya menjadi `apphelp.dll`.

</details>
<details>
<summary class="collapsible-header-sub">Migrasi dari metode plugin shimming yang sudah usang.</summary>

Kamu harus menghapus Shinmy dengan bersih terlebih dahulu; pastikan program tersebut tidak sedang berjalan saat kamu menghapusnya karena bisa bertahan hingga 30 detik setelah DMM ditutup dan memulihkan dirinya sendiri. **Cara termudah adalah dengan menggunakan installer** (yang juga berfungsi sebagai uninstaller), sehingga semuanya akan dibersihkan dengan benar.

Setelah itu, kamu bisa menghapus Hachimi seperti biasa.
</details>

## Android

::: peringatan
Melakukan patch pada game di Android akan menonaktifkan Google Play Store untuk game tersebut, termasuk pembelian. Kamu bisa mencoba menggunakan toko milik pengembang game.
:::

::: bahaya
Jika kamu sudah memiliki data simpanan, pastikan kamu telah menyiapkan Data Link atau Cygames ID sebelum menginstal versi patch untuk mentransfer progres kamu. Login melalui akun Google Play dinonaktifkan
:::

::: bahaya
Jika kamu memiliki game belum di patch yang terpasang, kamu harus menghapusnya terlebih dahulu. game yang sudah dipatch nantinya bisa diperbarui tanpa perlu dihapus.
:::

::: tip
Pada perangkat Xiaomi tanpa HyperOS, coba nonaktifkan MIUI Optimizations sebelum melakukan instalasi. Kamu juga bisa mencoba opsi Shizuku yang ada lebih bawah.
:::

1. Jika kamu menggunakan UmaPatcher, buka laman pengaturan dan **ekspor *signing key* di tempat yang aman**.
1. Uninstall game asli **jika kamu belum pernah melakukan patch sebelumnya menggunakan salah satu versi UmaPatcher**.
1. Unduh dan install [UmaPatcher Edge](https://github.com/kairusds/UmaPatcher-Edge/releases/latest/download/app-release.apk) versi terbaru.
1. Siapkan paket instalasi untuk game yang berupa:
    - ***Split APK files*:**
    This is currently only used by the JP version.
    Sebuah file APK dasar dan salah satu dari *split config* APK (config.arm64_v8a, config.armeabi-v7a, dll.), pilih hanya satu *split config* yang sesuai dengan perangkat kamu. Saat ini hanya digunakan oleh versi JP.
    - ***Single APK file***: Sebuah file APK lengkap (fat APK).
    - ***XAPK file***: Sebuah file ZIP yang berisi split APK, dengan ekstensi diganti menjadi XAPK.
    ::: peringatan
    Jangan mengambil APK dari APKPure, karena bisa menimbulkan masalah. Sumber yang direkomendasikan adalah [Qoopy](https://qoopy.leadrdrk.com/), gunakan ID 6172.
    :::
1. Buka UmaPatcher, impor *signing key* yang telah di ekspor jika diperlukan, dan pilih ***Normal install***. Pilih file yang telah kamu siapkan.
1. Ketuk *Patch* untuk memulai *patching* dan proses instalasi.
    - Jika instalasi gagal, kamu bisa mencoba metode install dengan Shizuku di bawah.

⚠️ Kamu perlu mengulangi proses ini mulai dari langkah 4 setiap kali aplikasi diperbarui. Kamu **tidak perlu** menghapus game untuk melakukan pembaruan.

<details>
<summary class="collapsible-header-sub">Patch dengan Shizuku (alternatif, mungkin mengaktifkan toko)</summary>

UmaPatcher Edge bisa diinstal dengan [Shizuku](https://github.com/RikkaApps/Shizuku/releases).
Fitur ini berfungsi mirip dengan “*rootless direct install*” dan bisa mengatasi beberapa masalah instalasi. Jika kamu tidak melihat opsi ini, perbarui ke versi terbaru.

Tidak terbiasa? kamu perlu mengaktifkan beberapa hal:

1. Pertama-tama, install [Shizuku](https://github.com/RikkaApps/Shizuku/releases).
1. Pergi ke `Pengaturan > Tentang ponsel` dan ketuk `Nomor versi (Build number)` 5 kali, sampai mendapatkan popup.
1. Cari dan buka pengaturan sistem `Opsi pengembang/developer`.
1. Nyalakan (`Opsi pengembang/developer`), kemudian cari dan nyalakan `Debugging nirkabel/wireless`.
    - Kamu mungkin perlu mengaktifkan `USB debugging` jika ini tidak berfungsi dengan sendirinya.
1. Ketuk nama pengaturan untuk membuka pengaturan debugging nirkabel secara detail.
1. Pilih `Sambungkan dengan kode penghubung` dan masukan kode ke notifikasi Shizuku.
1. Buka Shizuku dan nyalakan.
1. Sekarang opsi instalasi Umapatcher Edge akan menampilkan metode Shizuku sebagai `available`.
1. Setelah selesai, disarankan untuk menghentikan Shizuku dan menonaktifkan debugging nirkabel kembali.

</details>

<details>
<summary class="collapsible-header-sub">Patch tanpa uninstall + pembaruan toko (butuh root)</summary>

UmaPatcher menyertakan opsi instalasi root yang tidak mengharuskan kamu menghapus game atau mengotak-atik APK, sehingga kamu bisa memperbarui secara normal dari toko aplikasi mana pun.

Dengan game terpasang, ketuk kartu di bagian atas layar utama patcher untuk memilih aplikasi yang ingin kamu patch (jika diperlukan). Lalu pilih “*Direct install*” sebagai metode instalasi dan ketuk Patch. Tidak diperlukan file input.

Kamu perlu melakukan patch ulang game dengan UmaPatcher setiap kali game diperbarui.
</details>

<details>
<summary class="collapsible-header-sub">Install Manual (tidak disarankan)</summary>

1. Bangun/*Build* atau unduh *library* yang sudah dibangun dari [halaman Rilis](https://github.com/kairusds/Hachimi-Edge/releases).
1. Ekstrak file dari APK game. Kamu mungkin akan menggunakan [apktool](https://apktool.org/) for this.
1. Ubah nama file `libmain.so` di setiap folder di dalam `lib` ke `libmain_orig.so`.
1. Salin *library* proxy ke folder yang sesuai. (misal `libmain-arm64-v8a.so` ke `lib/arm64-v8a`). Ubah nama mereka ke `libmain.so`.
1. *Build* file APK dan install.

</details>

</details>

<details>
<summary style="font-size: 20px; font-weight: 600;">Global / TW / CN</summary>
Ikuti panduan untuk platform kamu di bawah ini, lalu lanjutkan dengan Setup pertama kali.

## Windows

Sejak 2025/11/11, Semua versi menggunakan rilis Hachimi Edge yang sama.

1. Jika kamu memiliki versi lama khusus `Hachimi 2020` yang terpasang, hapus instalasinya terlebih dahulu.
    - Kamu bisa menggunakan installer asli, atau mengambilnya [disini](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases/download/v0.14.0-2deadd3/hachimi_installer.exe).
1. Ikuti Panduan untuk JP dengan sedikit penyesuaian:
    - Pilih versi untuk Steam di menu *dropdown*.
    - Arahkan installer ke lokasi instalasi global

    (Default: `C:\Program Files (x86)\Steam\steamapps\common\UmamusumePrettyDerby`).

<details>
<summary class="collapsible-header-sub">Install manual</summary>
Instalasi manual juga mudah, jika kamu lebih suka mengalami masalah.
</details>

## Android

::: peringatan
Hachimi tidak bisa digunakan dengan versi ini tanpa root. Mengingat versi global di Android tidak didukung.
:::

::: danger
Sejak 2025/11/11, Versi Hachimi yang ditautkan di bawah kemungkinan besar akan gagal. Sebagai gantinya gunakan file dari [rilis Edge terbaru](https://github.com/kairusds/Hachimi-Edge/releases/latest). Status dukungan saat ini tidak pasti.
:::

#### Zygisk

Unduh Zygisk zip terbaru dari [laman rilis](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases) dan install menggunakan Magisk atau KernelSU (dengan Zygisk).

</details>

## Setup Pertama Kali

Saat meluncurkan game untuk pertama kali setelah menginstal Hachimi, kamu akan disambut dengan dialog berikut:

![First Time Setup](/assets/id/first-time-setup.webp)

::: Peringatan
Jika kamu tidak melihatnya setelah memperbarui ke Edge untuk pertama kali, buka dari menu Hachimi dan selesaikan proses pengaturannya. Jika tidak, terjemahan akan menjadi usang dan bisa menyebabkan masalah tekstur yang rusak
:::

::: Info
Jika kamu tetap tidak melihatnya, berarti Hachimi tidak terpasang dengan benar. Harap baca panduan instalasi dengan seksama dan coba lagi, atau lihat di [Permasalahan](/id/docs/hachimi/troubleshooting.md)
:::

Ketuk `Lanjut` dan pilih sumber terjemahan yang kamu inginkan, lalu ketuk `simpan` untuk menyimpan konfigurasi dan memulai pemeriksaan pembaruan.

Jika dipilih, Hachimi akan meminta kamu untuk mengunduh pembaruan terjemahan baru. Klik `Ya` untuk mulai mengunduh file.

Kamu bisa kembali ke dialog ini nanti untuk mengubah sumber terjemahan melalui menu Hachimi.
