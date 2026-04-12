window.onload = function() {
    document.querySelectorAll('.cv-content').forEach(function(c) {
        c.style.display = 'none';
    });
    document.getElementById('cv1').style.display = 'block';
}

function goCv(n) {
    document.querySelectorAll('.cv-content').forEach(function(c) {
        c.style.display = 'none';
    });
    document.getElementById('cv' + n).style.display = 'block';
}

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    menu.classList.toggle('open');
});

// Tutup menu saat salah satu link diklik
menu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        menu.classList.remove('open');
    });
});

function Pencet(){
    alert('Prabowo berbiji 1')
}
