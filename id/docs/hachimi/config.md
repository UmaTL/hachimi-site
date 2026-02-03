# Konfigurasi

Halaman ini berisi daftar opsi konfigurasi dan penjelasan kegunaannya.

File konfigurasi bisa ditemukan di lokasi berikut:

- Windows: `[Folder instalasi game]\hachimi\config.json`
- Android: `/sdcard/Android/media/jp.co.cygames.umamusume/hachimi/config.json`

**Catatan:** Beberapa opsi tidak tersedia di Editor konfig dan harus ditambahkan secara manual.

- `debug_mode`: Menentukan apakah mode debug diaktifkan atau tidak. Saat ini hanya mengaktifkan/menonaktifkan debug logging.
- `translator_mode`: Ditujukan untuk penerjemah. Mencatat string UI yang belum diterjemahkan ke konsol dan mengaktifkan beberapa fitur lain yang berguna untuk penerjemah.
- `disable_gui`: Menonaktifkan GUI bawaan. Perlu dicatat bahwa ini juga akan menonaktifkan pembaruan terjemahan.
- `localized_data_dir`: Direktori yang berisi data terlokalisasi. Harus memiliki file konfigurasi data lokal.
- `target_fps`: FPS target dari game. Jika tidak diatur, Hachimi tidak akan mencoba mengganti FPS game. Tidak berpengaruh jika `vsync_count` diatur.
- `open_browser_url`: URL default yang dibuka saat meluncurkan browser dalam game dari GUI. Default: `https://www.google.com/`
- `virtual_res_mult`: Pengali resolusi virtual. Jika perangkatmu mampu, nilai 1.5 atau 2 bagus; lebih tinggi dari itu mungkin berlebihan. Bisa diterapkan tanpa menutup game dengan melakukan "Restart ringan".
- `translation_repo_index`: URL indeks repo terjemahan. Digunakan oleh updater terjemahan.
- `skip_first_time_setup`: Menentukan apakah melewati setup pertama saat startup atau tidak. Secara otomatis diset `true` setelah dialog setup pertama ditutup.
- `disable_auto_update_check`: Menonaktifkan pemeriksaan update otomatis saat startup.
- `disable_translations`: Menonaktifkan fitur terjemahan.
- `ui_scale`: Faktor skala UI. Default: `1.0` (tanpa skala).
- `graphics_quality`: Nilai yang mungkin: `Default`, `Toon1280`, `Toon1280x2`, `Toon1280x4`, `ToonFull`, `Max`.
- `story_choice_auto_select_delay`: Waktu tunda pemilihan (dalam detik) saat menggunakan mode auto di cerita. Default: `0.75` detik.
- `story_tcps_multiplier`: Pengali kecepatan teks cerita ("jumlah karakter per detik seperti mesin ketik"). Default: `1.0`
- `enable_ipc`: Mengaktifkan server komunikasi antar-proses HTTP yang memungkinkan program lain mengontrol game. Ditujukan untuk digunakan dengan alat terjemahan.
- `ipc_listen_all`: Menerima perintah IPC dari perangkat lain di jaringan. **Jangan aktifkan opsi ini jika kamu tidak membutuhkannya.**
- `force_allow_dynamic_camera`: Memaksa game untuk mengizinkan pemilihan kamera dinamis (POV) di semua jenis balapan.
- `live_theater_allow_same_chara`: Memaksa game untuk mengizinkan memilih karakter yang sama berkali-kali untuk formasi konser live. Juga menonaktifkan penyimpanan formasi otomatis. **Jangan mencoba menyimpan formasi yang diduplikasi secara manual.**
- `sugoi_url`: URL ke Sugoi Offline Translator atau server terjemahan kompatibel untuk terjemahan otomatis. Tidak perlu diatur jika kamu menggunakan setup Sugoi standar. Default: `http://127.0.0.1:14366`
- `auto_translate_stories`: Memungkinkan penerjemahan cerita melalui penerjemah otomatis.
- `auto_translate_localize`: Memungkinkan penerjemahan teks UI melalui penerjemah otomatis. Umumnya TIDAK disarankan karena kebanyakan penerjemah tidak menjaga line break atau tag format dengan benar.

### Hanya untuk Windows

- `vsync_count`: Jumlah VSync. Atur ke 1 agar sesuai dengan refresh rate monitor kamu. Lihat [dokumentasi Unity](https://docs.unity3d.com/ScriptReference/QualitySettings-vSyncCount.html) untuk info lebih lanjut.
- `load_libraries`: Daftar library yang dimuat saat startup. Bisa digunakan untuk memuat mod lain. Contoh: `["applejuicer.dll", "banana.dll"]`
- `menu_open_key`: Kode VK Windows untuk tombol yang membuka menu. Default: `39` (tombol panah kanan). Cek [halaman ini](https://cherrytree.at/misc/vk.htm) untuk daftar semua keycode.
- `auto_full_screen`: Membuat game otomatis masuk ke mode layar penuh setiap kali orientasi game cocok dengan orientasi layar. Saat ini, Hachimi tidak mendukung rasio aspek lain dan selalu menskalakan resolusi layar penuh ke 16:9. Harap atur nilai `full_screen_mode` dan `resolution_scaling` dengan benar saat menggunakan opsi ini.
- `full_screen_mode`: Mode layar penuh yang digunakan. Nilai yang mungkin: `ExclusiveFullScreen`, `FullScreenWindow` (borderless fullscreen). Gunakan `ExclusiveFullScreen` jika rasio aspek layar kamu bukan 16:9, jika tidak konten game tidak akan diskalakan dengan benar.
- `resolution_scaling`: Mode scaling resolusi. Nilai yang mungkin: `Default`, `ScaleToScreenSize`, `ScaleToWindowSize`. Gunakan `ScaleToScreenSize` (disarankan) atau `ScaleToWindowSize` ketika menggunakan `auto_full_screen` di layar dengan resolusi lebih tinggi dari 1080p, jika tidak konten game tidak akan diskalakan dengan benar.
- `block_minimize_in_full_screen`: Memblokir minimisasi saat layar penuh. Hanya boleh digunakan dengan `FullScreenWindow`.
- `window_always_on_top`: Menjaga jendela game tetap di atas jendela lain.
