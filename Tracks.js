let trackWidth = 10;
let leftTrackX = 20;
let centerlineX = 195;
let rightTrackX = 370;

class Track {
  constructor() {
    this.trackWidth = trackWidth;
    this.centerlineX = centerlineX;
    this.centerlineY = -60;
    this.rightTrackX = rightTrackX;
    this.leftTrackX = leftTrackX;
    this.roadColor = 255;
    this.centerlineHeight = 50;
    this.centerlineGap = 10;
  }
  
  show() {
    //left track
    fill(this.roadColor)
    rect(20,0,this.trackWidth,height);
    
    //centerline
    fill(this.roadColor)
    
    for(let i = this.centerlineY; i < height; i += this.centerlineHeight + this.centerlineGap) {
      rect(this.centerlineX,i,this.trackWidth,this.centerlineHeight);
    }
    
    
    //right track
    fill(this.roadColor)
    rect(370,0,this.trackWidth,height);
  }
  
  move(){
    this.centerlineY += 2;
    if( this.centerlineY == 0 ) { 
      this.centerlineY = -60;
    }
  }
  
}

