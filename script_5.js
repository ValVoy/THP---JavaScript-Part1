const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//------------------------------------

// Est-ce que tous les livres ont été au moins empruntés une fois ?
const tousEmpruntes = books.every(book => book.rented > 0);
if (tousEmpruntes) {
  console.log("Tous les livres ont été empruntés au moins une fois : Oui");
} else {
  console.log("Tous les livres ont été empruntés au moins une fois : Non");
}

// Quel est livre le plus emprunté ?
const livrePlusEmprunte = books.reduce((max, book) =>
  book.rented > max.rented ? book : max
);
console.log("Livre le plus emprunté :", livrePlusEmprunte.title);
// V2
let max = books[0];

for (let i = 1; i < books.length; i++) {
  if (books[i].rented > max.rented) {
    max = books[i];
  }
}
console.log("Le livre le plus emprunté est :", max.title);

// Quel est le livre le moins emprunté ?
const livreMoinsEmprunte = books.reduce((min, book) =>
  book.rented < min.rented ? book : min
);
console.log("Livre le moins emprunté :", livreMoinsEmprunte.title);

// Trouve le livre avec l'ID: 873495 
const livre873495 = books.find(book => book.id === 873495);
console.log("Livre avec l'ID 873495 :", livre873495.title);

// Supprime le livre avec l'ID: 133712 
const booksSansGatsby = books.filter(book => book.id !== 133712);

// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
const booksTries = [...booksSansGatsby].sort((a, b) =>
  a.title.localeCompare(b.title)
);
console.log("Livres triés par ordre alphabétique :", booksTries);