const codeGenetique = {
  "Sérine": ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"],
  "Proline": ["CCU", "CCC", "CCA", "CCG"],
  "Leucine": ["UUA", "UUG"],
  "Phénylalanine": ["UUU", "UUC"],
  "Arginine": ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"],
  "Tyrosine": ["UAU", "UAC"]
};

const arn1 = "CCGUCGUUGCGCUACAGC";
const arn2 = "CCUCGCCGGUACUUCUCG";

function decoupeCodons(arn) {
  const codons = [];
  for (let i = 0; i < arn.length; i += 3) {
    codons.push(arn.slice(i, i + 3));
  }
  return codons;
}

function traduireARN(arn) {
  const codons = decoupeCodons(arn);
  const proteine = codons.map(codon => {
    for (let acide in codeGenetique) {
      if (codeGenetique[acide].includes(codon)) {
        return acide;
      }
    }
    return "Inconnu"; // Cas où le codon n'est pas trouvé
  });
  return proteine.join("-");
}

console.log("Traduction de l'ARN 1 :", traduireARN(arn1));
console.log("Traduction de l'ARN 2 :", traduireARN(arn2));

