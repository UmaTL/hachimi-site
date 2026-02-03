# Permasalahan

[[toc]]

## General

### Muncul pesan "*Communication error*" saat mencoba memasuki game

- Setelah diluncurkan, sebagian besar pengguna tidak memerlukan VPN untuk terhubung ke game itu sendiri, dan justru bisa menimbulkan masalah. Pastikan kamu telah mematikannya atau gunakan *split tunneling* (jika didukung).
 **Di beberapa wilayah, kamu *"harus"* menggunakan VPN untuk terhubung**.
  - Kamu bisa cek dengan mengakses [website API resmi](https://api-umamusume.cygames.jp). Jika kamu mendapat  `404 Not Found`, kamu perlu VPN. Jika muncul `Access Denied` berarti kamu bisa terhubung.
  - Lihat [Panduan ini](https://gametora.com/umamusume/playing-on-dmm) untuk cara menggunakan VPN, dan [Panduan ini](https://docs.google.com/document/d/18m9wHT4_AIh5ePKSo_ZYH9nSgNh492YQx76bIxmgqyc/edit?tab=t.0#heading=h.7cq4imx1gkqf) untuk solusi alternatif VPN.
- Jika ada 2 versi game yang terpasang **Steam Global** dan **DMM Jepang** , Coba langkah‑langkah untuk [masalah Error 501](#error-501).

### Fisik (Rambut, pakaian, dll.) terasa kaku saat berjalan pada 60+ FPS

Ubah pengaturan "Mode update fisik" menjadi "Mode60FPS". Pengaturan ini tersedia di Editor konfig pada tab "Game".

### Tekstur atau teks yang rusak/berantakan

::: Tip
Jika kamu memainkan versi Global, mungkin kamu secara tidak sengaja memasang terjemahan yang tidak dibuat khusus untuk Global.
Untuk memperbaikinya, buka menu Hachimi, jalankan `Setup pertama kali` untuk memilih sumber yang kompatibel atau tidak memilih apa pun, lalu *restart* game
:::

Hal ini terjadi karena ada ketidaksesuaian antara tekstur sprite game dengan tekstur hasil terjemahan. Alasan yang paling mungkin adalah game baru saja diperbarui dan mengubah beberapa sprite, biasanya yang bertipe `atlas`.

1. Cobalah memperbarui terjemahan dari menu. Jika pembaruan ditemukan, *restart* game setelah selesai.
    - Di Android/beberapa perangkat, kamu "mungkin" perlu menghapus folder `atlas` agar pembaruan bisa berjalan dengan benar.
1. Jika tidak ditemukan pembaruan, berarti sumber terjemahan kamu sudah usang. Tunggu pembaruan, atau periksa langsung ke sumbernya
    - <small>Jika waktunya sudah mendekati pembaruan game, para pengelola kemungkinan besar sedang mengerjakannya. Mohon periksa terlebih dahulu apakah mereka sudah mengetahuinya sebelum menghubungi.</small>
1. Sumber terjemahan kamu mungkin sepenuhnya tidak aktif. Ini berarti kamu masih menggunakan sumber lama dari Hachimi asli. Pastikan kamu menggunakan Hachimi Edge, lalu buka menunya dan jalankan kembali `Setup pertama kali`.
1. Daftar sumber itu sendiri bisa saja sudah usang, terutama jika kamu melakukan *upgrade* langsung dari Hachimi lama. kamu bisa menggunakan `Kembalikan semula` untuk mengatur ulang ke versi terbaru yang di-*bundle*.
    - ⚠️ Peringatan: ini akan me-*reset* semua pengaturan.  

Jika tidak ada sumber aktif untuk bahasa yang kamu inginkan, kamu bisa membuka `Menu -> Editor konfig -> Matikan translasi` jika diperlukan.

### Ada yang belum diterjemahkan

Terjemahan disediakan oleh para relawan di komunitas yang meluangkan waktu mereka. Banyak hal yang belum selesai. Periksa sumber terjemahan pilihan kamu dan cobalah untuk mendukung para penerjemahnya.

### Lirik berganti bahasa secara acak

~~Sayangnya, ini adalah bug yang belum terpecahkan akibat pembaruan game. Kami sedang mengerjakannya.~~
Bug ini telah diperbaiki. Perbarui Hachimi ke v0.15.1 atau yang lebih baru.

### Game tidak bisa dimuat saat melewati layar pembuka

Jika game `macet/stuck` di layar pembuka, lihat [Error 501](#error-501).  
Jika kamu bisa melihat layar pembuka tetapi game *crash* setelahnya, lihat [Game tidak mau mulai setelah menginstal Hachimi.](#game-tidak-mau-mulai-setelah-menginstal-hachimi).

### Latar belakang dalam game mengecil / ada garis putih di tepi

Buka menu Hachimi -> Editor konfig dan reset `kelipatan resolusi virtual` ke 1.
Jika masih tidak membantu, coba sesuaikan sampai terlihat baik.

### Masalah saya tidak tercantum di halaman ini

Copot Hachimi menggunakan installer. Cobalah gunakan installer yang sama dengan versi saat ini, tetapi versi terbaru juga seharusnya berfungsi dengan baik.
Jika kamu memiliki beberapa versi game terpasang, pastikan kamu menghapus dari jalur yang benar. Lalu pasang kembali Hachimi Edge terbaru.
Jika itu tidak berhasil, kamu bisa bertanya di kanal #help pada [Discord Hachimi](https://discord.gg/hachimimod) dan jelaskan dengan jelas masalah kamu serta apa yang sudah kamu coba.

## Windows

### Runtime error saat memulai

Artinya kamu menggunakan versi Hachimi lama yang rusak setelah pembaruan game pada 2025/09/24 (JP) dan 2025/11/11 (Global).
[Install Hachimi Edge](getting-started.md).

Jika kamu sudah menggunakan Edge, coba install ulang ke versi terbaru.

### Game tidak mau mulai setelah menginstal Hachimi

::: peringatan
Beberapa kernel-level anti-cheat (seperti Vanguard, yang digunakan di Valorant dan League of Legends) mencegah Hachimi meluncurkan game dengan benar. Pastikan mereka tidak berjalan di komputer kamu, lalu coba lagi.
:::

- Pastikan kamu menginstal versi Hachimi yang benar untuk versi game kamu (Jepang atau lainnya). Kamu bisa menemukan yang tepat di laman [Memulai](getting-started.md).
- Mulai ulang komputer kamu setelah installer mengaktifkan pengalihan DotLocal.  
  **Klik "Restart" Di menu *shutdown*, jangan hanya mematikan lalu menyalakannya lagi..**
- Jika kamu menggunakan DMM, coba mulai ulang DMM Launcher atau paksa agar selalu *"run as administrator"*.
- Jika kamu menggunakan Steam, pembaruan game dapat mengganti beberapa file yang telah dimodifikasi. Instal ulang Hachimi menggunakan installer
- Buka folder instalasi game, klik kanan file exe game, buka `Properties`, lalu coba satu atau lebih opsi berikut secara berurutan:
  - Nyalakan `Disable fullscreen optimizations` dibawah tab *Compatibility*.
  - Buka `Change high DPI settings`, Nyalakan `High DPI scaling override`, dan atur ke `Application`.
- Buka `Windows Settings → Display → Graphics`, masukkan file exe game disana, dan centang `Don't use optimizations for windowed games` di opsinya.

<!-- 
    TODO: add more details about weird edge cases like old unsupported versions of CarrotJuicer?
-->

### Installer: "Code execution cannot proceed / VCRUNTIME" error

Install [VC++ redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) terbaru sesuai dengan arsitektur perangkat kamu. Jika kamu tidak yakin, 99% kemungkinan itu `x64`.

### Steam Global dan JP: masalah dengan GUI/overlay

Overlay Steam kadang bisa mengganggu overlay Hachimi. Nonaktifkan salah satunya (disarankan Steam).

Untuk menonaktifkan Hachimi: buka menu Hachimi dan centang kotak "Matikan overlay (GUI)" di tab "Umum", tekan simpan , lalu mulai ulang game.
Jika kamu ingin mengaktifkan kembali overlay Hachimi, buka file konfigurasi Hachimi (config.json) dengan editor teks dan ubah nilai `disable_gui` dari `true`menjadi `false`, kemudian mulai ulang game. File konfigurasi ini terletak di folder hachimi dalam folder instalasi game.

### Steam Global: Macet di layar awal

Tampaknya ini merupakan bug pada game itu sendiri, yang dipicu lebih mudah oleh Hachimi. Gunakan `alt + enter` untuk beralih antara layar penuh dan mode jendela. Seharusnya memungkinkan kamu untuk melanjutkan. Perbaikan resmi kemungkinan akan segera hadir.

### DMM: Input terdeteksi di posisi yang salah pada layar setelah jendela diubah ukurannya

Ini adalah masalah yang sudah diketahui pada Hachimi di versi game DMM Jepang (perbaikan segera hadir™). Untuk saat ini, jangan ubah ukuran jendela.

### DMM: Tidak bisa memainkan game tertentu setelah menginstal Hachimi

Versi Hachimi untuk game DMM Jepang menggunakan pengalihan DotLocal DLL untuk memuat dan tidak disukai oleh beberapa sistem anti-cheat (seperti Vanguard, yang digunakan di Valorant dan League of Legends). Kamu perlu menonaktifkan pengalihan DLL setiap kali ingin memainkan game yang terpengaruh.
[DotLocalToggle](https://github.com/LeadRDRK/DotLocalToggle/releases/) adalah program kecil yang memungkinkan kamu dengan cepat mengaktifkan/menonaktifkan pengalihan DotLocal DLL. Sebagai alternatif, mainkan versi JP Steam.

### Input terdeteksi di posisi yang salah atau resolusi game tampak melebar saat dalam mode layar penuh

::: peringatan
Pada klien Global, opsi `Mode Layar penuh` umumnya berfungsi sebagaimana mestinya, tetapi mengubah `Skala Resolusi` bisa merusak tampilan dan perilaku input bahkan pada resolusi **1080p**. Sangat disarankan untuk **membiarkan `Skala Resolusi` ke nilai default** di versi Global.
:::

- Pastikan opsi `Mode Layar penuh` dan `Skala Resolusi` di atur dengan benar.  
- Jika resolusi layarmu lebih dari **1080p**, coba pilih nilai `Skala Resolusi` yang berbeda.  
- Jika aspek rasio monitor kamu **16:9**, atur `Mode Layar penuh` ke **Eksklusif**.

### Masalah suara

Ini adalah bug pada game, bukan pada Hachimi. Beberapa pengguna bisa mengaktifkan Windows Sonic tanpa efek buruk untuk memperbaikinya.

### Game ngelag

Pastikan kamu tidak mengaktifkan `terjemahan otomatis` di pengaturan Hachimi. Fitur ini hanya berfungsi jika kamu sudah menyiapkan server terjemahan dengan benar, bahkan bisa menyebabkan masalah kinerja.

### Error 501

Kedua versi menggunakan nama direktori unduhan data yang sama dengan perbedaan kapitalisasi. Sensitivitas huruf besar-kecil harus diaktifkan pada direktori ini agar keduanya bisa berfungsi bersama.

::: tip
Jika kamu ingin memindahkannya secara manual agar langsung menuju direktori data game, gunakan `WinKey + R` lalu masukkan `%localappdata%low\Cygames` pada dialog. Versi Global menggunakan "Umamusume" sedangkan versi JP menggunakan "umamusume"
:::

1. Tutup game.
1. Buka `Start Menu`, cari `PowerShell`, pilih "*Run as Administrator*".
1. Ikuti perintah: `fsutil.exe file setCaseSensitiveInfo $env:USERPROFILE\AppData\LocalLow\Cygames enable`.
    - Jika mendapat `Error: Unsupported action` atau yang serupa, pertama-tama ikuti perintah: `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux`, kemudian ulangi.
    - Jika mendapat `Error: The directory is not empty`, pindahkan sementara semua yang ada di folder `Cygames`, kemudian ulangi:
    ```powershell
    New-Item -ItemType Directory "$env:USERPROFILE\AppData\LocalLow\CygamesTEMP"
    Move-Item "$env:USERPROFILE\AppData\LocalLow\Cygames\*" "$env:USERPROFILE\AppData\LocalLow\CygamesTEMP"
    ```
1. Jika kamu sudah mengosongkan folder Cygames, pindahkan kembali semua isi ke dalamnya:
    ```powershell
    Move-Item "$env:USERPROFILE\AppData\LocalLow\CygamesTEMP\*" "$env:USERPROFILE\AppData\LocalLow\Cygames"
    Remove-Item "$env:USERPROFILE\AppData\LocalLow\CygamesTEMP"
    ``

### Versi Global Steam dan JP DMM terus-menerus meminta untuk mengunduh ulang data

Lihat [Error 501](#error-501) diatas.

### I/O error: Access is denied (os error 5)

Ada sesuatu yang sedang menggunakan file yang coba kamu ubah. Kemungkinan besar game masih terbuka saat kamu mencoba menginstal atau menghapus Hachimi.

### Installer I/O error: The system cannot find the file specified (os error 2)

Hal ini kemungkinan terjadi pada versi global karena adanya perbedaan nama file yang belum diperhitungkan. Tidak akan memengaruhi Hachimi dan bisa diabaikan dengan aman.

### Setup pertama kali: error atau macet saat memuat pilihan Repo

Kemungkinan kamu menggunakan VPN untuk mengakses game itu sendiri. Matikan sementara VPN hingga proses pengaturan selesai dan terjemahan sudah diunduh. Lihat juga [masalah serupa di bawah](#tidak-menerima-pembaruan-terjemahan).

### Tidak menerima pembaruan terjemahan

Pertama-tama, mungkin memang tidak ada pembaruan. Hal ini akan ditunjukkan dengan pesan "Tidak ada pembaruan translasi". Jika pesan ini tidak muncul, kemungkinan besar kamu menggunakan VPN untuk mengakses game. Matikan VPN selama progres pembaruan.

## Android

### Patching gagal

- Pastikan kamu memilih file APK dasar atau file *split APK*, atau file XAPK gabungan. Kamu bisa menekan dan menahan untuk memilih beberapa file di pemilih file. Tempat yang disarankan untuk mendapatkan APK adalah [Qoopy](https://qoopy.leadrdrk.com/) (gunakan ID **6172**).

- Jika perangkat kamu **Xiaomi/POCO** dengan **MIUI** (bukan **HyperOS**), coba matikan **Optimalisasi MIUI** di opsi pengembang/developer, Hal itu terkadang bisa mengganggu proses instalasi.
    ::: peringatan
    Mematikan **Optimalisasi MIUI** akan me-reset **semua izin aplikasi** dan bisa menyebabkan aplikasi kehilangan akses yang telah diberikan (penyimpanan, notifikasi, dll.)
    :::

- Coba hapus cache **UmaPatcher Edge** :  
  *Tahan ikon aplikasi → info aplikasi → penyimpanan → Cache (jika ada) → hapus cache.*  
  jika tidak bekerja, coba **unduh ulang UmaPatcher Edge** dan **impor *signing key*** lagi.

### Aplikasi tidak terpasang karena muncul error ketidakcocokan

::: peringatan
Langkah-langkah ini diperlukan untuk beberapa perangkat Samsung dan melibatkan penyambungan ponsel kamu ke PC. Langkah ini juga mungkin berfungsi pada perangkat Android lainnya.
:::

Masalah ini bisa terjadi ketika game telah di-uninstall tetapi masih tersisa di dalam Secure Folder. Ikuti langkah-langkah berikut untuk menghapus game sepenuhnya:

1. **Nyalakan USB Debugging** di opsi pengembang/developer.  
   jika tidak tau caranya, lihat [Panduan YouTube Short](https://www.youtube.com/shorts/p7DDuq56suU)
1. **Unduh dan ekstrak** [Android Platform Tools (ADB)](https://developer.android.com/tools/releases/platform-tools#downloads) ZIP file di komputer kamu.
1. **Buka Terminal/CMD** dengan mengklik kanan area kosong di dalam folder ADB yang telah diekstrak. (dimana `adb.exe` diletakkan) dan pilih ***Open in Terminal*** (atau sejenisnya).
   - Tahan **Shift** saat klik kanan di Windows 10 dan seharusnya menampilkan opsi **"*Open PowerShell window here*"**.
1. **Hubungkan perangkat kamu** ke komputer via USB (USB-C atau kabel apapun yang kompatibel).
1. Di jendela Terminal, ketik `adb.exe` dan tekan **Enter** untuk memastikan telah dikenali sistem.
1. Kemudian ketik `adb devices` dan tekan **Enter**.  
   Lihat perangkat kamu dan **Berikan izin USB debugging** saat diminta, kemudian jalankan perintah lagi untuk memastikan koneksi.  
   Seharusnya menampilkan sesuatu seperti `"ABCD1234EFGH" device` di Terminal.
   Jika tidak ada, lihat dibawah.
1. Terakhir, ketik `adb uninstall jp.co.cygames.umamusume` dan tekan **Enter** untuk uninstall game.

#### Pemecahan masalah perangkat tidak sah/dikenali

Jika mengetik `adb devices` dan menekan **Enter** muncul **"*unauthorized*"** daripada **"*device*"**:

1. Di perangkat kamu, **matikan USB debugging**, kemudian **nyalakan kembali**.
1. Hubungkan ulang perangkat dan **Berikan izin USB debugging** lagi saat diminta.
1. Ulangi langkah-langkah serupa di atas (terutama langkah 5–7).

### Tidak bisa login via akun Google Play

Kamu tidak bisa masuk ke versi game yang telah dipatch menggunakan akun Google Play dan harus menggunakan kata sandi Data Link sebagai gantinya. Jika kamu sudah memiliki kata sandi Data Link, masuklah ke akun tersebut dari layar judul (☰ > Data Link). Jika kamu belum memiliki kata sandi Data Link, kamu perlu mencopot game versi patched, lalu memasang kembali game versi yang belum dipatch, masuk melalui akun Google Play, lalu membuat kata sandi Data Link. Setelah itu, kamu bisa mengulangi proses patching dan kemudian masuk menggunakan kata sandi Data Link yang telah dibuat. Sebagai alternatif, kamu bisa masuk menggunakan Cygames ID untuk menautkan data akun kamu.

### Error: この端末でのプレイは許可されていません (Kamu tidak diizinkan bermain di perangkat ini)

#### Jika perangkat di-root

 Pastikan koneksi kamu stabil dan perangkat lulus DEVICE_INTEGRITY pada server Play Integrity
 (kamu bisa coba verifikasi dengan aplikasi [Play Integrity API Checker](https://play.google.com/store/apps/details?id=gr.nikolasspyr.integritycheck) ). Jika lolos, sembunyikan root dari game menggunakan **DenyList bawaan Magisk** (aktifkan Enforce DenyList jika tidak berfungsi) seharusnya membuatnya berjalan. Alat lain seperti **Shamiko** juga mungkin berhasil.

#### Jika perangkat tidak di-root

 Jika pesan kesalahan ini terus muncul di perangkat kamu, itu menandakan koneksi yang tidak stabil ke server Play Integrity, atau kamu perlu menggunakan VPN saat meluncurkan game. Lihat bagian [Communication error](#muncul-pesan-communication-error-saat-mencoba-memasuki-game) untuk detailnya.

### I/O error: Permission denied (os error 13)

Hal ini bisa terjadi karena adanya pembatasan penyimpanan/*scoped storage* baru yang diperkenalkan di Android 10, yang membuat Hachimi gagal membuat direktori datanya. Untuk mengatasinya, buka pengelola file kamu, masuk ke Android/media, lalu buat folder bernama "jp.co.cygames.umamusume". Jalankan ulang game dan masalah seharusnya teratasi.

### I/O error: File exists (os error 17)

Mulai ulang perangkat kamu dan coba jalankan game lagi. Jika kesalahan tetap muncul, mintalah bantuan di server Discord.

### *Crash* setelah dijalankan

Hal ini mungkin diperlukan untuk beberapa perangkat dan emulator: buka pengelola file kamu dan arahkan ke Android/media. Buat folder bernama "jp.co.cygames.umamusume". Di dalam folder tersebut, buat folder bernama "hachimi". Terakhir, unduh [file config ini](https://files.leadrdrk.com/hachimi/android-compat/config.json) dan letakkan di dalam folder "hachimi" (pastikan namanya "config.json")

### Ketukan tidak pas

Buka menu Hachimi -> Editor konfig dan coba ubah kelipatan resolusi virtual untuk menemukan nilai yang paling sesuai.

### Ketukan tidak ada, atau menyebabkan game *crash/freeze*

Masalah ini telah diperbaiki di Hachimi Edge versi 0.15.1. Pastikan kamu telah [memperbaruinya](faqs.md#bagaimana-saya-memperbarui-di-android).

<details>
<summary class="collapsible-header-sub">Saya mengalami hal ini pada versi yang lebih baru dari 0.15.1.</summary>

:::tip
Mematikan GUI akan menonaktifkan pembaruan terjemahan. Kamu harus sesekali menyalakannya dan mematikannya lagi untuk memperbaruinya.
:::

1. Pastikan terjemahan kamu sudah diperbarui. Biarkan Hachimi melakukan pembaruan jika memungkinkan dan jangan menyentuh apa pun sampai selesai.
1. Buka menu Hachimi -> Editor konfig dan pilih Matikan Overlay (GUI).
    - Untuk menyalakan ulang, buka file Hachimi `config.json` di text atau JSON editor kemudian ubah nilai `disable_gui` dari `true` kembali ke `false`, kemudian *restart* game. File ini terletak di `android/media/jp.co.cygames.umamusume/hachimi` (mungkin berbeda tergantung merek ponsel).
1. Silakan laporkan masalah ini kepada pengembang Hachimi Edge di Discord atau GitHub.

</details>

### Patch sukses tapi tidak ada translasi

Pastikan terjemahan sudah diunduh dan diperbarui. Jalankan kembali setup pertama kali

Jika selama proses patching kamu melihat pesan yang menyebutkan `libmain.so`, kamu bisa mencoba langkah-langkah berikut secara berurutan hingga salah satunya berhasil:

1. Pastikan Hachimi sudah terbaru.
1. Paksa unduh ulang Hachimi di pengaturan UmaPatcher Edge, lalu lakukan patch lagi.
1. Hapus data dan cache Umapatcher Edge.
1. Instal ulang Umapatcher Edge.
1. Mulai ulang perangkat kamu ke mode pemulihan (*recovery mode*) dan hapus cache.
<!-- Todo: How safe is the last one...? -->

## Emulator (termasuk Google Play Games)

Game maupun Hachimi tidak mendukung emulator. Kamu bisa membuatnya berfungsi, tetapi itu sepenuhnya tanggung jawab kamu. Untuk bermain di PC, gunakan klien DMM atau Steam.
