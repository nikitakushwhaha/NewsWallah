document.getElementById('newsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var category = document.getElementById('category').value;
    var country = document.getElementById('country').value;
    var url = 'https://newsapi.org/v2/top-headlines?apiKey=8e5d51d95ff44de4b90d00c0af7a1a0c&category=' + category + '&country=' + country;
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            displayNews(data.articles);
        })
        .catch(function(error) {
            console.log(error);
        });
});

function displayNews(articles) {
    var newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = '';

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var titleElement = document.createElement('h2');
        titleElement.textContent = article.title;

        var descriptionElement = document.createElement('p');
        descriptionElement.textContent = article.description;

        articleDiv.appendChild(titleElement);
        articleDiv.appendChild(descriptionElement);

        newsContainer.appendChild(articleDiv);
    });
}