console.log("Encore la pyramide de Mario zzzz...");

const saisie = prompt("Combien d'étages veux-tu ?");
const etages = Number(saisie);

for (let i = 1; i <= etages; i++) {
  const espaces = "  ".repeat(etages - i);
  const dièses = "#".repeat(i);
  console.log(espaces + dièses);
}