function palindromo(testo) {
    let termineMedio = testo.length / 2;
    for (let indice1 = 0; indice1 < termineMedio; indice1++) {
        let indice2 = testo.length - 1 - indice1;
        let carattere1 = testo[indice1];
        let carattere2 = testo[indice2];
        if (carattere1 !== carattere2) {
        return false;
        }
    }
    return true;
}

function inizializzaPagina() {
    let pulsante = document.getElementById('controlla');
    let testo = document.getElementById('testo');
    let risultato = document.getElementById('risultato');
    
    pulsante.addEventListener('click', function() {
        if (palindromo(testo.value)) {
            risultato.innerText = testo.value + ' è palindromo';
        } else {
            risultato.innerText = testo.value + ' non è palindromo';
        }
    });
}

inizializzaPagina();