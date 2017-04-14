function setup() {
  //창 크기 설정
  createCanvas(600, 400);
  frameRate(30);
}

function draw() {
  // 배경을 옅은 회색색으로 그리기
  background(200);
  
  //ellipses와 rects를 CENTER모드로 설정
  ellipseMode(CENTER);
  rectMode(CENTER);
  
  //Zoog 몸체 그리기
  stroke(0);
  fill(175);
  rect(mouseX, mouseY, 20, 100);
  
  //Zoog 머리 그리기
  stroke(0);
  fill(255);
  ellipse(mouseX, mouseY-30, 60, 60);
  
  //Zoog 눈 그리기
  fill(mouseX, 0, mouseY);
  ellipse(mouseX-19, mouseY-30, 16, 32);
  ellipse(mouseX+19, mouseY-30, 16, 32);
  
  //Zoog 다리 그리기
  stroke(0);
  line(mouseX-10, mouseY+50, pmouseX-10, pmouseY+60);
  line(mouseX+10, mouseY+50, pmouseX+10, pmouseY+60);
}

function mousePressed() {
  //마우스 클릭 시 메시지 보내기
  println("Take me to your leader!");
}