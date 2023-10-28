const cardsList = document.getElementsByClassName("news-card")
const cards = document.querySelector(".news-cards")

const showMore = document.getElementById("show-more");
let db

const createCard = (data) => {
    cards.insertAdjacentHTML(
        "beforeend",
        `<article class="news-card">
        <a href="${data.articles[cardsList.length].url}">
            <img src="${data.articles[cardsList.length].urlToImage}" alt="news-img" draggable="false" width="355px" height="200px">
            <div class="text-main-news">
                <h2 class="head-main-news">${data.articles[cardsList.length].title}</h2>
                <p class="description-main-news">${data.articles[cardsList.length].description}</p>
                <small class="src-main-news">${data.articles[cardsList.length].author || ""}</small>
            </div>
        </a>
        </article>   `
    )
}

console.log(cards);

let url = 'https://newsapi.org/v2/everything?' +
    'q=политика&' +
    'language=ru&' +
    'from=2023-10-13&' +
    'sortBy=popularity&' +
    'apiKey=c6e8c9fd6b4c49358ad9dda1a14e33b8';

let req = new Request(url);

fetch(req)
    .then(res => res.json())
    .then(data => {
        createCard(data);
        createCard(data);
        createCard(data);
        db = data;
    })
    showMore.addEventListener("click", () => {
        if(db.articles.length-cardsList.length) {
            createCard(db);
            createCard(db);
            createCard(db);
        }
        else{
            showMore.style.display = "none";
        }
    })