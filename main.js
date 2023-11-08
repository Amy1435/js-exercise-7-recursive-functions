//1-Crea una funzione che converte tutte le proprietà di tipo 'number'
//all'interno di un oggetto in stringhe (comprese le proprietà annidate).

// const persona = {
//     nome: "Mario",
//     cognome: "Rossi",
//     eta: 22,
//     sesso: "m",
//     indirizzo: {
//         via: "Via Garibaldi",
//         numero: 15,
//         CAP: 20056,
//         citta: "Roma",
//     },
//     genitori: {
//         madre: {
//             nome: "eleonora",
//             eta: 35,
//         },
//         padre: {
//             nome: "francesco",
//             eta: 40,
//         },
//     },
// };

// const convertiInStringa = (obj) => {
//     const entries1 = Object.entries(obj);
//     for (let i = 0; i < entries1.length; i++) {
//         const entriesi = entries1[i];
//         const key = entriesi[0];
//         const value = entriesi[1];
//         switch (typeof value) {
//             case "number":
//                 obj[key] = "string";
//                 break;
//             case "object":
//                 convertiInStringa(obj[key]);
//         }
//     }
// };
// convertiInStringa(persona);
// console.log(persona);

//2-Crea un calcolatore di fattoriale (5 fattoriale = 5x4x3x2x1).
//L'utente deve poter inserire un numero, e al click di un bottone calcola,
//stampare il risultato del fattoriale di quel numero (è una funzione ricorsiva).

window.addEventListener("load", () => {
    const input = document.getElementById("inputUser");
    const bottone = document.getElementById("btn");
    // input.addEventListener('input', () => {
    //     const valoreInput = input.valueAsNumber;
    // });
    bottone.addEventListener("click", () => {
        const valoreInput = input.valueAsNumber;
        const valoriOttenuti = [];
        for (let i = 0; i < valoreInput; i++) {
            const nuovoValore = valoreInput - i;
            valoriOttenuti.push(nuovoValore);
        }
        console.log(valoriOttenuti);

        let moltiplicazione = 1;
        for (let i = 0; i < valoriOttenuti.length; i++) {
            moltiplicazione *= valoriOttenuti[i];
        }
        console.log(moltiplicazione);

        const p = document.getElementById("risultato");
        p.innerHTML += `Il risultato e': ${moltiplicazione}`;
    });
});

// 3-Crea una funzione che dato un oggetto, stampa sul documento HTML
//il diagramma ad albero dell'oggetto usando i tag <ul> per gli oggetti e i tag <ol> per gli array.
