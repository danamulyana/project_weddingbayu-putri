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

document.getElementById('submit-rsvp').addEventListener('click', async function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const confirmation = document.getElementById('confirmation').value;
  
    if (!name || !message || !confirmation) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Create the payload for the API request
    const data = {
        eventId: "bayu&putri2024",
        name: name,
        message: message,
        confirmation: confirmation
    };
  
    try {
      // Send data to the API endpoint using fetch
      const response = await fetch('https://rsvp-danamulyana.vercel.app/api/rsvp', { // Replace with actual API URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      const result = await response.json();
  
      if (response.ok) {
        console.log(result);
        // Update the counts and the comments section
        // updateAttendanceCounts(result.attendanceCounts);
        appendNewComment(data);
  
        // Clear the form
        document.getElementById('attendanceForm').reset();
      } else {
        // Handle error returned by the server
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Failed to submit. Please try again later.');
    }
});
  
  // Function to update the counts in the UI
function updateAttendanceCounts(counts, totalRSVP) {
    console.log(totalRSVP)
    document.querySelector('.rsvp-attendance__comments-count span').innerText = totalRSVP;
    document.querySelector('.hadir').innerText = counts.hadir;
    document.querySelector('.tidak-hadir').innerText = counts.tidakHadir;
    document.querySelector('.ragu').innerText = counts.masihRagu;
}
  
  // Function to append a new comment to the comments section
function appendNewComment(data) {
    const commentsSection = document.getElementById('comments-section');
  
    const commentDiv = document.createElement('li');
    commentDiv.classList.add('rsvp-attendance__comments--section_item');
  
    const commentContent = `
        <div class="comment-item__content">
            <div class="comment-item__content-info">
                <h2>${data.name}</h2>
                <span data-tooltip="${data.confirmation.replace("_", " ")}">${data.confirmation === 'hadir' ? '<i class="fa-solid fa-circle-check"></i>' : data.confirmation === 'tidak-hadir' ? '<i class="fa-solid fa-circle-xmark"></i>' : '<i class="fa-solid fa-circle-question"></i>'}</span>
            </div>
            <div class="comment-item__content-body">
                <p>${data.message}</p>
            </div>
            <div class="comment-item__content-footer">
                <i class="fa fa-clock"></i><p>${timeAgo(data.createdAt)}</p>
            </div>
        </div>  
    `;
    
    commentDiv.innerHTML = commentContent;
    commentsSection.appendChild(commentDiv);
}  

function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
  
    let interval = Math.floor(seconds / 31536000); // 1 year = 31536000 seconds
    if (interval >= 1) {
      return interval === 1 ? `${interval} tahun yang lalu` : `${interval} tahun yang lalu`;
    }
  
    interval = Math.floor(seconds / 2592000); // 1 month = 2592000 seconds
    if (interval >= 1) {
      return interval === 1 ? `${interval} bulan yang lalu` : `${interval} bulan yang lalu`;
    }
  
    interval = Math.floor(seconds / 86400); // 1 day = 86400 seconds
    if (interval >= 1) {
      return interval === 1 ? `${interval} hari yang lalu` : `${interval} hari yang lalu`;
    }
  
    interval = Math.floor(seconds / 3600); // 1 hour = 3600 seconds
    if (interval >= 1) {
      return interval === 1 ? `${interval} jam yang lalu` : `${interval} jam yang lalu`;
    }
  
    interval = Math.floor(seconds / 60); // 1 minute = 60 seconds
    if (interval >= 1) {
      return interval === 1 ? `${interval} menit yang lalu` : `${interval} menit yang lalu`;
    }
  
    return `Baru saja`; // If less than a minute ago
}  

const loadRSVP = async () => {
    const responseCount = await fetch('https://rsvp-danamulyana.vercel.app/api/rsvp/bayu&putri2024/count', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
    });

    const response = await fetch('https://rsvp-danamulyana.vercel.app/api/rsvp/bayu&putri2024', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
    });

    const result = await response.json();
    const resultCount = await responseCount.json();

    if (response.ok && responseCount.ok) {
        updateAttendanceCounts(resultCount.counts, resultCount.totalRSVP);
        result.map(data => {
            appendNewComment(data);
        })

        // Clear the form
        document.getElementById('attendance-form').reset();
        } else {
        // Handle error returned by the server
        alert(`Error: ${result.message}`);
    }
}

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

     loadRSVP();    

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

    const tooltip = document.createElement('div');  // Create tooltip element
    tooltip.classList.add('tooltip');               // Add tooltip class
    document.body.appendChild(tooltip);             // Append tooltip to the body

    // Event listener for mouseenter (when hovering)
    document.querySelectorAll('[data-tooltip]').forEach(function (element) {
        element.addEventListener('mouseenter', function (e) {
            const tooltipText = element.getAttribute('data-tooltip');  // Get tooltip text from data-tooltip attribute
            tooltip.innerText = tooltipText;                           // Set tooltip text
      
            const rect = element.getBoundingClientRect();              // Get element position
            const tooltipX = rect.left + window.scrollX + (rect.width / 2) - (tooltip.offsetWidth / 2);
            const tooltipY = rect.top + window.scrollY - tooltip.offsetHeight - 10; // Position above element with extra space for arrow
      
            tooltip.style.left = `${tooltipX}px`;
            tooltip.style.top = `${tooltipY}px`;
      
            tooltip.classList.add('visible');                          // Show tooltip
        });
      
        // Event listener for mouseleave (when no longer hovering)
        element.addEventListener('mouseleave', function () {
            tooltip.classList.remove('visible');                       // Hide tooltip
        });
      
          // Event listener for mouse movement, in case the tooltip position needs to be dynamic
        element.addEventListener('mousemove', function (e) {
            const tooltipX = e.pageX - (tooltip.offsetWidth / 2);
            const tooltipY = e.pageY - tooltip.offsetHeight - 10;
      
            tooltip.style.left = `${tooltipX}px`;
            tooltip.style.top = `${tooltipY}px`;
        });
    });
})