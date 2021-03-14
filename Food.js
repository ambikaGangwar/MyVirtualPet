class Food{
    constructor(){
        this.image = loadImage("Images/Milk.png");

    }

    display(x, y){
        var x=80, y=50;

        imageMode(CENTER);
        image(this.image, 700, 200, 100, 100);

        if(foodStock!=0){
            for(var i = 0; i<foodStock; i++){
                if(i%10===0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,100,100);
                x=x+40;
            }
        }

        async function getTime(hour){
            var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata.json");
            var JSON = await response.json();
            var dt = JSON.datetime;
            lastFed = dt.slice(11,13);
            console.log(lastFed);
            lastFeed = dt.slice(14,16);
            console.log(lastFeed);
          
          }

        addFoodButton.mousePressed(function(){
            update(foodStock++);
        })

        if(foodStock!=0){
            feedButton.mousePressed(function(){
                dog.addImage(happyDog);

                getTime();

                if(foodStock<=0){
                    update(foodStock*0);
                }else{
                    update(foodStock--);
                }
            })
        }

        if(lastFed!=undefined){
            if(lastFed>=12){
                textSize(20);
                fill("black");
                text("Last Fed Time : " + lastFed%12 + ":" + lastFeed + " PM", 160,35);
            }
            else{
                textSize(20);
                fill("black");
                text("Last Fed Time : " + lastFed + ":" + lastFeed + " AM", 160,35);
            }
            
        }

    }
}