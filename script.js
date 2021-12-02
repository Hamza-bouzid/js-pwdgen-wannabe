const nome = prompt("Scrivi il tuo nome");
const cognome = prompt("Scrivi il tuo cognome");
const colore = prompt("Scrivi il tuo colore preferito");

document.getElementById("dati-utente").innerHTML = `
<ul>
  <li>Nome: ${nome}</li>
  <li>Cogmome: ${cognome}</li>
  <li>Colore Preferito: ${colore}</li>
</ul>
`;

const passwordGenerata = nome + cognome + colore + 21;

document.getElementById("password").innerHTML = `La password che abbiamo scelto per te è: ${passwordGenerata}`;
