---
outline: [2,3]
---

# Konfigurasi Repositori Terjemahan

Setiap repositori memiliki konfigurasi tersendiri yang berbeda dari konfigurasi pengguna Hachimi guna menyesuaikan perilaku sistem. Konfigurasi ini ditetapkan oleh pengelola repo. Jika kamu adalah pengelola, silakan baca halaman ini untuk memahami opsi yang tersedia.

File konfigurasi untuk sebuah repo menggunakan format JSON dan ditempatkan di folder `localized_data`. Semua _path_ dalam konfigurasi bersifat relatif terhadap folder tersebut.


## Pengaturan

Halaman ini tidak mencakup semuanya. Representasi internal lengkap dari semua opsi yang tersedia bisa ditemukan di [Kode sumber](https://github.com/kairusds/Hachimi-Edge/blob/main/src/core/hachimi.rs#L574).


### Lokasi File Lokalisasi
``` json
"localize_dict": "path"
"hashed_dict": "path"

"text_data_dict": "path"
"character_system_text_dict": "path"
"race_jikkyo_comment_dict": "path"
"race_jikkyo_message_dict": "path"

"assets_dir": "path"
```

Ini adalah lokasi relatif ke file untuk setiap bagian dari sistem translasi. 
- Dua yang pertama untuk [_general UI_](translation-system#localize-dict-hashed-dict).
- Empat selanjutnya untuk [Tabel MDB](translation-system#mdb-dicts).
- Dan yang terakhir adalah folder dimana [Semua file lokalisasi lainnya ](translation-system#asset-dicts) berada. Berisi cerita, lirik, gambar, dan sebagainya. Tidak seperti _dict_ sebelumnya, file-file di sana diatur berdasarkan jalur internal game.


### Aset Lokalisasi Extra
``` json
"extra_asset_bundle": {
    "windows": "path", 
    "android": "path"
}
```

Sebuah dict opsional yang memungkinkan kamu menyertakan Unity AssetBundle kustom yang akan dimuat ke dalam game. Kuncinya adalah platform yang didukung, dan nilainya adalah jalur menuju bundle tersebut.

Bundle ini dapat berisi file apa pun, namun detail pasti mengenai cara kerjanya saat ini masih terbatas. Umumnya digunakan untuk menyertakan font kustom dalam lokalisasi, jika diperlukan.

Membuat assetbundle ini mengharuskan kamu memiliki versi _full_ dari Unity Editor yang kompatibel, atau menggunakan alat pihak ketiga.

``` json
"replacement_font_name": "path"
```
Jalur internal di dalam `extra_asset_bundle` untuk menemukan font kustom, jika diperlukan.


### Fungsi Teks Yang Dilokalisasi

``` json
"plural_form": "n == 1 ? 0 : 1",
"ordinal_form": "(((n+9)%10)<3 && ((n+90)%100)>10) ? ((n+9)%10) : 3",
"ordinal_types": ["$st", "$nd", "$rd", "$th", "etc"]
```
Dua yang pertama adalah ekspresi kustom yang akan dievaluasi untuk mendeteksi bentuk _plural_/jamak (_tidak digunakan di bahasa Indonesia_) dan _ordinal_/angka berurutan, digunakan bersama ekspresi _template_ `$ordinal(n)` dan `$plural(n, t0, t1)`. Dalam ekspresi ini, `n` biasanya berupa variabel teks game seperti `{0}`. Ekspresi tersebut menentukan argumen `tx` mana yang digunakan untuk jamak, dan angka mana yang digunakan untuk ordinal, berdasarkan nilai `n`. Keduanya bersifat opsional. Contoh yang diberikan adalah default untuk bahasa Inggris. Detailnya ada di [Kode sumber](https://github.com/kairusds/Hachimi-Edge/blob/main/src/core/plurals.rs).

``` json
"months": ["month 1", "month 2", "etc"],
"month_text_format": "$(half) $(month)"
```
Bagaimana cara memformat bulan? Yang pertama adalah sebuah _array_ di mana setiap entri mewakili satu bulan. Yang kedua adalah _string_ yang digunakan di beberapa bagian game untuk menampilkan setengah bulan, seperti pada _Career “turns_/giliran”. Tidak yakin apakah ini benar-benar digunakan.


### Pemformatan Baris/_Text Wrapping_

``` json
"use_text_wrapper": true
```
Sebuah nilai boolean yang menentukan _text wrapping_ dilakukan secara kustom atau dibiarkan ditangani oleh game. Apabila diatur ke `false`, maka opsi lain dalam bagian ini tidak akan berlaku.

``` json
"wrapper_penalties": {
    "nline_penalty": 0,
    "overflow_penalty": 0,
    "short_last_line_fraction": 0,
    "short_last_line_penalty": 0,
    "hyphen_penalty": 0
}
```
Sebuah _dict_ opsional yang menunjukkan penalti yang digunakan dalam algoritma _wrapping optimal-fit_. Jika digunakan, semua penalti harus dikonfigurasi. Lihat [contoh sederhana](https://docs.rs/textwrap/latest/textwrap/wrap_algorithms/fn.wrap_optimal_fit.html#optimal-fit-algorithm) untuk ide dasar bagaimana cara kerjanya, dan [Penalti](https://docs.rs/textwrap/latest/textwrap/wrap_algorithms/struct.Penalties.html#fields) untuk pengaturan dan detail lebih lanjut.

``` json
"line_width_multiplier": 2.0
```
Lebar baris internal game ditetapkan dalam karakter Unicode CJK, di mana setiap karakter biasanya setara dengan kira-kira 2 karakter ASCII. Pengaturan ini berlaku secara global untuk mengimbangi hal tersebut jika diperlukan dalam perhitungan _text wrapping_ kustom (tidak diterapkan di semua tempat).

``` json
"text_frame_line_spacing_multiplier": 0.72,
"text_frame_font_size_multiplier": 0.96
```
Nilai pengali/_multiplier_ yang diterapkan pada konfigurasi bingkai atau kotak teks. Fitur ini umumnya digunakan dalam dialog cerita.

``` json
"systext_cue_lines": {
    "type": 1,
    "...": 2
}
```
Sebuah dict opsional yang menunjukkan jumlah maksimum baris per-jenis _systext_. Kuncinya adalah “type” yang terdapat pada kolom `cue_sheet` di tabel MDB: snd_vo_*TYPE*. 

Nilainya adalah jumlah maksimum baris untuk tipe tersebut. Sebuah kunci "default" juga bisa ditentukan, yang biasanya akan digunakan jika tidak ada tipe lain yang cocok. Jika tidak ditentukan, nilai default adalah `4`.

``` json
"skill_formatting": {
    "name_length": 18,
    "desc_length": 18,
    "name_short_lines": 1,

    "name_short_mult": 1.0,
    "name_sp_mult": 1.0
}
```
Panjang baris kustom khusus untuk skill. Digunakan di mana pun skill ditampilkan. Nilai diberikan dalam format internal game (sudah dikalikan/_pre-multiplied_). Setiap nilai bersifat opsional, begitu juga _dict_ itu sendiri.
- `Short` Merujuk pada skill yang ditampilkan dalam daftar ganda tanpa deskripsi, seperti pada layar informasi gadis kuda.
- `SP` Merujuk pada saat poin skill ditampilkan di sebelah nama, seperti pada peningkatan.


### Fungsi Extra

``` json
"auto_adjust_story_clip_length": true
```
Menyesuaikan nilai internal agar sesuai dengan panjang teks hasil lokalisasi. Mempengaruhi jeda dialog/waktu baca dalam mode `auto`

``` json
"now_loading_comic_title_ellipsis": true,
```
Judul komik dibuat terputus/_trail off_ daripada diubah ukurannya agar pas (?).

``` json
"remove_ruby": true
```
Menyembunyikan furigana dalam game. Kemungkinan besar harus diaktifkan dalam repositori lokalisasi.

``` json
"character_note_top_gallery_button": {
    "text": "Career Event\n     Gallery",
    "font_size": 38,
    "line_spacing": 0.6
},
"character_note_top_talk_gallery_button": {
    "text": "     Chat\n   Gallery",
    "font_size": 44,
    "line_spacing": 0.55
}
```
Pengaturan khusus untuk beberapa elemen non-standar yang bisa menimbulkan masalah jika tidak ditangani. Penambahan bisa diminta jika ditemukan elemen serupa lainnya.

``` json
"news_url": "https://hachimi.leadrdrk.com/PakaNews/"
```
Sebuah URL untuk membuka atau mengambil berita dalam game. Membutuhkan sumber yang disiapkan khusus untuk menyediakan berita terlokalisasi dari situs resmi.
