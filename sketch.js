const TOTAL = 200;

var carX = 70;
var carY = 450;
var baseSwift = 290;
var heroes = [];
var villains = [];
var score = 0;
let counter = 0;
let coronaImg;
let heroImg;
let speed = 5;
let savedHeroes = [];
let cycles = 100;
let slider;

function preload() {
  coronaImg = loadImage('Images/Corona.png');
  heroImg = loadImage('Images/Car1.png');
}

function setup() {
  createCanvas(400, 600);
  slider = createSlider(1,100,1);
  for(let i = 0; i < TOTAL; i++) {
    heroes[i] = new Hero();
  }
  // villains.push(new Villain(carX, -120));
}

function draw() {
  
  for(let n = 0; n < slider.value(); n++ ) {
    if(counter % 75 == 0) {
    var newVillain = new Villain();
    if(random(2) > 1){
      newVillain.changeTrack();    
    }
    villains.push(newVillain);
    
  }
  
    for(let hero of heroes) {
      hero.update();
      hero.think(villains);
    }

    for(let i = villains.length-1; i >= 0; i--) {
      villains[i].move();

      for (let j = heroes.length-1; j >= 0; j--) {


        if (heroes[j].metAccident(villains[i])){
          savedHeroes.push(heroes.splice(j,1)[0]);
        }
      }



      if(villains[i].offscreen()) {
        villains.splice(i,1);
      }


    }

    if(heroes.length == 0) {  
      counter = 0;
      nextGeneration();
      villains = [];
      villains.push(new Villain());
    }
    counter++;
  }
  
  
  
  
  //Drawing stuffs
  background(0);
  for(let hero of heroes) {
      hero.show();
  }
  for(let villain of villains) {
      villain.show();
  }
  
}



