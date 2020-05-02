var heroWidth = 100;
var heroHeight = 120;
var rightLaneX = 220;
var leftLaneX = 70;


function mutate(x) {
  if (random(1) < 0.1) {
    let offset = randomGaussian() * 0.5;
    let newx = x + offset;
    return newx;
  } else {
    return x;
  }
}

class Hero{
  

  constructor(brain) {
    this.x = leftLaneX;
    this.y = carY;
    this.width = heroWidth;
    this.height = heroHeight;
    this.score = 0;
    this.fitness = 0;
    this.track = 0;
    
    if(brain) {
      this.brain = brain.copy();
      this.brain.mutate(mutate);
    } else {
      this.brain = new NeuralNetwork(3,4,2);
    }
    
    
  }
  
  think(villains){
    
    let closest = null;
    let closestD = Infinity;
    
    
    for(let i = 0; i < villains.length; i++) {
      let d = this.y + this.height - villains[i].y;
      if( d < closestD && d > 0) {
        closest = villains[i];
        closestD = d;
      }
      
    }
    
    if(closest != null) {
      
      let inputs = [];
      inputs[0] = this.track;
      inputs[1] = closest.track;
      inputs[2] = map(closest.y, 0 ,height, 0 , 1);

      // let inputs = [this.x, this.y, 1.0,0.5];
      let outputs = this.brain.predict(inputs);
      // console.log(output);

      if(outputs[0]  > outputs[1]) { 
        this.changeTrack();
      }
      
    }
       
  }
  
  changeTrack(){
    this.track = 1 - this.track;
    this.x = baseSwift - this.x;
  }
  
  show(){

    stroke(255);
    fill(255,50);
    
    // if(this.highlight) {
    //   fill(255,0,0)
    // } else {
    //   fill(0);
    // } 
    image(heroImg,this.x,this.y,this.width,this.height)
    //rect(this.x,this.y,this.width,this.height)  
    
  }
  
  
  metAccident(otherCar) {
    if(this.y < (otherCar.y + otherCar.height) && this.x == otherCar.x && otherCar.y < (this.y + this.height)) {
      this.highlight = true;
      return true;
    }
    return false
    
  } 
  
  // overtake(villain) {
  //   return (villain.y < this.y);
  // }
  
  update() {
    this.score++;
  }
  
  copy() {
    return new Hero(this.brain);
  }
  
}