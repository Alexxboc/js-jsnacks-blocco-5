/* 
SNACK 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
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
        lunghezza: 17

    },

    {
        varieta:'zucchina nove',
        peso: 20,
        lunghezza: 21

    },

    {
        varieta:'zucchina dieci',
        peso: 73,
        lunghezza: 16

    }
]

 const zucchina_small = zucchine.filter(zucchina => zucchina.lunghezza < 15);
 const zucchina_large = zucchine.filter(zucchina => zucchina.lunghezza > 15);

 let sum_small = 0;
 let sum_large = 0;

 zucchina_small.forEach((zucchina) => {
    sum_small += zucchina.peso
 })

 zucchina_large.forEach(zucchina => {
     sum_large += zucchina.peso
 })

 console.log(sum_small, sum_large);