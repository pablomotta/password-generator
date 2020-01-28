//DOM targets
var generatePasswordBtn = document.getElementById('generate');
var copyToClipboardBtn = document.getElementById('copy');
var placeholderText = document.getElementById('password');

// Password character types
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = [
    '!',
    '#',
    '$',
    '%',
    '&',
    '(',
    ')',
    '*',
    '+',
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

//character types random number:

function randomNumGenerator(num) {
    return Math.ceil(Math.random() * num.length + 2);
}

function passwordGenerator(type1, type2, type3, type4) {
    var randomIteration1 = randomNumGenerator(type1);
    var randomIteration2 = randomNumGenerator(type2);
    var randomIteration3 = randomNumGenerator(type3);
    var randomIteration4 = randomNumGenerator(type4);

    var suggestedPassword = [];

    for (var i = 0; i < randomIteration1; i++) {
        var numberRandomIndex = Math.floor(Math.random() * numbers.length);
        var item = numbers[numberRandomIndex];

        suggestedPassword.push(item);
    }
    for (var i = 0; i < randomIteration2; i++) {
        var specialCharRandomIndex = Math.floor(
            Math.random() * specialChar.length
        );
        var item2 = specialChar[specialCharRandomIndex];

        suggestedPassword.push(item2);
    }
    for (var i = 0; i < randomIteration3; i++) {
        var uppercaseRandomIndex = Math.floor(Math.random() * uppercase.length);
        var item3 = uppercase[uppercaseRandomIndex];

        suggestedPassword.push(item3);
    }
    for (var i = 0; i < randomIteration4; i++) {
        var lowercaseRandomIndex = Math.floor(Math.random() * lowercase.length);
        var item4 = lowercase[lowercaseRandomIndex];

        suggestedPassword.push(item4);
    }

    return suggestedPassword.join('').toString();
}

function showNewPassword() {
    var finalPassword = passwordGenerator(
        numbers,
        specialChar,
        uppercase,
        lowercase
    );
    placeholderText.value = finalPassword;
}

generatePasswordBtn.addEventListener('click', showNewPassword);

var copyToClipboard = function copy() {
    let textarea = document.getElementById('password');
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    // console.log(textarea.value);
};

copyToClipboardBtn.addEventListener('click', copyToClipboard);
