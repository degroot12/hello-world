const passWords = 

`1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`

const splitPass = passWords.split("\n");



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
        console.log(passWord)
    }

});




