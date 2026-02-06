# Memasang plugin

Panduan ini menjelaskan cara memasang dan mengkonfigurasi plugin untuk Hachimi Edge.

::: danger ⚠️ PERINGATAN KEAMANAN
Hanya instal plugin dari sumber dan pengembang yang kamu percayai! Pengembang Hachimi Edge tidak bertanggung jawab atas masalah atau kerusakan yang diakibatkan oleh plugin pihak ketiga.

Plugin berbahaya bisa mencuri kredensial akun game, mengakibatkan pemblokiran (*ban*), menjalankan kode arbitrer seolah-olah berasal dari game tersebut, dan lain sebagainya.

🚨 **Di Windows, plugin memiliki AKSES ADMINISTRATOR PENUH ke seluruh sistem kamu. Plugin tersebut bisa memasang malware, memodifikasi file sistem, mengakses semua data kamu, dll.**
:::

## Instalasi di Windows

Pada Windows, plugin harus dikonfigurasi secara eksplisit di dalam file konfigurasi (*config*).

1. **Cari file plugin**: Kamu harus punya file `.dll`  (mis. `hachimi_myplugin.dll`).
1. **Letakkan plugin di dalam folder hachimi**: letakkan file plugin di [folder `hachimi`](/id/docs/hachimi/faqs.md#bagaimana-cara-menemukan-folder-instalasi-game).
1. **Edit di config**: Buka `config.json` di folder `hachimi` dan masukkan nama file plugin-nya:
   ```json
   {
     "windows": {
       "load_libraries": [
         "hachimi\\hachimi_myplugin.dll"
       ]
     }
   }
   ```
1. **Simpan dan mulai ulang**: Simpan file config kemudian mulai ulang game.

## Instalasi di Android

Di Android, Plugin harus ditambahkan melalui UmaPatcher Edge sebelum melakukan patching pada game.

1. **Siapkan file plugin**: Kamu harus punya file `.so`  (mis. `libmyplugin.so`).
1. **Buka UmaPatcher Edge**: Jalankan aplikasi UmaPatcher Edge.
1. **Masukkan plugin**:
   - Di layar beranda, geser ke bawah di bagian "*Plugins*".
   - Klik tombol "*Add Plugin*".
   - Pilih file plugin `.so` dari perangkat kamu.
   - Plugin akan ditambahkan ke dalam daftar dan diaktifkan secara otomatis.
1. **Kelola plugin** (opsional):
   - Kamu bisa mengaktifkan/menonaktifkan plugin menggunakan kotak centang (*checkbox*) di samping setiap plugin.
   - Klik "*Remove*" untuk menghapus plugin dari daftar.
1. ***Patch* game-nya**: Ikuti [panduan instalasi UmaPatcher Edge](/id/docs/hachimi/getting-started) untuk *patch* dan menginstal game.
1. **Verifikasi**: Jalankan gamenya. Jika plugin berhasil dimuat, kamu akan melihat efeknya dan menu baru pada antarmuka (GUI) bawaan Hachimi.

::: tip
Saat memperbarui game, plugin kamu akan tetap tersimpan di UmaPatcher Edge. Cukup lakukan *patch* pada versi baru dan plugin tersebut akan dimasukkan secara otomatis.
:::

## Menonaktifkan plugin

### Windows

- Hapus plugin pada baris `load_libraries` di `config.json`.

### Android

- Buka UmaPatcher Edge.
- Hapus centang plugin di bagian "*Plugins*".
- *Patch* ulang game-nya.

## Pemecahan masalah Plugin

### Plugin tidak termuat

Di Windows:

- Pastikan arah lokasi `config.json` sudah benar.
- Pastikan plugin kompatibel dengan versi Hachimi kamu.

Di Android:

- Pastikan plugin sudah ditambahkan di UmaPatcher Edge sebelum melakukan *patching*.
- Cek apakah plugin kompatibel dengan versi Hachimi kamu.
- Coba *patching* ulang game dengan plugin terpasang.

### Plugin *crash* atau tidak berfungsi

Jika plugin menyebabkan *crash* atau tidak berfungsi dengan benar:

- **Hubungi pembuat plugin**: Masalah spesifik terkait plugin harus dilaporkan kepada pengembang plugin tersebut.

## Langkah selanjutnya

- Pelajari tentang [cara membuat plugin](development).
