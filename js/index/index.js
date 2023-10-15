let url = 'https://newsapi.org/v2/everything?' +
          'q=Путин&' +
          'from=2023-10-14&' +
          'sortBy=popularity&' +
          'apiKey=c6e8c9fd6b4c49358ad9dda1a14e33b8';

let req = new Request(url);

fetch(req)
    .then(res => res.json())
    .then(data => console.log(data))