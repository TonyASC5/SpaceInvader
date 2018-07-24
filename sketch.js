
let shoot = false
let x = 0;
//movement for bullet

let h = 0;

//horizontal commponent of ship

//moves bullet with ship but not once fired
let fPos= 800
let nPos= 50+h

let m = 0;
let shot = 0;
let Spos= 5+h;

let enemyPositionX = 200;
let enemyPositionY = 500;
let  enemyBullet = enemyPositionY +10 ;

let chance= Math.floor((Math.random*2)+1)

function setup(){
createCanvas(1000,1000)
}




function draw(){
   background(0)

   fill(50,205,50);


if (shoot==true){
    if(m ==0){
        shot = nPos + h
        m++
    }
    //shot assigned to postition of ship and doesnt follow becasue m = 1 when shot and doesnt reset to 0 until bullet reaches end.
    rect(shot,fPos + x,5,15)
   x-=15
   
 
}
else{
    rect(nPos + h,fPos + x,5,15)
    //bullet
}

if(800 +x <=0){
    m = 0
   x=0
   shoot=false

}



// allows bullet to fire and lets you fire again

fill(11,181,255)
rect(nPos + h,785,10,30,5)
//nozzle


fill(11,181,255)
rect(Spos+h,800,100,30,30)
//ship

if(keyIsDown(LEFT_ARROW)){
   h-=10
}
if(keyIsDown(RIGHT_ARROW)){
   h+=10
}
fill("red")
rect(enemyPositionX,enemyPositionY,50,50) ;
enemyshoot();
collison();


}







function keyPressed(){
if (keyCode == 32 ){
shoot = true

}
//sensor for spacebar

}





function enemyshoot(){

    fill("white") ;
    if(chance==1){
        
        
       ellipse(enemyPositionX,enemyBullet,10,10)
       enemyBullet +=10;
       if(enemyBullet>=1000){
           enemyBullet = enemyPositionY +10 ;}
       }
}


function collison(){
if (enemyBullet == Spos+h && enemyBullet== 785){
background (225);
}


}