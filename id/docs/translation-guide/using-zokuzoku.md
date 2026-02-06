# Penggunaan ZokuZoku

ZokuZoku adalah ekstensi Visual Studio Code yang membantu membuat dan memodifikasi terjemahan untuk Hachimi melalui antarmuka GUI dengan berbagai fitur praktis. Ekstensi ini memungkinkan kamu mengerjakan terjemahan tanpa harus mengedit file JSON *dict* secara langsung.

::: warning PERINGATAN
Sejak pembaruan game, ZokuZoku tidak lagi mendukung konten dialog. Untuk itu lihat [*Tools* lama UmaTL (*legacy*)](https://github.com/noccu/umamusu-translate), yang juga akan segera mendapatkan pembaruan secara keseluruhan.
:::

## Instalasi

### Persyaratan

Sebelum mneginstal ZokuZoku, Pastikan untuk memasang ini:

- OS: Windows 10+ atau Linux x64. Perangkat macOS dan ARM tidak didukung secara resmi tetapi mungkin bisa berfungsi dengan beberapa pengaturan khusus.
- [Visual Studio Code](https://code.visualstudio.com/) v1.90 atau terbaru (bukan Visual Studio, Mereka adalah dua hal yang berbeda!)

File-file berikut diperlukan oleh ZokuZoku:

- `master.mdb` dan `meta`: File-file ini terletak di dalam direktori data game (pada Windows berada di `AppData`, dan pada Android berada di `/data/data`, membutuhkan akses root). Kedua file ini harus berada di folder yang sama, dengan file `meta` di root dan `master.mdb` di subfolder bernama `master`, sehingga strukturnya menjadi `folder/meta` dan `folder/master/master.mdb`. **Jika kamu memiliki UM:PD yang diinstal dari DMM di sistem, kamu tidak perlu khawatir tentang file-file ini, ZokuZoku bisa mendeteksinya secara otomatis!**
- `localize_dump.json`: File ini berisi data asli `localize_dict` yang diekstrak dari game. Untuk membuat file ini bisa menggunakan Hachimi:

1. Nyalakan "Mode Translator" di editor konfig.
![Editor konfig](/assets/id/translation-guide/using-zokuzoku/1.webp)
1. Opsi baru bernama "Ekstrak Localize_dump" akan muncul di bawah bagian Translasi pada menu. Klik opsi tersebut untuk membuat filenya.
![Pilihan translasi di menu](/assets/id/translation-guide/using-zokuzoku/2.webp)

ZokuZoku akan secara otomatis mendeteksi file ini jika dibuat dengan mengikuti prosedur di atas menggunakan versi game DMM, jadi pastikan untuk melakukannya setidaknya sekali sebelum menginstal. Kamu perlu melakukan *dump* lagi setiap kali klien game diperbarui jika ingin tetap memperbaruinya; jika tidak mengerjakan terjemahan UI, kamu bisa mengabaikannya.

Dan tentu saja, kamu juga memerlukan repositori terjemahan yang sudah ada untuk digunakan. Lihat yang [tersedia saat ini](/id/credits) atau buat sendiri.

### Pemasangan

Instal dari [*Marketplace* VS Code](https://marketplace.visualstudio.com/items?itemName=LeadRDRK.zokuzoku) atau unduh file .vsix versi terbaru di [laman rilis](https://github.com/Hachimi-Hachimi/ZokuZoku/releases), Buka panel *Extensions* di VSCode, klik tombol 3 titik di kanan atas, pilih "*Install from VSIX*..." dan pilih file yang baru saja kamu unduh

![Translation section in menu](/assets/translation-guide/using-zokuzoku/3.webp)

## Pengaturan awal

Setelah menginstal ZokuZoku, kamu sekarang bisa membuka repositori terjemahan dengan masuk ke File -> *Open Folder*... dan memilih folder yang ingin kamu buka. **Perlu dicatat bahwa folder tersebut harus berisi folder `localized_data`, bukan folder `localized_data` itu sendiri!**

Saat membuka repositori TL untuk pertama kalinya (di mana ZokuZoku telah dikonfigurasi untuk aktif secara otomatis), perintah berikut akan ditampilkan:

![Dependencies install prompt](/assets/translation-guide/using-zokuzoku/4.webp)

Klik OK untuk mulai memasang dependensi, proses ini akan memakan waktu untuk mengunduh dan menginstal (sekitar 200MB). **Selama proses ini, sebuah *command prompt* akan muncul, jangan ditutup!**

Jika versi DMM telah diinstal pada perangkat, dan kamu telah membuat file `localize_dump` sesuai instruksi di atas, maka perintah berikut akan muncul untuk konfirmasi pada lokasi yang terdeteksi otomatis:

![Game data dir prompt](/assets/translation-guide/using-zokuzoku/5.webp)
![Localize dict dump prompt](/assets/translation-guide/using-zokuzoku/6.webp)

Jika ada lokasi yang salah, kamu bisa memilih *No*.

Jika ZokuZoku gagal mendeteksi lokasi yang benar untuk instalasi game versi DMM atau kamu ingin menggunakan file aset dari versi lain, kamu bisa masuk ke *Settings* untuk mengaturnya secara manual.

::: warning PERINGATAN
Kamu perlu memulai ulang Visual Studio Code setelah mengubah lokasi data.
:::

![Extension details](/assets/translation-guide/using-zokuzoku/7.webp)
![Extension settings](/assets/translation-guide/using-zokuzoku/8.webp)

Selesai! Sekarang kamu siap untuk membuat terjemahan!

## Panel utama

Kamu mungkin telah memperhatikan bahwa sebuah ikon baru telah ditambahkan ke bilah sisi (*sidebar*) setelah kamu menginstal ekstensi. Ini adalah panel ZokuZoku, antarmuka utama untuk menavigasi aset yang bisa diterjemahkan dan meluncurkan editor.

![Main panel](/assets/translation-guide/using-zokuzoku/9.webp)

Bagian luar dari panel (*all stories, home dialogues,* dll.) disebut sebagai "*view*". Di dalam *view* ini terdapat daftar hal-hal yang bisa kamu terjemahkan (mungkin diurutkan ke dalam kategori, tergantung jenis *view*). Mengklik salah satu entri (dalam kategori) akan membuka *dict* translasi yang sesuai di editor khusus.

Beberapa *view* akan menampilkan kotak centang di samping nama entri. Kotak ini menunjukkan apakah *dict* untuk aset tersebut sudah ada atau belum.

![Lyrics view with checkboxes](/assets/translation-guide/using-zokuzoku/10.webp)

## Mengganti folder terjemahan

Hal pertama yang mungkin ingin kamu lakukan sebelum mengedit apa pun adalah mengganti folder terjemahan Hachimi (juga dikenal sebagai direktori *localized data*) ke salinan lokal terjemahan kamu. Dengan begitu, Hachimi akan memuat terjemahan dari salinan lokal alih-alih dari repositori *upstream*, sehingga kamu bisa meninjau hasilnya di dalam game jika diperlukan.

Untuk melakukannya, buka tampilan "Hachimi *Controls*" di panel. Klik tombol "*Set translation folder*" untuk menetapkannya. Setelah selesai mengerjakan terjemahan, jangan lupa klik tombol "*Revert translation folder*" untuk mengembalikannya.

![Hachimi Controls view](/assets/translation-guide/using-zokuzoku/26.webp)

## Editor

### Keanehan yang mengganggu

Sebelum kita masuk ke antarmuka utama editor, mari kita bahas terlebih dahulu sebuah keanehan besar darinya. Cobalah membuka salah satu aset yang belum diterjemahkan (dengan kotak centang di samping namanya tidak tercentang). Sesuatu yang aneh akan terjadi ketika editor dibuka.

![through the magic of buying two of them](/assets/translation-guide/using-zokuzoku/11.webp)

Kenapa ada dua editor yang terbuka pada saat yang sama? satu adalah editor khusus dan yang lainnya editor teks biasa? Ini merupakan keanehan bawaan dari cara kerja editor Visual Studio Code; menginisialisasi isi dari sebuah file baru akan menyebabkan editor teks terbuka dan “menahan konteks” dari file tersebut

Jika kamu menutup editor teks, editor khusus masih akan tetap terbuka, tetapi tidak bisa melakukan apa pun karena konteks file telah hilang (VSCode menganggap kamu sudah menutupnya). Jika kamu menutup editor khusus, keduanya akan tertutup.

Untungnya, keanehan ini relatif tidak merepotkan jika kamu sudah terbiasa dengan alur kerja tertentu.

- Ketika kamu membuka sebuah aset tetapi tidak ingin menerjemahkannya, **tutup tab editor khusus**, ini juga akan menutup tab lainnya.
- Jika kamu memang ingin menerjemahkannya, **simpan file terlebih dahulu**, editor khusus akan tertutup (agak laen!), tetapi sekarang kamu bisa menutup editor teks dan membuka kembali aset dari panel. Semuanya akan berfungsi sebagaimana mestinya.

### Antarmuka umum

Sebagian besar editor memiliki antarmuka yang sama persis dengan perilaku yang serupa.

![MDB editor](/assets/translation-guide/using-zokuzoku/12.webp)

Penggunaan dasar seharusnya sudah jelas; pilih sebuah entri untuk diterjemahkan, lalu masukkan hasil terjemahan kamu di panel "*Translated*". Warna entri menunjukkan status terjemahannya. Jika berwarna abu-abu, berarti entri tersebut belum diterjemahkan.

Setiap entri bisa memiliki beberapa "*slot* teks", yang bisa berarti hal berbeda tergantung editor yang digunakan. Misalnya, setiap entri di editor cerita memiliki *slot* teks untuk pembicara, isi dialog, pilihan, dan sebagainya.

Untuk sebagian besar editor, membiarkan semua *slot* teks kosong berarti entri tersebut tidak ada. Namun, terkadang kamu perlu membuat konten kosong alih-alih menghapus entri. Untuk itu, tekan Alt + Enter untuk menetapkannya sebagai string kosong secara eksplisit.

Panel di sisi kiri editor disebut "*Explorer*". Di sinilah kamu menavigasi entri dalam *dict* dengan mengkliknya. Jika *Explorer* sedang difokuskan (panel terakhir yang kamu klik), kamu bisa menggunakan tombol panah di *keyboard* untuk menavigasi. Kamu juga bisa melakukannya tanpa fokus ke *Explorer* terlebih dahulu dengan menekan Alt + tombol panah.

Sebagian besar editor mengikuti konvensi yang sama: tekan Panah Atas untuk menuju entri sebelumnya, tekan Panah Bawah untuk menuju entri berikutnya; meski perilaku ini bisa berbeda tergantung implementasi editor. kamu tidak bisa menavigasi antar kategori menggunakan tombol panah.

Kamu bisa memilih beberapa entri dengan menahan tombol Ctrl dan mengklik entri, atau menyeret kursor sambil menahan tombol kiri *mouse*. Ini tidak memengaruhi perilaku pengeditan terjemahan; apa pun yang kamu masukkan di panel *Translated* hanya akan berlaku untuk entri terakhir yang dipilih. Fitur ini dimaksudkan untuk digunakan bersama fungsi *Copy* (dijelaskan di bawah).

Selain navigasi, *Explorer* juga menawarkan beberapa fitur tambahan.

![Explorer panel features](/assets/translation-guide/using-zokuzoku/13.webp)

- Bilah pencarian bisa digunakan untuk mencari entri. Menekan ikon panah tepat di sebelahnya akan menampilkan opsi pencarian. Opsi "*Search in content*" bisa digunakan untuk mencari teks di dalam entri itu sendiri, bukan hanya berdasarkan nama secara bawaan.

Saat fungsi pencarian digunakan, sebuah *virtual view* akan dipakai untuk menampilkan entri yang cocok. Navigasi dengan tombol panah tidak akan berfungsi di sini. Kosongkan bilah pencarian untuk kembali ke view normal.

Pada judul panel, terdapat 3 tombol, dari kiri ke kanan:

- **Tombol *Copy*** Memungkinkan kamu untuk menandai entri agar siap disalin. Saat kamu mengkliknya dengan satu atau lebih entri terpilih, entri tersebut akan menampilkan garis putus-putus di sekelilingnya. Ini menandakan bahwa entri tersebut telah ditandai untuk penyalinan. Mengkliknya lagi (tanpa entri terpilih) akan menghapus status penyalinan mereka.
- **Tombol *Paste / Fill*** akan **menempel** atau **mengisi** entri yang sedang disalin ke entri yang saat ini dipilih.
- **Tombol *Clear*** menghapus konten terjemahan dari entri yang saat ini dipilih.

Sebagai contoh, jika kita hanya memiliki satu entri yang dipilih, maka konten yang disalin (atau di-*fill*) akan langsung ditempatkan ke dalam *slot* teks dari entri tersebut.
![An entry with its translated content](/assets/translation-guide/using-zokuzoku/14.webp)

Kita menandai entri tersebut untuk disalin, lalu memilih entri lain dan menempelkannya. Sistem akan menanyakan jumlah *slot* teks yang ingin kamu tempelkan.

![Paste input prompt](/assets/translation-guide/using-zokuzoku/15.webp)

Kita bisa membiarkannya kosong lalu menekan *Enter*. Konten akan disalin sebagaimana mestinya.

![Another entry, now with the pasted content](/assets/translation-guide/using-zokuzoku/16.webp)

Sekarang apa yang akan terjadi jika kita menandai beberapa entri untuk disalin dan juga menempelkannya ke beberapa entri?

![Selected entries and copying entries](/assets/translation-guide/using-zokuzoku/17.webp)

Semua entri yang dipilih akan diisi sebagaimana mestinya. Editor akan mengiterasi entri-entri yang dipilih, menempelkan konten dari entri yang disalin, dan ketika mencapai entri salinan terakhir, ia kembali ke entri salinan pertama dan mengulanginya hingga semua entri yang dipilih terisi.

![Third selected entry](/assets/translation-guide/using-zokuzoku/18.webp)

![Fourth selected entry](/assets/translation-guide/using-zokuzoku/19.webp)

::: info
Perilaku pengisian ini tidak berlaku untuk *slot* teks. Jika tujuan memiliki lebih banyak *slot* teks daripada sumber, maka hanya *slot* teks `n` dari sumber yang akan ditempelkan, sementara *slot* tambahan akan dibiarkan tidak tersentuh.
:::

### Editor cerita

Editor cerita adalah versi diperluas dari editor biasa dengan fitur tambahan untuk terjemahan cerita. Editor ini digunakan untuk cerita utama/karakter/event, dialog beranda, dan dialog latihan.

![Story editor](/assets/translation-guide/using-zokuzoku/20.webp)

#### Navigasi

Navigasi dengan tombol panah memiliki peran penting di sini. Tombol Panah Bawah akan membawa kamu ke blok berikutnya dalam cerita tersebut, yang tidak selalu merupakan entri berikutnya dalam daftar.

Sebagai contoh, perhatikan cerita ini yang memiliki blok terpisah untuk *trainer* laki-laki dan perempuan.

![Male and female trainer blocks](/assets/translation-guide/using-zokuzoku/21.webp)

Saat ini kami sedang memilih blok nomor 2. Biasanya, menekan Panah Bawah akan membawa ke blok nomor 3; namun, karena urutan logis cerita adalah berpindah dari blok laki-laki atau perempuan ke blok berikutnya, maka navigasi akan langsung melompat ke blok nomor 4.

Tombol Panah Atas berfungsi normal di sini, tetapi perlu diingat bahwa ia tidak akan mengikuti urutan asli cerita. Fitur ini berguna ketika kamu ingin kembali dari perilaku melompat untuk memilih blok yang dilewati.

Sangat disarankan untuk menggunakan tombol panah agar bisa menelusuri *dict* cerita sesuai urutan yang benar. Biasakan diri menggunakan kombinasi Alt + tombol panah untuk mempermudah.

#### Panel pratinjau

Tambahan yang paling jelas pada editor adalah dua panel ekstra di sisi kanan serta tombol tambahan pada panel induknya:
![Preview panels](/assets/translation-guide/using-zokuzoku/22.webp)

Panel-panel tersebut adalah panel pratinjau, yang dirancang untuk mereplikasi tampilan cerita dalam game sedekat mungkin. Secara umum, dimensi teks di dalam pratinjau ini sangat akurat, dan bisa dianggap cukup untuk memperkirakan bagaimana tampilannya sebenarnya.

Jika kamu menggunakannya di Windows, kemungkinan tampilan font akan terlihat sedikit aneh. Meski begitu, hal ini tidak banyak memengaruhi akurasi; terutama hanya bobot huruf yang agak berbeda.

::: info
Jika kamu belum menyadarinya, editor-editor ini berbasis web. Font game tidak dioptimalkan untuk web, sehingga menghasilkan tampilan yang agak aneh.
:::

Panel pratinjau untuk jenis cerita saat ini akan terbuka secara default (meskipun jenis cerita hanya diasumsikan dan mungkin tidak selalu akurat). Kamu bisa beralih ke panel pratinjau lain dengan mengklik tombol yang terkait pada bilah judul panel induk. Mengklik tombolnya lagi akan menutup panel pratinjau.

::: info
Elemen teks dalam panel pratinjau adalah *slot* teks “virtual”. Untuk *slot* teks terjemahan, ini berarti panel pratinjau tidak akan langsung diperbarui ketika konten diubah pada input *slot* teks, melainkan ketika konten terjemahan telah disimpan ke dalam file. Lihat bagian [Mekanisme internal](#mekanisme-internal) untuk informasi lebih lanjut tentang cara kerjanya.
:::

#### Aksi panel asli

Selain tombol pratinjau, panel asli memiliki 2 tombol tambahan, dari kiri ke kanan:

- **Tombol *Goto block*** Mengirim perintah IPC ke Hachimi untuk melompat ke blok cerita tertentu dalam game. Agar ini berfungsi, kamu perlu mengaktifkan "Nyalakan IPC" di konfigurasi Hachimi, dan kamu juga harus sedang melihat cerita yang sedang diterjemahkan di dalam game. Fitur ini berguna untuk memeriksa ulang apakah semuanya terlihat benar di dalam game.
- **Tombol Putar *voice clip*** Memutar klip suara untuk blok cerita saat ini. Ini hanya akan berfungsi untuk cerita yang memiliki pengisi suara.

#### *Slot* teks

Kecuali untuk entri "*Title*", semua entri dalam sebuah cerita memiliki setidaknya 2 slot teks: nama pembicara dan isi dialog. Bergantung pada blok cerita yang diwakili oleh sebuah entri, mungkin ada slot teks tambahan untuk pilihan dialog dan teks berwarna.

Slot teks pilihan memiliki sebuah "tautan" yang ditetapkan. Cobalah arahkan kursor ke atasnya di panel asli atau panel pratinjau; kamu akan melihat teks menjadi bergaris bawah, menandakan bahwa itu adalah slot teks dengan tautan ke entri lain. Kamu bisa menekan Ctrl + Klik kiri untuk mengikuti tautan ini, yang akan membawa kamu ke blok cerita yang dituju oleh pilihan tersebut.

Pilihan bisa memiliki variasi untuk pelatih laki-laki dan perempuan. Mari kita lihat sebuah contoh ekstrem:

![Mejiro Dober's story, part 4](/assets/translation-guide/using-zokuzoku/23.webp)

Tidak hanya blok cerita ini memiliki varian pilihan untuk laki-laki dan perempuan, blok cerita berikutnya yang dituju (nomor 3 atau 4) juga memiliki varian berdasarkan gender. Jika kita melihat varian perempuan untuk blok ini, kita akan menemukan bahwa ia juga memuat kedua varian pilihan, meskipun sebenarnya hanya ditampilkan untuk trainer perempuan.

Karena sistem yang agak aneh ini, kedua varian pilihan pada blok laki-laki akan ditautkan ke blok laki-laki berikutnya (nomor 3), dan sebaliknya pada blok perempuan (ditautkan ke nomor 4).

*Slot* teks pilihan ini memiliki *tooltip* untuk menunjukkan gender yang dituju, dan juga diberi kode warna pada panel pratinjau (pilihan normal selalu berwarna hijau, pilihan laki-laki berwarna biru, dan pilihan perempuan berwarna merah muda. Warna ini tidak ditentukan berdasarkan urutan seperti yang terjadi di dalam game)

![Choice text slot tooltip and color coded preview](/assets/translation-guide/using-zokuzoku/24.webp)

Jenis *slot* teks terakhir adalah *slot* teks berwarna. *Slot* ini digunakan untuk menandai bagian konten yang harus diberi warna. Mari kita lihat sebuah contoh:

![Story block with one color text slot](/assets/translation-guide/using-zokuzoku/25.webp)

*Slot* teks berwarna ditempatkan setelah semua *slot* teks lainnya. *Substring* pertama dalam konten yang cocok dengan potongan teks berwarna akan diberi warna. Panel pratinjau menunjukkan bagaimana hal ini bekerja, tetapi perlu dicatat bahwa warna tersebut hanya untuk tujuan referensi saja, dan mungkin tidak sama dengan warna yang digunakan di dalam game. Pastikan untuk mengikuti urutan sebagaimana ditampilkan pada panel asli agar warna bisa dicocokkan dengan benar.

## Mekanisme internal

*MASIH DIKERJAKAN

## Penggunaan lanjutan

### Buka kembali file di ZokuZoku

Terkadang kamu perlu membuka file *dict* secara langsung daripada membukanya melalui panel ZokuZoku. Hal ini akan meluncurkan editor teks bawaan, sehingga kamu perlu membukanya kembali di editor khusus ZokuZoku.

Buka *command bar* VSCode (Ctrl+Shift+P) dan jalankan perintah "*Reopen editor with*...". Pilih editor yang sesuai dari ZokuZoku untuk file *dict* kamu saat ini.

### *Split view* editor teks langsung

Kamu bisa membuka editor teks dan editor khusus secara bersamaan untuk melihat perubahan pada file secara langsung. Ini juga merupakan demonstrasi yang baik tentang bagaimana sistem bekerja secara internal.

Tekan Ctrl+\ untuk membuka tampilan terbagi. Saat fokus berada pada tampilan kedua, buka *command bar* VSCode (Ctrl+Shift+P) dan jalankan perintah "*Reopen editor with*...". Pilih editor teks bawaan.

Sekarang kamu bisa melakukan perubahan pada file menggunakan salah satu editor, dan perubahan tersebut akan tercermin di keduanya. Perlu dicatat bahwa editor khusus tidak akan melakukan apa pun jika konten file saat ini rusak (*malformed*).
