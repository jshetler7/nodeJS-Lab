const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

const fileTypes = [".jpg", ".gif", ".png"];
const downloadsDir = path.join(__dirname, "downloads");

rp('https://www.reddit.com/r/popular.json')
    .then(res => {
        JSON.parse(res).data.children.forEach(article => {
            const extension = path.extname(article.data.url);

            if(fileTypes.includes(extension)) {
                const fileName = article.data.id + extension;
                const file = path.join(downloadsDir, fileName);

                rp(article.data.url).pipe(fs.createWriteStream(file));
            }
        });
    })
    .catch(these_hands => console.log(these_hands));