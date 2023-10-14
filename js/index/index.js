var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2023-10-14&' +
          'sortBy=popularity&' +
          'apiKey=c6e8c9fd6b4c49358ad9dda1a14e33b8';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })