const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let l = [];
    let kk = [];
    let gf = [];
    let r = expr.match(/.{1,10}/g);  //разбила по 10 шт       
    for (let i = 0; i < r.length; i++) {
        r[i] === '**********' ? kk.push(' ') : kk.push(r[i]); //заменила ******** на пробел    
        gf.push(kk[i].match(/.{1,2}/g)); //разбила каждый массив по 2 элем
    }
    kk = gf.map(r => {
        return (r.map(i => {
            if (i === '10') {
                i = "."
            } else if (i === '11') {
                i = "-";            
            } else if (i === ' ') {
                i = ' ';                
            }            else {
                i = '';
            };
            return i
        })).join('')        
    });
    for (let j = 0; j < kk.length; j++) {
        for (let key in MORSE_TABLE) {
            if (kk[j] === key) {
                l.push(MORSE_TABLE[key])
            }          
        }
        if (kk[j] === ' ') {
                l.push(' ')
            }
    }   
    return l.join('');
}

module.exports = {
    decode
}