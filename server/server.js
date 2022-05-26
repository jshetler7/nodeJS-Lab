// set the file directory
// npm start to run

const path = require('path');
const fs = require('fs');


const dataPath = path.join(__dirname, '../chirps.json');


const chirpsArray = [
    {
        user: "Max",
        message: "I hate Mondays."
    },
    {
        user: "Will",
        message: "What even is node anyways?" 
    },
    {
        user: "Tom",
        message: "Am I doing this right?"
    },
    {
        user: "Joe",
        message: "Guess I'll find out."
    },
    {
        user: "Jim",
        message: "Right after this last chirp."
    },
];

fs.writeFileSync(dataPath, JSON.stringify(chirpsArray));

const read = fs.readFileSync(dataPath).toString();
const updated = JSON.parse(read);
console.log(updated);
