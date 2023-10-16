const linkMainNews1 = document.getElementById("link-main-news-1");
const newsImg1 = document.getElementById("news-img-1");
const hMainNews1 = document.getElementById("head-main-news-1");
const dMainNews1 = document.getElementById("description-main-news-1");
const srcMainNews1 = document.getElementById("src-main-news-1");

const linkMainNews2 = document.getElementById("link-main-news-2");
const newsImg2 = document.getElementById("news-img-2");
const hMainNews2 = document.getElementById("head-main-news-2");
const dMainNews2 = document.getElementById("description-main-news-2");
const srcMainNews2 = document.getElementById("src-main-news-2");

const linkMainNews3 = document.getElementById("link-main-news-3");
const newsImg3 = document.getElementById("news-img-3");
const hMainNews3 = document.getElementById("head-main-news-3");
const dMainNews3 = document.getElementById("description-main-news-3");
const srcMainNews3 = document.getElementById("src-main-news-3");

const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");

let limit = 0;
let n = 0;

const init = (data, n = 0) => {
    linkMainNews1.setAttribute("href", data.articles[n].url)
    newsImg1.setAttribute("src", data.articles[n].urlToImage)
    hMainNews1.textContent = data.articles[n].title
    dMainNews1.textContent = data.articles[n].description
    srcMainNews1.textContent = data.articles[n].author

    n = ++n;

    linkMainNews2.setAttribute("href", data.articles[n].url)
    newsImg2.setAttribute("src", data.articles[n].urlToImage)
    hMainNews2.textContent = data.articles[+ n].title
    dMainNews2.textContent = data.articles[n].description
    srcMainNews2.textContent = data.articles[n].author

    n = ++n;

    linkMainNews3.setAttribute("href", data.articles[n].url)
    newsImg3.setAttribute("src", data.articles[n].urlToImage)
    hMainNews3.textContent = data.articles[n].title
    dMainNews3.textContent = data.articles[n].description
    srcMainNews3.textContent = data.articles[n].author

    n = ++n;
}

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
        console.log(data)
        init(data)
        limit = data.articles.length
        console.log(limit);
    })

arrowRight.addEventListener("click", () => {
    fetch(req)
        .then(res => res.json())
        .then(data => {
            init(data, n)
            console.log(data)
        })

    n = n + 3;
})

arrowLeft.addEventListener("click", () => {
    fetch(req)
        .then(res => res.json())
        .then(data => {
            init(data, n)
            console.log(data)
        })

    n = n - 3;
})