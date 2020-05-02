function nextGeneration() {
  
  normalizeFitness(savedHeroes);
  
  // console.log("Next generation");
  // console.log(savedHeroes);
  for(let i = 0; i < TOTAL; i++) {
    heroes[i] = poolSelection(savedHeroes);
  }
  
  savedHeroes = [];
}

function calculateFitness() {
  let sum = 0;
  
  for(let hero of heroes) { 
    sum += hero.score;
  }
  
  for(let hero of heroes) {
    hero.fitness = hero.score / sum; 
  }
}

function normalizeFitness(heroes) {
  // Make score exponentially better?
  for (let i = 0; i < heroes.length; i++) {
    heroes[i].score = pow(heroes[i].score, 2);
  }

  // Add up all the scores
  let sum = 0;
  for (let i = 0; i < heroes.length; i++) {
    sum += heroes[i].score;
  }
  // Divide by the sum
  for (let i = 0; i < heroes.length; i++) {
    heroes[i].fitness = heroes[i].score / sum;
  }
}

function poolSelection(heroes){
  let index = 0;

  let r = random(1);

  while (r > 0) {
    r -= heroes[index].fitness;
    index += 1;
  }

  index -= 1;

  return heroes[index].copy();
}
