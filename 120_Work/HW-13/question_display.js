class QuestionDisplay {

  //Create the QuestionDisplay Blueprint aka Constructor

  constructor(questText){
    this.questText = questText;
    this.width = width * 0.85;
    this.height = 40;
    this.posX = width * 0.5;
    this.posY =  height* 0.15;
    this.color = {default:'white'};
  }


  display(){



    push();
    translate(this.posX, this.posY);




    fill(this.color.default);

    rectMode(CENTER);
    rect(0,0, this.width, this.height);
    fill('green');
    textSize(36);
    textAlign(CENTER, CENTER);
    text(this.questText, 0,0)


    pop();
  }
}
