const fs = require('fs');

const passWords = fs.readFileSync('Day2.txt', 'utf8')

const splitPass = passWords.split("\n");


let passCount = 0;

splitPass.forEach(row => {
    const splitSplitPass = row.split(" ");

    const amountOfCharac = splitSplitPass[0];
    const whatCharac = splitSplitPass[1].slice(0, -1);
    const passWord = splitSplitPass[2];

    const minMax = amountOfCharac.split("-");

    let count = 0;
    let position = passWord.indexOf(whatCharac);

    while(position !== -1) {
        count++
        position = passWord.indexOf(whatCharac, position + 1)
    }

    if(count >= minMax[0] && count <= minMax[1]) {
        passCount++;
    }
    
});
console.log(passCount)




