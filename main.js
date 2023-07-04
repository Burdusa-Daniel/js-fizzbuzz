/*Consegna:
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. La stampa può essere fatta ovviamente in console.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare passo dopo passo
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" anche su un foglietto
Buon lavoro e buon divertimento! */
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
        document.getElementById('squaresContainer').innerHTML += `
        <div class="square bg-danger">
            <p class="text-center text-white fs-3 fw-3 vertical-align-square">${"FitzBuzz"}</p>
        </div>
    `;
    } else if (i % 3 == 0) {
        console.log("Fizz");
        document.getElementById('squaresContainer').innerHTML += `
        <div class="square bg-success">
            <p class="text-center text-white fs-3 fw-3 vertical-align-square">${"Fizz"}</p>
        </div>
    `;
    } else if (i % 5 == 0) {
        console.log("Buzz");
        document.getElementById('squaresContainer').innerHTML += `
        <div class="square bg-warning">
            <p class="text-center text-white fs-3 fw-3 vertical-align-square">${"Buzz"}</p>
        </div>
    `;
    } else {
        console.log(i);
        document.getElementById('squaresContainer').innerHTML += `
        <div class="square  ">
            <p class="text-center text-white fs-3 fw-3 vertical-align-square">${i}</p>
        </div>
    `;
    }

}

