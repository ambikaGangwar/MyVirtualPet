var dog,sadDog,happyDog;
var foodStock = 10;
var food1;
var feedButton, addFoodButton;
var database;
var fedTime, lastFed, lastFeed, hour;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);

  database = firebase.database();
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  food1 = new Food();

  feedButton = createButton("Feed the DOG");
  addFoodButton = createButton("Add FOOD");

  feedButton.position(600,100);
  addFoodButton.position(700,100);

}

function draw() {
  background("lightblue");

  food1.display(700, 200);

  writeTime();
  readTime();

  drawSprites();
}

async function read(){
  var read = await database.ref("foodStock");
  read.on("value", function(data){
      foodStock = data.val();
  });
}

async function update(food){
  await database.ref("foodStock").set({
      foodStock : food
  })
}

async function readTime(data){
  fedTime = await database.ref("FeedTime");
  fedTime.on("value", function(){
    lastFed = data.val();
  })
}

async function writeTime(data){
  await database.ref("FeedTime").set({
      fedTime : lastFed
  })
}


