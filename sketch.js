var ball;
var dodo;
var position;

function setup(){
    createCanvas(500,500);
    dodo=firebase.database();
    dede = dodo.ref("ball/position")
    dede.on("value",leeData,errar)
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    dodo.ref("ball/position").set({
        'x': position.x + x,
        'y': position.y + y 
    })
    
}

function leeData(lala){
    position = lala.val()
    ball.x = position.x
    ball.y = position.y
} 

function errar(){
    alert('box?')
} 
