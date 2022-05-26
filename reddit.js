const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

const dataPathReddit = path.join(__dirname, './popular-articles.json');


const articles = [];

rp("https://www.reddit.com/r/popular.json")
    .then(res => {
        JSON.parse(res).data.children.forEach(article => {
            articles.push({
                title: article.data.title,
                url: article.data.url,
                author: article.data.author
            });
        });
        console.log(articles);
        fs.writeFileSync(dataPathReddit, JSON.stringify(articles));
    })
    .catch(these_hands => console.log(these_hands));