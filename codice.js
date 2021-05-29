function palindromo(testo, ignoraSpaziEMaiuscole = true) {
    if (ignoraSpaziEMaiuscole) {
        testo = testo.toLowerCase().replaceAll(' ', '').replaceAll('\n', '');
    }
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
    let palindrome = [
        'I topi non avevano nipoti',
        'Anna',
        'aveva',
    ];

    let pulsanteControlla = document.getElementById('controlla');
    let pulsanteTestoRandom = document.getElementById('testoRandom');
    let testo = document.getElementById('testo');
    let risultato = document.getElementById('risultato');
    let ignoraSpaziEMaiuscole = document.getElementById('ignoraSpaziEMaiuscole');
    
    pulsanteControlla.addEventListener('click', function() {
        if (testo.value.trim() === '') {
            risultato.innerText = 'non hai scritto niente!';
        } else if (palindromo(testo.value, ignoraSpaziEMaiuscole.checked)) {
            risultato.innerText = testo.value + ' è palindromo';
        } else {
            risultato.innerText = testo.value + ' non è palindromo';
        }
    });

    pulsanteTestoRandom.addEventListener('click', function() {
        let indiceCasuale;
        let nuovaParola;
        do {
            indiceCasuale = Math.floor(Math.random() *  palindrome.length);
            nuovaParola = palindrome[indiceCasuale];
        } while(nuovaParola === testo.value);
        testo.value = nuovaParola;
    });
}

inizializzaPagina();