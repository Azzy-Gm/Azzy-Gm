// main.js untuk file yang kontak.html saja dan saya pisah file js lainnya untuk file html yang lainnya (profile.html)
// disini saya menggunakan operator aritmatika yaitu yang pengurangan (-) untuk menghitung sisa karakter
// dan operator perbandingan (===), (< dan >), dan operator logika (||) untuk mengecek field kosong pada form kontak jika formnya blum diisi nanti akan tampil pemberitahuan
// tambahannya saya pakai if condition

//pertama
// Ambil elemen-elemen yang dibutuhkan
const form = document.getElementById("formKontak");
const masukanNama = document.getElementById("nama");
const masukanPesan = document.getElementById("pesan");
const teksSisaKarakter = document.getElementById("sisaKarakter");
const MAKS_KARAKTER = 200; // buat batas kata katanya hanya sampe 200

//if condition untuk sisa batas maksimal pesan, jika sedang mengetik di keybord angka sisa karakternya muncul
if (masukanPesan) {
    masukanPesan.addEventListener("keydown", function () { // event listener untuk mendeteksi ketika menekan tombol pada keyboard

        // penggunaan operator aritmatika (-) untuk menghitung sisa karakter
        const sisa = MAKS_KARAKTER - masukanPesan.value.length;
        teksSisaKarakter.textContent = "Sisa karakter: " + sisa;
    });
}

//penggunaan operatot perbandingnan (===), (<dan>), dan dengan operator logika (||) untuk cek formnya masih kosong/tidak
if (form) {
    form.addEventListener("submit", function (norefresh) {
        norefresh.preventDefault(); // untuk supaya ketika submit di pencet ga ke refresh halamannya

        const nama = masukanNama.value.trim();
        const pesan = masukanPesan.value.trim();

        //if condition untuk cek panjang karakter nama dan pesan dan penggunaan operator perbandingan (>) dan (<) untuk cek panjang karakter nama dan pesan
        if (nama.length > 20) {
            alert("Nama tidak boleh lebih dari 20 karakter!");
            return;
        }

        if (pesan.length < 5) {
            alert("Pesan tidak boleh kurang dari 5 karakter!");
            return;
        }

        // Operator perbandingan (===) dengan
        // operator logika (||) untuk mengecek field kosong
        if (nama === "" || pesan === "") {
            alert("Mohon isi semua kolom sebelum mengirim pesan.");
            return;
        }
        //output jika semua kondisi sudah terpenuhi (mirip sama kaya phytonn print("..."))
        alert("Terima kasih, " + nama + ". Pesan Anda sudah berhasil dikirim, berisi : " + pesan);
        form.reset(); // untuk mereset isi formnya setelah submit
        teksSisaKarakter.textContent = "Sisa karakter: " + MAKS_KARAKTER; //reset juga sisa karakter setelah submit
    });
}
