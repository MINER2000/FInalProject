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

let url = 'https://newsapi.org/v2/everything?' +
          'q=политика&' +
          'language=ru&'+
          'from=2023-10-13&' +
          'sortBy=popularity&' +
          'apiKey=c6e8c9fd6b4c49358ad9dda1a14e33b8';

let req = new Request(url);

fetch(req)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        linkMainNews1.setAttribute("href", data.articles[0].url)
        newsImg1.setAttribute("src", data.articles[0].urlToImage)
        hMainNews1.textContent = data.articles[0].title
        dMainNews1.textContent = data.articles[0].description
        srcMainNews1.textContent = data.articles[0].author

        linkMainNews2.setAttribute("href", data.articles[1].url)
        newsImg2.setAttribute("src", data.articles[1].urlToImage)
        hMainNews2.textContent = data.articles[1].title
        dMainNews2.textContent = data.articles[1].description
        srcMainNews2.textContent = data.articles[1].author

        linkMainNews3.setAttribute("href", data.articles[2].url)
        newsImg3.setAttribute("src", data.articles[2].urlToImage)
        hMainNews3.textContent = data.articles[2].title
        dMainNews3.textContent = data.articles[2].description
        srcMainNews3.textContent = data.articles[2].author
    })