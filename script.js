// Surat
function showCard() {
    document.getElementById("card").classList.add("show");
    document.getElementById("bgMusic").play();
}

// Gift
function showGift() {
    document.getElementById("gift").style.display = "block";

    document.getElementById("gift").scrollIntoView({ behavior: "smooth" });
}
function revealGift() {
    document.getElementById("gift").style.display = "none";
    document.getElementById("giftMessage").style.display = "block";
}

const secretBtn = document.getElementById("secretBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

secretBtn.addEventListener("click", () => {
  popup.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("active");
});

// Tutup popup kalau klik luar konten
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
  }
});

function showGallery() {
document.getElementById("galleryModal").style.display = "block";
}
function closeGallery() {
document.getElementById("galleryModal").style.display = "none";
}

// kata kata //

const quotes = [
    "Ga butuh kata-kata, senyuman si kesayangan aja udah puas",
    "Tau lagu 'I say little pray for you?', lagu itu menceritakan tentang aku mengucapkan sedikit doa untuk kita bisa bertemu",
    "Suka suka lo deh, eh tapi emang suka :3",
    "bukan muji, tapi hari ini kamu imut dehh",
    "ALYA = As Long You Awesome, i love it :)",
    "Jujur males sekolahh, tapi gapapa kalau kamu masuk jadi ga males",
    "Aku lebih suka Waktu Indonesia Timur, karena i want to be WIT you",
    "Hidup itu ambil fun aja, tapi kalo aku mending ambil kamu",
    "Yang baca ini moga imutt, EHH UPSS",
    "Di bahasa inggris, He's itu he is, She's itu she is, They're itu they are, kalo You're itu punyaku",
    "Be Yourself and Never Forget Be Mine :3" 
];

function generateQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[random];
} 

// //   Lagu //
// const audioPlayer = document.getElementById("audio-player");
// const judulLagu = document.getElementById("judul-lagu");

// function playSong(file, title) {
//     audioPlayer.src = file;
//     audioPlayer.play();
//     judulLagu.textContent = "Sedang diputar: " + title;

// }

