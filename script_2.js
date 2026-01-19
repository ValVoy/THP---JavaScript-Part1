function factorielle(n) {
  let resultat = 1;

  for (let i = 1; i <= n; i++) {
    resultat = resultat * i;
  }

  return resultat;
}

const facto = prompt("De quel nombre veux-tu calculer la factorielle ?");
const nombre = Number(facto);

const lastResult = factorielle(nombre);
console.log("La factorielle de " + nombre + " est " + lastResult);
