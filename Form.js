class Form {
  constructor(){
    this.input1 = createInput("Name");
    this.input2 = createInput('Enter Correct Option');
  }
 display(){
     this.title.html("MyQuiz Game");
     this.title.position(350,0);

     this.question.html("Question:- What starts and ends with the letter 'E',but has only one letter? ");
     this.question.position(150,80);

     this.option1.html("1: Everyone");
     this.option1.position(150,100);
 
     this.option1.html("2: Envelop");
     this.option1.position(150,120);
 
     this.option1.html("3: Estimate");
     this.option1.position(150,140);
 
     this.option1.html("4: Example");
     this.option1.position(150,160);

     this.input1.position(150,200)
     this.input2.position(400,300)

     this.button.mousePressed(()=>{
      contestant.name = this.input1.value();
      contestantCount+=1;
      contestant.index = contestantCount
      contestant.updateCount(contestantCount)
     })
    }

}
