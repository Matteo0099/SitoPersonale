var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    delay: 95,
});

typewriter
.pauseFor(500)
.typeString("Hi!👋\t")
.pauseFor(600)
.typeString("I'm a Developer from \t")
.pauseFor(10)
.typeString("It...")
.pauseFor(500)
.deleteChars(5)
function highlight(text) {
    var inputText = document.getElementById("inputText");
    var innerHTML = inputText.innerHTML;
    var index = innerHTML.indexOf(text);
    if (index >= 0) { 
     innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
     inputText.innerHTML = innerHTML;
    }  
}

//Controllo
// Si può usare anche usare direttamente un carattere non BMP
var str = 'A \uD87E\uDC04 Z'; 
for (var i = 0, chr; i < str.length; i++) {
    if ((chr = getWholeChar(str, i)) === false) {
    continue;
}

/*  
    Adatta questa riga all'inizio di ogni ciclo, passando l'intera stringa e
    l'iterazione corrente e la restituzione di una variabile per rappresentare il
    carattere individuale
*/

    console.log(chr);
}

function getWholeChar(str, i) {
    var code = str.charCodeAt(i);

    if (Number.isNaN(code)) {
        return ''; // Posizione non trovata
    }
    if (code < 0xD800 || code > 0xDFFF) {
        return str.charAt(i);
    }

    // High surrogate (potrebbe cambiare l'ultimo esadecimale in 0xDB7F per trattare high private
    // surrogati come singoli caratteri)
    if (0xD800 <= code && code <= 0xDBFF) {
        if (str.length <= (i + 1)) {
            throw 'High surrogate without following low surrogate';
        }
        var next = str.charCodeAt(i + 1);
        
        if (0xDC00 > next || next > 0xDFFF) {
            throw 'High surrogate without following low surrogate';
        }
        
        return str.charAt(i) + str.charAt(i + 1);
    }

    // Surrogato basso (0xDC00 <= codice && codice <= 0xDFFF)
    if (i === 0) {
        throw 'Low surrogate without preceding high surrogate';
    }

    var prev = str.charCodeAt(i - 1);

    // (potrebbe cambiare l'ultimo esadecimale in 0xDB7F per trattare un elevato privato
    // surrogati come singoli caratteri)
    if (0xD800 > prev || prev > 0xDBFF) {
        throw 'Low surrogate without preceding high surrogate';
    }
    // Ora possiamo passare ai surrogati bassi come secondo componente
    // in una coppia che abbiamo già elaborato
        
    return false;
}
    