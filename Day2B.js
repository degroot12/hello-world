const fs = require('fs');

const passWords = fs.readFileSync('Day2.txt', 'utf8')

const splitPass = passWords.split("\n");

let passCount = 0;

splitPass.forEach(row => {
    const splitSplitPass = row.split(" ");

    const amountOfCharac = splitSplitPass[0];
    const whatCharac = splitSplitPass[1].slice(0, -1);
    const passWord = splitSplitPass[2];
    const splitPassWord = passWord.split('');
  
    

    const minMax = amountOfCharac.split("-");
    const min = minMax[0] -1;
    const max = minMax[1] -1;


    if((splitPassWord[min] === whatCharac && splitPassWord[max] !== whatCharac) || (splitPassWord[min] !== whatCharac && splitPassWord[max] === whatCharac)) {
        passCount++
    }

});
console.log(passCount)
