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

let CODES_TABLE = Object.keys(MORSE_TABLE).reduce((codesTable, key) => {
  const splitKey = key.split('');

  let encodeLetter = splitKey.reduce((result, symbol) => {
    return result + SYMBOL_CODES[symbol];
  }, '');

  while (encodeLetter.length < ENCODE_LETTER_LENGTH) {
    encodeLetter = '0' + encodeLetter;
  }

  codesTable[encodeLetter] = MORSE_TABLE[key];

  return codesTable;
}, {
  '**********': ' ',
});

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