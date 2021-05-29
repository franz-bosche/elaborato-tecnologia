function palindromo(testo, ignoraSpaziEMaiuscole = true) {
    if (ignoraSpaziEMaiuscole) {
        testo = testo
        .toLowerCase()
        .replaceAll(' ', '')
        .replaceAll('\n', '')
        .replaceAll('?', '')
        .replaceAll(',', '')
        .replaceAll(':', '')
        .replaceAll('!', '')
        .replaceAll('\'', '')



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
        'E le tazzine, igienizzatele!',
        'Angela lava la legna',
        'Erano usi suonare',
        'Ero Muro o Rumore?',
        'Ai clacson nonno scalcia',
        'I bar arabi',
        'I due feudi',
        'E le mie sei mele?',
        'A vita nella valle nativa',
        'I tre sedili deserti',
        'Amo ridere di Roma',
        'Ero tutelata da tale tutore',
        'Omino nano non anonimo',
        'O mordo tua nuora, o aro un autodromo',
        'Era matto: radeva fave da rottamare!',
        'I tropici, mamma! Mi ci porti?',
        'Arava, l\'avara',
        'Poter essere pelato totale per essere top',
        'Accesa pipa secca',
        'In girum imus nocte et consumimur igni'
    ];

    let pulsanteControlla = document.getElementById('controlla');
    let pulsanteTestoRandom = document.getElementById('testoRandom');
    let testo = document.getElementById('testo');
    let risultato = document.getElementById('risultato');
    let ignoraSpaziEMaiuscole = document.getElementById('ignoraSpaziEMaiuscole');
    
    pulsanteControlla.addEventListener('click', function() {
        if (testo.value.trim() === '') {
            risultato.innerHTML = `<i>non hai scritto niente!</i>`;
        } else if (palindromo(testo.value, ignoraSpaziEMaiuscole.checked)) {
            risultato.innerHTML = `<b>${testo.value}</b> è palindromo`;
        } else {
            risultato.innerHTML = `<b>${testo.value}</b> non è palindromo`;
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