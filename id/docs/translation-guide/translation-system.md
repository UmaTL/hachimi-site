# Sistem Translasi

Sebelum masuk ke proses membuat terjemahan, mari kita lihat terlebih dahulu bagaimana Hachimi menangani terjemahan. Kamu tidak perlu sepenuhnya memahami semua yang dijelaskan disini, tetapi ada baiknya memiliki pemahaman singkat tentang cara kerjanya agar kamu tidak bingung saat membuat terjemahan.

::: info
Jika kamu juga ingin mengetahui bagaimana *dict* translasi diformat/diorganisasi, kamu harus menelusuri direktori `localized_data` untuk memeriksanya sambil membaca artikel ini. Kamu bisa melakukannya dengan menelusuri salinan lokal kamu jika Hachimi sudah terpasang di `[Lokasi Game di install]/hachimi/localized_data`, atau kamu bisa menelusuri repositori
[UmaTL](https://github.com/UmaTL/hachimi-tl-en) di GitHub.
:::

## *Localize dict / Hashed dict*

Di root direktori `localized_data`, kamu akan menemukan dua file bernama `localize_dict.json` dan `hashed_dict.json`. Kedua file ini digunakan oleh dua sistem berbeda yang memiliki tujuan sama seperti menerjemahkan UI.

**Localize dict** adalah cara baru dan lebih disarankan untuk menerjemahkan UI, diperkenalkan oleh Hachimi. Sistem ini langsung memodifikasi sistem lokalisasi internal game, sehingga terjemahan akan ditempatkan tepat di lokasi yang diperlukan, lengkap dengan konteksnya. Setiap entri terjemahan dipetakan ke ID internal dalam game, yang secara bebas menentukan konteks penggunaannya (meski ada kasus di mana ID yang sama digunakan secara tidak tepat di beberapa konteks, salahkan dev Cy).

**Hashed dict** adalah sistem lama yang diwarisi dari proyek terjemahan sebelumnya. Pada dasarnya ini adalah tabel pencarian kata; apa pun di UI yang cocok dengan hash dalam tabel akan diganti dengan konten terjemahan yang ditentukan. Penggunaan sistem ini di proyek sebelumnya terbukti cukup mengganggu, tidak efisien, dan sering menghasilkan terjemahan berkualitas rendah karena bisa muncul di tempat yang salah (misalnya dialog cerita). Namun, sistem ini masih memiliki kegunaan terbatas, terutama ketika target terjemahan tidak tersedia di `localize dict` atau cara terjemahan lain yang mudah diakses. **Dict** ini tidak didukung oleh ZokuZoku.

## MDB *dicts*

MDB merujuk ke `master.mdb`, Sebuah file basis data yang digunakan oleh game dan berisi beragam jenis data. Sistem terjemahan Hachimi hanya berhubungan dengan 4 tabel dalam basis data ini yang digunakan untuk konten tekstual: `text_data`, `character_system_text`, `race_jikkyo_comment` dan `race_jikkyo_message`. Masing-masing memiliki *dict* terkait dengan nama yang sesuai di root `localized_data`.

- `text_data` Berisi informasi tekstual untuk semua entitas dalam game, yang mencakup tetapi tidak terbatas pada: nama/profil karakter, nama/deskripsi kartu dukungan, nama cerita, nama/deskripsi gacha, nama misi, dll.

- `character_system_text` Berisi dialog karakter yang diucapkan pada berbagai layar game, seperti layar beranda game.

- `race_jikkyo_comment` dan `race_jikkyo_message` berisi komentator balapan.

## *Asset dicts*

Terdapat 5 tipe *asset dict*:

- *Dict* Cerita (digunakan untuk cerita utama, dialog event pelatihan, dan interaksi di beranda): `assets/story/data/??/????/storytimeline_*.json` dan `assets/home/data/?????/??/hometimeline_*.json`;
- *Dict* Cerita balapan (digunakan untuk cuplikan balapan dalam cerita utama): `assets/race/storyrace/text/storyrace_*.json`
- *Dict* Lirik: `assets/lyrics/m????_lyrics.json`
- *Dict* Metadata `atlas`: `assets/atlas/*/*.json`
- *Dict* `uianimation`: `assets/uianimation/*`

Semua *dict* ini, kecuali *dict* Lirik, memungkinkan penentuan asset bundle hash untuk setiap platform. Bundle hash ini digunakan untuk memeriksa apakah bundle telah diperbarui; jika demikian, konten terjemahan mungkin tidak sesuai dengan yang ada di aset saat ini, sehingga mencegah data yang salah dimuat.

::: info
Sistem proteksi ini saat ini sudah tidak berfungsi lagi.
:::

Tipe `atlas` hanya berfungsi sebagai metadata untuk tekstur atlas (lihat di bawah). Tipe `uianimation` biasanya melakukan hal yang sama untuk tekstur lain, tetapi terkadang bisa berisi data teks yang digunakan oleh game.

## Penggantian tekstur

Penggantian tekstur dikategorikan berdasarkan jenis root asset dari mana tekstur dimuat. Untuk sebagian besar jenis tekstur, file `.png` digunakan sebagai pengganti. File-file tersebut dipisahkan ke dalam direktori masing-masing

- `atlas`: Berisi tekstur atlas untuk UI *sprites*. Metadata disediakan oleh *dict* metadata atlas yang memiliki nama sama dengan tekstur pengganti tetapi sebagai sebuah file `.json`. Lokasi: `assets/atlas/*/*.png`.
- `an_texture_sets`: Berisi tekstur UI animasi atlas, yang termasuk dalam asset bundle `uianimation`. Sebuah *dict* aset `uianimation` bisa digunakan untuk menyediakan metadata bagi tekstur-tekstur ini. Lokasi: `assets/an_texture_sets/as_uMeshParam_fl_*/tx_uTex_fl_*.png`
- `textures`: Berisi tekstur generik. Digunakan oleh UI atau model 3D dalam game. Tidak seperti tipe lain, format file dari tekstur pengganti ini bergantung pada nama file asli yang ditentukan dalam asset bundle. Untuk tekstur UI biasanya berupa `.png`, sedangkan untuk tekstur model 3D biasanya berupa `.tga`. Lokasi: `assets/textures/*`

Semua tekstur juga bisa diganti menggunakan file `.diff.png` daripada format aslinya. Ini adalah format khusus berbasis PNG yang hanya berisi data perbedaan antara gambar asli dan gambar pengganti, sehingga secara signifikan menghemat ukuran file. Sangat disarankan untuk hanya menggunakan format ini dalam repositori translasi.

## *Movies* (video / cuplikan FMV)

Ini adalah file video berformat USM. Penggantian aset ini cukup dilakukan dengan membuat game memuat file pengganti
Lokasi: `assets/movies/*`

## Proses pemuatan terjemahan

File konfigurasi, *localize dict, hashed dict*, dan MDB *dict* semuanya dimuat ketika game dijalankan; ini juga merupakan satu-satunya hal yang akan dimuat ulang ketika kamu memilih untuk memuat ulang data terlokalisasi. Segala sesuatu yang terkait dengan aset game akan dimuat (atau dimuat ulang) setiap kali game mencoba memuat aset yang bersangkutan.

~~*Asset dict* akan memeriksa bundle hash sebelum diterapkan. Jika bundle hash tidak cocok dengan yang ditentukan dalam dict, maka file tersebut akan diabaikan. Jika bundle hash tidak ditentukan dalam asset dict, pemeriksaan ini akan dilewati.~~ Saat ini tidak berfungsi.

Penggantian tekstur memiliki proses pemuatan khusus. Ketika aset dimuat, sistem akan mencari file `.diff.png` yang sesuai untuk digunakan sebagai diff; jika tidak ada, maka mencoba memuat file `.png`. Jika ditemukan file diff, sistem akan memeriksa waktu modifikasi file `.png` yang bersesuaian. Jika waktu modifikasi lebih baru daripada file diff, maka file `.png` akan dimuat langsung. Jika file tidak ada atau waktu modifikasinya lebih lama daripada file diff, maka file diff akan diterapkan ke tekstur asli dan hasilnya disimpan ke file `.png` untuk digunakan nanti.
