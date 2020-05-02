var start = -120;

class Villain{
  

  constructor() {
    this.x = carX;
    this.y = start;
    this.width = 100;
    this.height = 120;
    this.highlight = false;
    this.track = 0;
  }
  
  changeTrack(){
    this.track = 1 - this.track;
    this.x = baseSwift - this.x;
  }
  
  show(){
    
    stroke(255);
    fill(0,0,250);
    
    // image(heroImg,this.x,this.y,this.width,this.height)
    
    rect(this.x,this.y,this.width,this.height)
      
  }
  
  move(){
    this.y += speed;
  }
  
  offscreen(){
    return (this.y > height);
  }
  
}