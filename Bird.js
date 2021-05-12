class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.path = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x > 5 && this.body.position.x > 200){
      this.path.push([this.body.position.x,this.body.position.y])
    }
    for(var p = 0;p < this.path.length;p++){
      image(this.smoke,this.path[p][0],this.path[p][1]);
    }
  }
}
