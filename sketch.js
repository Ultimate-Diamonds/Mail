var id,id1,idval;
var mail,mail1,mailval;
var database;
var pass,pass1,passval;
function setup(){
  createCanvas(windowWidth-30,windowHeight-30)
 database = firebase.database();
  id = createInput();
 id.position(windowWidth/2.5+50,windowHeight/5)
  id1 = createButton('NEXT');
 id1.position(windowWidth/2.5+50+130,windowHeight/5)
 
 mail = createInput();
 mail.position(windowWidth/2.5+50,windowHeight/5+70)
 mail1= createButton('NEXT');
 mail1.position(windowWidth/2.5+50+130,windowHeight/5+70)

 pass = createInput();
 pass.position(windowWidth/2.5+50,windowHeight/5+140)
 pass1= createButton('NEXT');
 pass1.position(windowWidth/2.5+50+130,windowHeight/5+140)

}
function draw(){
  background("red")
  textSize(20);
  fill("blue");
  text("Write Your Username",windowWidth/2.5+50-5,windowHeight/5-20)
 text("USERNAME:"+idval,windowWidth/2.5+50-5+200,windowHeight/5-20);
  id1.mouseClicked(id2);
  text("Write Your Email",windowWidth/2.5+50,windowHeight/5+55)
  text("EMAIL:"+mailval,windowWidth/2.5+50+200,windowHeight/5+55)
  mail1.mouseClicked(mail2);
  text("Write Your Password",windowWidth/2.5+50,windowHeight/5+120)
  text("PASSWORD:"+passval,windowWidth/2.5+50+200,windowHeight/5+120)
  pass1.mouseClicked(pass2);
  
}
function id2(){
  idval = id.value();
  database.ref("/").update({
  Id:idval
  })
 
}
function mail2(){
  mailval = mail.value();
  database.ref("/").update({
  Mail:mailval
  })
}
function pass2(){
  passval = pass.value();
  database.ref("/").update({
  PASSWORD:passval
  })
}