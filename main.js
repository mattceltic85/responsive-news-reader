//add event listener to form button
document.getElementById("query-news").addEventListener("submit", function(e) {
  e.preventDefault();
  //define a constant from submitted text
  const newsResult = document.getElementById("submit-text").value
  //add news result as inner HTML text to form section of website to show what user searched for.
  document.getElementById("search-query").innerHTML = newsResult
  //base url Below
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=${newsResult}&apiKey=21296f5cdaf34de1af2425850a11f428`
  console.log(apiUrl)
  //Api fetch
  fetch(apiUrl)
    // .then((res) => {
    //   return res.json()
    // }) see below side by side use of old school JS and then arrow function
    .then(function(res) {
      return res.json();
    })
    .then((apiJson) => {
      console.log(apiJson.articles);

      // apiJson.Search.forEach(function(article){
      //   console.log(article.Title);
      //   document.getElementById("search-results").innerHTML += article.Title + " - " + article.Year

      let news = apiJson.articles;
      let result = "";
      return news.forEach(function(article) {
        console.log(article);
        if(article.urlToImage){
          result +=
            `<div class="card">
            <h2>${article.title}</h2>
            <h2>${article.publishedAt}</h2>
            <h2>${article.author}</h2>
            <ul>
            <img class="card-image" src=${article.urlToImage}" alt="News image">
            </ul>
            <h2 class="card-description-text">${article.description}</h2>
            </div>`
        } else {
          result +=
            `<div class="card">
            <h2>${article.title}</h2>
            <h2>${article.publishedAt}</h2>
            <h2>${article.author}</h2>
            <ul>
            </ul>
            <h2 class="card-description-text">${article.description}</h2>
            </div>`
        }

        document.getElementById('result').innerHTML = result;
      })

    })

});
