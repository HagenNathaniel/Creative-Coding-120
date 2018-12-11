class Answers {
  constructor(num, ansText, isCorrect) {
    this.num = num;
    this.ansText = ansText;
    this.isCorrect = isCorrect;
    this.width = width* 0.5;
    this.height = 40;
    this.posX = width * 0.5;
    this.posY = this.num * this.height + height*0.325;
    this.color = { default: 'black', hover: 'green' };

    this.mouseOver = false;
  }

  display(){

    this.mouseCheck();

    push();
    translate(this.posX, this.posY);
    if(this.mouseOver){
      fill(this.color.hover);
    } else {
      fill(this.color.default);
    }
    rectMode(CENTER);
    rect(0,0, this.width, this.height);

    fill('white');
    textSize(26);
    textAlign(CENTER, CENTER);
    text(this.ansText, 0,0);


    pop();
  }

  mouseCheck(){
    if(mouseX > this.posX-this.width/2 && mouseX < this.posX+this.width/2 && mouseY > this.posY-this.height/2 && mouseY < this.posY+this.height/2){
      this.mouseOver = true;

    } else {
      this.mouseOver = false;
    }
  }

  mousePress(){
    if(mouseX > this.posX-this.width/2 && mouseX < this.posX+this.width/2 && mouseY > this.posY-this.height/2 && mouseY < this.posY+this.height/2){
      this.mouseOver = true;


        // log answer and move on
        questionAnswered(this.isCorrect);
        


    }
  }


}
