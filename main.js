//1-Crea una funzione che converte tutte le proprietà di tipo 'number'
//all'interno di un oggetto in stringhe (comprese le proprietà annidate).

const persona = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 22,
    sesso: "m",
    indirizzo: {
        via: "Via Garibaldi",
        numero: 15,
        CAP: 20056,
        citta: "Roma",
    },
    genitori: {
        madre: {
            nome: "eleonora",
            eta: 35,
        },
        padre: {
            nome: "francesco",
            eta: 40,
        },
    },
};

const convertiInStringa = (obj) => {
    const entries1 = Object.entries(obj);
    for (let i = 0; i < entries1.length; i++) {
        const entriesi = entries1[i];
        const key = entriesi[0];
        const value = entriesi[1];
        switch (typeof value) {
            case "number":
                obj[key] = "string";
                break;
            case "object":
                convertiInStringa(obj[key]);
        }
    }
};
convertiInStringa(persona);
console.log(persona);
