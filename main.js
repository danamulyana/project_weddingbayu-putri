const params = new URLSearchParams(window.location.search);
const elemetsInvitation = document.querySelectorAll('[data-invitation="dear"]');
const WeddingDate = new Date("2024-09-26T08:00:00");

var swiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    loop: true,
    allowTouchMove: false,
    fadeEffect: {
      crossFade: true,
    },
    speed: 2000,
});

var swiper = new Swiper('.thank-container', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    loop: true,
    allowTouchMove: false,
    fadeEffect: {
      crossFade: true,
    },
    speed: 2000,
});

var swiperGalery = new Swiper('.galery__body-container', {
    autoplay: {
      delay: 10000, 
      disableOnInteraction: false, 
    },
    effect: 'slide',
    loop: true,
    allowTouchMove: false,
    speed: 2000,
});

const openCalender = () => {
    let endDateTime = new Date(WeddingDate.getTime() + 1 * 60 * 60 * 1000);

    let formattedStartDateTime = WeddingDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    let formattedEndDateTime = endDateTime.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    // Google Calendar URL format
    let calendarURL = 'https://www.google.com/calendar/render?action=TEMPLATE' +
        '&text=The+Wedding+Of+Bayu+%26amp;+Putri' + 
        '&dates=' + formattedStartDateTime + '/' + formattedEndDateTime +
        '&details=Bergabunglah%20dengan%20kami%20dalam%20merayakan%20persatuan%20indah%20antara%20Bayu%20saputra%20Amd.Kep%20dan%20Putri%20Dinda%20Pratiwi%20Amd.%20Kep%20saat%20mereka%20memulai%20perjalanan%20hidup%20mereka%20bersama.%20Upacara%20pernikahan%20ini%20akan%20menjadi%20momen%20yang%20hangat%20dan%20penuh%20kebahagiaan%2C%20dipenuhi%20dengan%20cinta%2C%20tawa%2C%20dan%20kenangan%20yang%20berharga.%0A%0ATanggal%3A%2026%20September%202024%0AWaktu%3A%2008%3A00%20%0ATempat%3A%20Kp.%20mareleng%20005%2F007%20ds%20bojongsari%2C%20kec%20kedung%20waringin%2C%20kab%20bekasi%0A%0AKami%20sangat%20menantikan%20kehadiran%20keluarga%20dan%20teman-teman%20dalam%20hari%20istimewa%20ini.%20Kehadiran%20Anda%20akan%20menambah%20kebahagiaan%20dan%20menciptakan%20kenangan%20yang%20akan%20dikenang%20selamanya.%0A%0ADengan%20cinta%2C%0ABayu%20%26%20Putri%0A' + 
        '&location=%20Kp.%20mareleng%20005%2F007%20ds%20bojongsari%2C%20kec%20kedung%20waringin%2C%20kab%20bekasi';
    
    // Open Google Calendar in a new window
    window.open(calendarURL, '_blank');
}

const confirmGift = () =>  {
    var phoneNumber = "6281234567890"; // Ganti dengan nomor tujuan
    var message = "Halo, saya ingin mengkonfirmasi bahwa saya telah mengirimkan angpao untuk pernikahan [Nama Pengantin] melalui transfer bank. Jumlah yang dikirimkan adalah sebesar [nominal angpao], dan telah ditransfer ke rekening [nama bank] dengan nomor rekening [nomor rekening]. Terima kasih!";
    var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    window.open(whatsappUrl, '_blank');
}

/**
 * MUSIC
 */

let isMusicAtemp = false,
    isMusicPlaying = false,
    playBoxAnimation,
    pauseBoxAnimation,
    pauseMusic,
    playMusic;

(function backgroundMusic() {
    const backgroundMusic = document.createElement("audio");    // Background Music
        backgroundMusic.autoplay = true;
        backgroundMusic.muted = true;
        backgroundMusic.loop = true;
        backgroundMusic.load();
        backgroundMusic.src = '/Assets/music/song1.weba';

    // Playing Box Animation
    playBoxAnimation = function() {
        if (!document.querySelector('.music-button').classList.contains('playing')) {
            document.querySelector('.music-button').classList.add('playing');
        }
    }

    // Pause Box Animation
    pauseBoxAnimation = function() {
        if (document.querySelector('.music-button').classList.contains('playing')) {
            document.querySelector('.music-button').classList.remove('playing');
        }
    }

    // Pause Music
    pauseMusic = function() {
        backgroundMusic.pause();
        pauseBoxAnimation();

        isMusicAtemp = true;
        isMusicPlaying = false;                
    };

    // Play Music
    playMusic = function() {
        isMusicAtemp = false;
        backgroundMusic.muted = false;
        var promise = backgroundMusic.play();

        if (promise !== undefined) {
            promise.then(_ => {
                isMusicPlaying = true;
                // console.log('Audio berhasil diputar');
                playBoxAnimation();
            }).catch(error => {
                isMusicPlaying = false;
                // console.log('Tidak dapat memutar audio');
                pauseBoxAnimation();
                // console.log(error);
            });
        }
    };

    // Music Box
    document.querySelector('#button-music').addEventListener('click', function(e) {
        e.preventDefault();

        if (isMusicPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });
}())

function playMusicOnce(){
    if(typeof playMusic === 'function'){
        if(!isMusicAtemp && !isMusicPlaying){
            setTimeout(playMusic, 500);
        }
    }
}

// Event listener untuk memutar musik saat window dimuat, di-klik, atau di-scroll
window.addEventListener("load", playMusicOnce);
window.addEventListener("click", playMusicOnce);
window.addEventListener("scroll", playMusicOnce);

// Event listener tambahan untuk memutar musik saat dokumen di-klik atau di-scroll
document.addEventListener("click", playMusicOnce);
document.addEventListener("scroll", playMusicOnce);

const musicShow = () => {
    const musicShow = document.getElementById('button-music')
    // when the scroll is heigher than 200 viewpoint height 
    if(this.scrollY >= 200){
        musicShow.classList.add('show')
    }else{
        musicShow.classList.remove('show')
    }
}
window.addEventListener('scroll', musicShow)

window.onload = function() {
    // Saat halaman dimuat ulang, scroll kembali ke section pertama (section .top)
    setTimeout(() => {
        window.scrollTo(0, 0);
    },100)
  
    // Pastikan scroll terkunci saat reload
    document.body.classList.remove('allow-scroll');
    document.documentElement.style.overflow = 'hidden'; // Mengunci scroll pada elemen html
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('open-invitation').addEventListener('click', function() {
        // Mengarahkan scroll ke section kedua
        window.scrollTo({
            top: document.querySelector('#calenderofWedding').offsetTop,
            behavior: 'smooth'
        });
        
        document.documentElement.style.overflow = '';

        // Mengizinkan scroll setelah tombol diklik
        document.body.classList.add('allow-scroll');
    });

    //
    const dear = params.get('dear');

    elemetsInvitation.forEach((elem) => {
        if(dear == null){
            elem.textContent = "Nama Tamu";
        }else{
            elem.textContent = dear;
        }
    })

    document.querySelector('#saveCalendar').addEventListener("click", (e) => {
        e.stopPropagation();
        openCalender();
    })

    let clipboard = new ClipboardJS('button[data-button="clipboard"]');

    clipboard.on('success', function(e) {
        let elem =  e.trigger.innerHTML;

        e.trigger.innerText = "Berhasil di salin"
        
        setTimeout(() => {
            e.trigger.innerHTML = elem;
        },1000);
    
        e.clearSelection();
    });

    // Update countdown setiap 1 detik
    var countdownInterval = setInterval(function() {
        // Ambil waktu sekarang
        var now = new Date().getTime();

        // Hitung selisih waktu antara target date dan sekarang
        var timeRemaining = WeddingDate.getTime() - now;

        // Hitung hari, jam, menit, dan detik yang tersisa
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update nilai countdown di HTML
        document.querySelector("[data-countdown='days']").innerHTML = days;
        document.querySelector("[data-countdown='hours']").innerHTML = hours;
        document.querySelector("[data-countdown='minutes']").innerHTML = minutes;
        document.querySelector("[data-countdown='seconds']").innerHTML = seconds;

        // Jika countdown selesai, berhenti dan tampilkan pesan
        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            document.querySelector("[data-countdown='days']").innerHTML = "00";
            document.querySelector("[data-countdown='hours']").innerHTML = "00";
            document.querySelector("[data-countdown='minutes']").innerHTML = "00";
            document.querySelector("[data-countdown='seconds']").innerHTML = "00";
            alert("Countdown selesai!");
        }
    }, 1000);

    //scroll reveal

    const sr = ScrollReveal({
        distance: '60px',
        duration: 2800,
        // reset: true
    })

    sr.reveal('#calenderofWedding',{
        delay: 500
    })
    
    sr.reveal('.widget-top__container, .widget-data, .container-ourpray, .container-ourlove__heading-galery, .section-weddingdate__body--icon, .galery-item, .gift-container__heading, .thankyou__container--title', {
        interval: 100
    })

    sr.reveal('.widget-countdown__container, .section-weddingdate__heading, .section-weddingdate__body--location, .thankyou__container--heading',{
        origin: 'top',
        interval: 100
    })

    sr.reveal('.container-ourlove__heading, .galery__head, .thankyou__container--separator, .footer-header',{
        origin: 'left',
    })
    sr.reveal('.reverse > .galery__head, .galery__body-widget, .section-weddingdate__body--date > h2, .gift-container__rekening',{
        origin: 'right',
    })
    sr.reveal('.reverse > .galery__body > .galery__body-widget, .section-weddingdate__body--date > h3, .gift-container__rekening:nth-child(2)',{
        origin: 'left',
    })
})