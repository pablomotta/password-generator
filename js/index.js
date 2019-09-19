///User Story

//User can click 'generate password' button to generate new password

//password needs to have:

////special characters
///////   !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~  (32 items)

////numeric values
///////   0123456789   (10 items)
////lowercase characters
///////   abcdefghijklmnopqrstuvwxyz  (26 items)
////uppercase characters
///////   ABCDEFGHIJKLMNOPQRSTUVWXYZ (26 items)

//application should validate and ensure that at least one
//character type of each group is selected

//DOM targets
var generateButton = document.getElementById('generate');
var copyToClipboard = document.getElementById('copy');

//
var numbers = '0123456789';
var specialChar = [
    '!',
    '"',
    '#',
    '$',
    '%',
    '&',
    '(',
    ')',
    '*',
    '+',
    ',',
    '-',
    '.',
    '/',
    ':',
    ';',
    '<',
    '=',
    '>',
    '?',
    '@',
    '[',
    ']',
    '^',
    '_',
    '`',
    '{',
    '|',
    '}',
    '~'
];
var uppercase = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];
var lowercase = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];
// console.log(Math.ceil(Math.random() * numbers.length + 2));

// loop through array

function randomNumGenerator(num) {
    return Math.ceil(Math.random() * num.length + 2);
}

function passwordGenerator(type1, type2, type3, type4) {
    var randomNumType1 = randomNumGenerator(type1);
    var randomNumType2 = randomNumGenerator(type2);
    var randomNumType3 = randomNumGenerator(type3);
    var randomNumType4 = randomNumGenerator(type4);

    var suggestedPassword = [];

    for (var i = 0; i < randomNumType1; i++) {
        suggestedPassword.push('1');
    }
    for (var i = 0; i < randomNumType2; i++) {
        suggestedPassword.push('2');
    }
    for (var i = 0; i < randomNumType3; i++) {
        suggestedPassword.push('3');
    }
    for (var i = 0; i < randomNumType4; i++) {
        suggestedPassword.push('4');
    }

    console.log(suggestedPassword.toString());
}

passwordGenerator(numbers, specialChar, uppercase, lowercase);
// generate a random number based on length of array + 2

////////////////// function to generate array of all letters.
// const letters = (() => {
//     const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
//     return caps.concat(caps.map(letter => letter.toLowerCase()));
// })();
// console.log(letters.join());

//////////////////BUTTON TEST

// copyToClipboard.addEventListener('click', myFunction);

// function myFunction() {
//     console.log('Hello World!');
// }
