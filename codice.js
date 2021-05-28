function palindromo(parola) {
    let termineMedio = parola.length / 2;
    for (let indice1 = 0; indice1 < termineMedio; indice1++) {
        let indice2 = parola.length - 1 - indice1;
        let carattere1 = parola[indice1];
        let carattere2 = parola[indice2];
        if (carattere1 !== carattere2) {
        return false;
        }
    }
    return true;
}

console.log(palindromo('anna'));
console.log(palindromo('aveva'));
console.log(palindromo('prova'));
