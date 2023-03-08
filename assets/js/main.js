/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */


//STRUMENTI DA UTILIZZARE

//console log
//if/else
//prompt
//alert
//number

//SVOLGIMENTO

//Chiedere al passeggero Km che vuole percorrere

const km = Number(prompt("Quanti Chilometri vuoi percorrere?"));
console.log(km);

//Chiedere al passeggero quanti anni ha

const age = Number(prompt("Quanti anni hai?"));
console.log(age);

//Calcolare prezzo in base ai km

//Applicare sconto 20% per minorenni

//applicare sconto 40% per over 65