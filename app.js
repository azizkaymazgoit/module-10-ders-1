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


// Promise

// pending = bekleme durumu
// fullfilled = başarılı durumu 
// rejected = başarısız durumu


// ali'nin doğum günü partisi var
// poly pasta yapma sözü verdi
// sözü tutacak mı diye bekliyoruz
// poly hasta oldu - poly sağlıklı
// poly sağlıklı = doğum gününde pasta var
// poly hastalandı = doğum günü pastasız yapıldı

/*const polySaglikliMi = true;

const sozVerildiPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(polySaglikliMi) {
            resolve("Poly sağlıklı, pasta yaptı.")
        }else {
            reject("Poly hastalandı malesef pasta yok.")
        }
    }, 2000)
});

// then = olumlu sonucu yakalayan metod
// catch = olumsuz sonucu yakalayan metod

sozVerildiPromise
.then((sonuc) => {
    console.log(sonuc)
})
.catch((hata) => {
    console.log(hata)
})
.finally(() => {
    console.log("parti başlasın")
}) */


/* const promise = new Promise((res, rej) => {
    res(10)
})

promise
.then((sonuc) => {
    console.log("then1: ", sonuc)
    return sonuc
})
.then((data) => {
    const toplam = data * 2
    console.log("then2: ", toplam)
}) */

// api key buraya al
/* const apikey = "52238d7fab5c2c01b99e751619dd16ec";

// hangi api url'e istek atmam gerekioyr
const apidil = "tr-TR"

const apiurl = `https://api.themoviedb.org/3/movie/popular?page=1&api_key=${apikey}&language=${apidil}`;


const istekAt = fetch(apiurl)
.then((sonuc) => {
    return data = sonuc.json()
})
.then((data2) => {
    console.log(data2)
}) */


/* const storyGetirPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("Storyler")
    }, 10000)
})

const resimleriGetirPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("Resimler")
    }, 3000)
})

const videolariGetirPromise = new Promise((res, rej) => {
    setTimeout(() => {
        rej("Videolar")
    }, 4000)
}) */

/* Promise.all([storyGetirPromise, resimleriGetirPromise, videolariGetirPromise])
.then((sonuc) => {
    console.log(sonuc)
})
.catch((hata) => {
    console.log(hata)
}) */


/* Promise.allSettled([storyGetirPromise, resimleriGetirPromise, videolariGetirPromise])
.then((sonuc) => {
    console.log(sonuc)
})
.catch((hata) => {
    console.log(hata)
}) */

/* Promise.race([storyGetirPromise, resimleriGetirPromise, videolariGetirPromise])
.then((sonuc) => {
    console.log(sonuc)
})
.catch((hata) => {
    console.log(hata)
}) */

/* 
const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.container');
const result = document.querySelector('.result');

startBtn.addEventListener('click', handleStart);

function handleStart() {

  const promises = [...container.children].map(() => {
    
    return new Promise((resolve, reject) => {
      const random = Math.random();
      if (random > 0.5) {
        resolve('🤑');
      } else {
        reject('👿');
      }
    });

  });

  Promise.allSettled(promises).then(items => {

    console.log(items)
    
    const isWinner = items.every(item => item.status === 'fulfilled') || items.every(item => item.status === 'rejected');
    
    items.forEach((item, i) => {
      container.children[i].textContent = '';
      setTimeout(() => {
        container.children[i].textContent = item.value || item.reason;
        if (i === items.length - 1) {
          result.innerHTML = `${ isWinner ? 'Winner' : 'Loser' }`;
        }
      }, 1000 * (i + 1));
    });
  });

} */



// fetch - promise 


/* const userListEl = document.querySelector(".user-list");
const pEl = document.querySelector("p"); */



/* const options = {
    method: "GET",
    headers: {
        "X-Aziz": "Kaymaz",
        "Content-Type": "application/json",
        "Accept": "application/xml"
    },
    body: JSON.stringify({
        username: "azizkaymaz",
        password: "123456"
    })
} */

/* const parametreler = new URLSearchParams({
    _limit: 3,
    _sort: "name"
})

const url = `https://jsonplaceholder.typicode.com/users?${parametreler}`;

//fetch(url, options)
fetch(url)
.then(res => res.json())
.then((data) => {


    let icerik = "";

    data.forEach(user => {
        icerik += `<li>${user.name}</li>`
    });

    userListEl.innerHTML = icerik

})
.finally(() => {
    pEl.style.display = "none";
}) */

/* function fetchPokemon(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`).then(response => response.json());
}

const cardContainer = document.querySelector('.card-container');
const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;
  fetchPokemon(searchQuery).then(renderPokemonCard).catch(onFetchError).finally(form.reset);
}

function renderPokemonCard({name, sprites, weight, height, abilities}) {
  const abilityListItems = abilities.map(ability => `<li class="list-group-item">${ ability.name }</li>`).join('');
  const markup = `<div class="card">
   <div class="card-img-top">
     <img src="${ sprites.front_default }" alt="${ name }">
   </div>
   <div class="card-body">
     <h2 class="card-title">İsim: ${ name }</h2>
     <p class="card-text">Ağırlık: ${ weight }</p>
     <p class="card-text">Büyüme: ${ height }</p>

     <p class="card-text"><b>Yetenek</b></p>
     <ul class="list-group">${ abilityListItems }</ul>
   </div>
</div>`;
  cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert('Üzgünüz, bir hata oluştu ve Pokemonunuzu bulamadık!');
} */


// GET /kitaplar -- tüm kitapları listele
// GET /kitaplar/:id -- tek kitap datası
// POST /kitaplar
// PUT /kitaplar/:id
// DELETE /kitaplar/:id


/*
<li>
    <span>Kitap Adı:</span> Beyaz Diş <br />
    <span>Yazar:</span> Jack London <br />
    <span>Puan:</span> 4.5 <br />
    <span>Yıl:</span> 1903
</li>
*/


const base_url = "https://6824ca300f0188d7e72ad159.mockapi.io/api/v1"


// kitapları listele
const ulEl = document.querySelector(".books");
const kitaplariGetir = () => {
    fetch(`${base_url}/kitaplar`)
    .then(res => res.json())
    .then(kitaplar => {
        
        let icerik = "";

        kitaplar.forEach(kitap => {

            let date = new Date(kitap.yil);
            date = date.getFullYear();

            icerik += `
                <li>
                    <span>Kitap Adı:</span> ${kitap.kitapadi} <br />
                    <span>Yazar:</span> ${kitap.yazar} <br />
                    <span>Puan:</span> ${kitap.puan} <br />
                    <span>Yıl:</span> ${date} <br />
                    <span data-id="${kitap.id}" style="color: red; cursor: pointer;">Sil</span>
                </li>
            `;
        });

        ulEl.innerHTML = icerik


    })
}

kitaplariGetir();


// kitap oluştur

const kitapOlustur = (formDatasi) => {

    const opt = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(formDatasi)
    }

    fetch(`${base_url}/kitaplar`, opt).then(res => {
        if(res.ok) {
            kitaplariGetir()
        }
    })
}


const formEl = document.querySelector("#bookForm");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const formData = new FormData(formEl)

    const formPostData = {
        kitapadi: formData.get("kitapadi"),
        yazar: formData.get("yazar"),
        puan: formData.get("puan"),
        yil: formData.get("yil")
    }

    kitapOlustur(formPostData);

})



// kitap sil
const dataSil = (id) => {
    
    const opt = {
        method: "DELETE"
    }

    fetch(`${base_url}/kitaplar/${id}`, opt).then(res => {
        if(res.ok) {
            kitaplariGetir()
        }
    })

}

const container = document.querySelector(".container")

container.addEventListener("click", (e) => {
    
    const id = e.target.dataset.id;

    if(id) {
        dataSil(id);
    }

})