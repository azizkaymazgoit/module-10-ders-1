/*

// 1000ms = 1s
function merhabaDe(isim) {
    console.log("Merhaba : ", isim)
}



console.log("merhaba 1")


const timeID = setTimeout(merhabaDe, 0, "Aziz")

console.log("time id: ", timeID)


console.log("merhaba 2")

console.log("merhaba 3") */



/* const baslaBtn = document.querySelector("#basla-button");
const bitirBtn = document.querySelector("#bitir-button");
const line = document.querySelector("#line");

let timeID;
let width = 0;

baslaBtn.addEventListener("click", () => {

    function animasyonYap() {

        console.log("aniamsyon başladı")

        if(width < 100) {

            timeID = setTimeout(animasyonYap, 700)
            width += 10;
            line.style.width = width + "%";
            console.log(timeID)
    
        }else {
            console.log("yükleme tamamlandı")
        }
    }

    animasyonYap();

})




bitirBtn.addEventListener("click", () => {

    if(timeID) {
        clearTimeout(timeID)
        width = 0;
        line.style.width = 0;
        console.log("animasyon durduruldu")
    }
    
}) */


/* function merhabaDe() {
    console.log("merhaba")
}

function merhabaDe2() {
    console.log("merhaba2")
}

setTimeout(merhabaDe2, 400);

const id = setInterval(merhabaDe, 400);

clearInterval(id) */

/* function sayiGetir() {
    console.log(Math.random(0,1))
}

const timeID = setInterval(sayiGetir, 400)


const bitirBtn = document.querySelector("#bitir-button");

bitirBtn.addEventListener("click", () => {
    clearInterval(timeID)
}) */

/*
const NOTIFICATION_DELAY = 2000;

let timeoutId = null;

const notification = document.querySelector('.js-alert');

function onNotificationClick() {
    hideNotification();
    clearTimeout(timeoutId);
}

function showNotification() {
    notification.classList.add('is-visible');
    timeoutId = setTimeout(() => {
      console.log('Bildirimi otomatik olarak kapatıyoruz, böylece açık kalmaz');
      hideNotification();
    }, NOTIFICATION_DELAY);
}


function hideNotification() {
    notification.classList.remove('is-visible');
}


notification.addEventListener('click', onNotificationClick);

showNotification(); */



// date

// console.log(Date.now())

// const suan = new Date("2020-02-10T14:00");

/* const suan = new Date("1920");

console.log(suan) */

// console.log(Date.now())

/* const yaziTarihi = new Date("2025-05-01");

function kacGun(tarih) {

    const suan = new Date();
    const fark = suan - tarih.getTime();

    const gun = 1000 * 60 * 60 * 24;

    const gecenGunSayisi = Math.floor(fark / gun)

    console.log(`Bu yazı ${gecenGunSayisi} gün önce yazılmıştır.`)


}

kacGun(yaziTarihi) */

/* const yaziTarihi = new Date("2025-05-01");
const suan = new Date();

console.log((suan - yaziTarihi) / (1000 * 60 * 60 * 24)) */

/* const suan = new Date();
console.log(suan)
suan.setMonth(2)
console.log(suan) */