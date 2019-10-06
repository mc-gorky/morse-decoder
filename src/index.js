const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

const SYMBOL_CODES = {
  '.': '10',
  '-': '11',
};

const ENCODE_LETTER_LENGTH = 10;

let CODES_TABLE = {};


Object.keys(MORSE_TABLE).forEach((key) => {
  const splitKey = key.split('');
  let encodeLetter = '';

  splitKey.forEach((symbol) => {
    const encodeSymbol = SYMBOL_CODES[symbol];

    encodeLetter = encodeLetter + encodeSymbol;
  });

  splitKey.reduce(() => {}, '')

  while (encodeLetter.length < 10) {
    encodeLetter = '0' + encodeLetter;
  }

  CODES_TABLE[encodeLetter] = MORSE_TABLE[key];
});


// Object.keys(MORSE_TABLE).forEach((key) => {
//   const splitKey = key.split('');
//   let encodeLetter = '';

//   splitKey.forEach((symbol) => {
//     const encodeSymbol = SYMBOL_CODES[symbol];

//     encodeLetter = encodeLetter + encodeSymbol;
//   });

//   while (encodeLetter.length < 10) {
//     encodeLetter = '0' + encodeLetter;
//   }

//   CODES_TABLE[encodeLetter] = MORSE_TABLE[key];
// });

CODES_TABLE['**********'] = ' ';

function decode(expr) {
  let result = '';
  let exprCopy = expr;

  while (exprCopy.length > 0) {
    const encodeLetter = exprCopy.substring(0, ENCODE_LETTER_LENGTH);
    exprCopy = exprCopy.slice(ENCODE_LETTER_LENGTH);
    const decodeLetter = CODES_TABLE[encodeLetter];
    result = result + decodeLetter;
  }

  return result;
}

module.exports = {
  decode
}