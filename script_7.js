const phrase = prompt("Parle au bot adolescent :");

function repondBot(input) {
  if (!input) {
    return "t'es en PLS ?";
  }
  else if (input.endsWith("?")) {
    return "Ouais Ouais...";
  }
  else if (input === input.toUpperCase() && /[A-Z]/.test(input)) {
    return "Pwa, calme-toi...";
  }
  else if (input.toLowerCase().includes("fortnite")) {
    return "on s' fait une partie soum-soum ?";
  }
  else {
    return "balek.";
  }
}

console.log(repondBot(phrase));