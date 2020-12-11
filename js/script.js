var nome = prompt('Inserisci nome');
var cognome = prompt('Inserisci cognome');
var colore = prompt('Inserisci il tuo colore preferito');

document.getElementById('testo').innerHTML = 'Ciao' + ' ' + nome + ' ' + cognome + ' ' + 'la tua password INSICURISSIMA è :';

document.getElementById('password').innerHTML = nome + cognome + colore + 20;
