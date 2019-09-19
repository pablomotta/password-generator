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

var generateButton = document.getElementById('generate');
var copyToClipboard = document.getElementById('copy');

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
copyToClipboard.addEventListener('click', myFunction);

function myFunction() {
    console.log('Hello World!');
}
