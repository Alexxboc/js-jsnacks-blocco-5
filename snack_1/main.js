/* 
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

const zucchine = [
    {
        varieta:'zucchina uno',
        peso: 3,
        lunghezza: 2

    },

    {
        varieta:'zucchina due',
        peso: 5,
        lunghezza: 2

    },

    {
        varieta:'zucchina tre',
        peso: 3,
        lunghezza: 2

    },

    {
        varieta:'zucchina quattro',
        peso: 7,
        lunghezza: 8

    },

    {
        varieta:'zucchina cinque',
        peso: 3,
        lunghezza: 2

    },

    {
        varieta:'zucchina sei',
        peso: 9,
        lunghezza: 10

    },

    {
        varieta:'zucchina sette',
        peso: 47,
        lunghezza: 3

    },

    {
        varieta:'zucchina otto',
        peso: 5,
        lunghezza: 9

    },

    {
        varieta:'zucchina nove',
        peso: 20,
        lunghezza: 3

    },

    {
        varieta:'zucchina dieci',
        peso: 73,
        lunghezza: 1

    }
]

// Estrapolare il dato del peso
let sum = 0;
zucchine.forEach(zucchina => {
    // console.log(zucchina.peso);
    sum += zucchina.peso;   
})

console.log(sum);