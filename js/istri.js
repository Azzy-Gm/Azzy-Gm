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
