window.onload = function() { //fungsi ini akan dijalankan ketika halaman selesai dimuat
    document.querySelectorAll('.cv-content').forEach(function(cv) { //untuk menyembunyikan semua elemen dengan class "cv-content" yaitu none
        cv.style.display = 'none';
    });
    document.getElementById('cv1').style.display = 'block'; //untuk menampilkan cv1 ketika pertama kali buka halamannya
}

function goCv(n) { //fungsi ini akan dijalankan ketika tombol cv1, cv2, atau cv3 diklik
    document.querySelectorAll('.cv-content').forEach(function(cv) {
        cv.style.display = 'none';
    });
    document.getElementById('cv' + n).style.display = 'block'; //untuk menampilkan cv1, cv2, atau cv3 sesuai dengan tombol yang diklik
}

document.querySelectorAll('a[href^="#"]').forEach(link => { //untuk menambahkan event listener pada semua link yang memiliki href yang ada "#"
    link.addEventListener('click', function(e) { 
        e.preventDefault(); //untuk ngecegah "#" melakukan aksi default/scroll ke atas halaman
        const targetId = this.getAttribute('href').substring(1); //untuk mengambil id dari elemen yang dituju oleh link tersebut
        const target = document.getElementById(targetId);
        if (target) { //untuk mengecek apakah elemen dengan id tersebut ada atau tidak
            target.scrollIntoView({ //untuk melakukan scroll ke elemen tersebut dengan smooth scroll dan posisinya pas di tengah layar
                behavior: 'smooth',
                block: 'center'
            });

        }
    });
});