//Create variables here
var dog,happyDog,dogImg,dogImg2
var database
var foodS,foodStock





function preload()
{
  //load images here
  
  dogImg =loadImage("images/dogImg.png")
  dogImg2 =loadImage("images/dogImg1.png")


}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()


  dog =createSprite(width/2, 350, 10,10);
	dog.addImage(dogImg)
  dog.scale=0.2
  
  

  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
  
}


function draw() {  
  background(46,139,87) 


if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogImg2)
  foodStock = foodStock-1
}


  drawSprites();
  //add styles here
  textSize(15)
  fill("blue") 
  stroke(0)
text("foodStock: "+foodStock,10,height/2)
text("Note: Press UP_ARROW Key To Feed Lucy Some Milk",50,200)

}

//function to read values from DB
function readStock(data){
  foodS=data.val()
}

//function to write values from DB
function writeStock(x){

if(x<=0){
  x=0
}
else{
  x=x-1
}

database.ref('Food').update({
  Food:x
})

}

