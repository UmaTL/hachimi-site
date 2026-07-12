# Panduan Instalasi (Windows)

::: warning PERINGATAN
Proses instalasi DMM menggunakan pengalihan DotLocal DLL.
Hal ini tidak kompatibel dengan beberapa sistem *anti‑cheat* (seperti Vanguard yang digunakan di LoL/Valorant). Kamu harus menonaktifkannya setiap kali ingin memainkan game yang terdampak. Kamu bisa gunakan
[DotLocalToggle](https://github.com/LeadRDRK/DotLocalToggle/releases) untuk menyalakan/mematikannya dengan cepat. Jalankan hingga muncul pesan pengalihan DLL telah dinonaktifkan, lalu *restart* komputer kamu.  
Steam tidak terpengaruh.
:::

::: details Metode Lama: Migrasi dari metode plugin shimming (Shinmy) yang sudah usang.
Kamu harus menghapus Shinmy dengan bersih terlebih dahulu; pastikan program tersebut tidak sedang berjalan saat kamu menghapusnya karena bisa bertahan hingga 30 detik setelah DMM ditutup dan memulihkan dirinya sendiri. **Cara termudah adalah dengan menggunakan installer** (yang juga berfungsi sebagai *uninstaller*), sehingga semuanya akan dibersihkan dengan benar.

Setelah itu, kamu bisa menghapus Hachimi seperti biasa.
:::

## Menggunakan *Installer* (disarankan)

1. Unduh [Installer](https://github.com/kairusds/Hachimi-Edge/releases/latest/download/hachimi_installer.exe) terbaru kemudian jalankan.
1. Jika kamu menggunakan Hachimi versi non-edge sebelumnya, klik *Uninstall* terlebih dahulu.
1. Pilih versi game kamu di kotak bagian bawah.
1. Periksa apakah [folder instalasi game](faqs#bagaimana-cara-menemukan-folder-instalasi-game) sudah benar dan ubah jika diperlukan.
    - Global versi khusus mungkin tidak terdeteksi secara otomatis.
1. Klik Install.
    - Saat pertama kali dijalankan, kamu mungkin akan diminta untuk mengaktifkan pengalihan/*redirection* DotLocal DLL. Tekan OK dan fitur tersebut akan diaktifkan secara otomatis. **Kamu harus MEMULAI ULANG / RESTART (bukan mematikan/shutdown) komputer setelahnya**.

⚠️ Kamu mungkin perlu mengulangi proses instalasi setelah game diperbarui (game akan berhenti berjalan) karena file yang telah dimodifikasi akan digantikan kembali.

➡ Lanjutkan dengan [Setup Pertama Kali](getting-started#setup-pertama-kali).

## Instal Manual

:::tip
Hanya tambahkan ekstensi `.dll` saat mengganti nama file jika kamu melihatnya pada nama file asli. Jika tidak terlihat, berarti Windows sedang menyembunyikan ekstensi file tersebut; jika kamu tetap menambahkannya, nama file akan berakhir menjadi `.dll.dll` dan menyebabkan game tidak bisa dijalankan.
:::

### Steam

1. Unduh `hachimi.dll` terbaru di [Laman rilis](https://github.com/kairusds/Hachimi-Edge/releases).
1. Ubah namanya menjadi `cri_mana_vpx.dll` kemudian pindahkan ke [folder instalasi game](faqs#bagaimana-cara-menemukan-folder-instalasi-game)
1. Jika menginstal untuk JP (global tidak perlu):
    1. Unduh [Ferns' `FunnyHoney.exe`](https://gitlab.com/LeadRDRK/FunnyHoney).
    1. Ubah namanya ke `UmamusumePrettyDerby_Jpn.exe` kemudian pindahkan ke folder instalasi game, timpa file yang aslinya.
    1. ⚠️ Simpan file ini dan jangan dihapus, kamu mungkin perlu mengulang proses penimpaan setelah game diperbarui (game akan berhenti berjalan) karena file .exe asli akan dipulihkan.

➡ Lanjutkan dengan [Setup Pertama Kali](getting-started#setup-pertama-kali).

### DMM

1. Lihat bagian "*Configure the registry*" pada [artikel ini](https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-redirection#optional-configure-the-registry) untuk mengaktifkan pengalihan DLL. ***Restart*** komputer kamu setelah selesai.
1. Unduh `hachimi.dll` terbaru di [Laman rilis](https://github.com/kairusds/Hachimi-Edge/releases).
1. Di [folder instalasi game](faqs#bagaimana-cara-menemukan-folder-instalasi-game), buat folder baru bernama `umamusume.exe.local` dan pindahkan file DLL yang telah diunduh ke sana. Ubah namanya menjadi `UnityPlayer.dll`
1. Unduh `cellar.dll` terbaru di [laman rilis Cellar](https://github.com/Hachimi-Hachimi/Cellar/releases).
1. Pindahkan ke `umamusume.exe.local` dan ubah namanya menjadi `apphelp.dll`.

➡ Lanjutkan dengan [Setup Pertama Kali](getting-started#setup-pertama-kali).
