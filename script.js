function updateCountdown() {
    const now = new Date();  // Gaukime dabartinę datą
    const saleStartDate = new Date(2024, 11, 23);  // Gruodžio 23 d. 2024 m. (11 = Gruodis)

    // Jei dabartinė data yra po išpardavimo pradžios, užrašome 0 laiką
    if (now >= saleStartDate) {
        document.getElementById('days').textContent = "00";
        document.getElementById('hours').textContent = "00";
        document.getElementById('minutes').textContent = "00";
        document.getElementById('seconds').textContent = "00";
        return;  // Išeiname, jei išpardavimas jau prasidėjo
    }

    // Apskaičiuojame skirtumą
    const timeRemaining = saleStartDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)); // Dienos
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Valandos
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)); // Minutės
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000); // Sekundės

    // Atnaujiname DOM su reikšmėmis
    document.getElementById('days').textContent = formatTime(days);
    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
}

// Funkcija, kuri prideda nulį prie skaičių mažesnių nei 10
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Atnaujiname laikrodį kas sekundę
setInterval(updateCountdown, 1000);
updateCountdown(); // Pradinė būsena

const images = [
    'images/cover1.jpg',
    'images/cover2.jpeg',
    'images/cover3.jpeg',
    'images/cover4.jpg',
    'images/cover5.jpg'
];

let currentImageIndex = 0;

function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.querySelector('.hero').style.backgroundImage = `url(${images[currentImageIndex]})`;
}

setInterval(changeBackgroundImage, 3000);


