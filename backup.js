let mainSnake = [{
    x: 0,
    y: 0,
}]
let incr = 50
let foodPosition = {};
let direction, up, down, right, left,points=0,speed;
let snake = document.getElementById("snake");
let food = document.querySelector(".food");




//Functions
//To Render Food Randomly
function renderRandomFood() {
    foodPosition = {
        x: Math.round(Math.random() * 11) * 50,
        y: Math.round(Math.random() * 9) * 50,
    };
    if (foodPosition.x !== mainSnake.x || foodPosition.y !== mainSnake.y) {
        food.style.left = foodPosition.x + "px"
        food.style.top = foodPosition.y + "px"

    }
    else {
        food.style.left = foodPosition.x + "px"
        food.style.top = foodPosition.y + "px"
    }
}
//check food eaten??
function ifFoodEaten() {
    if (mainSnake[0].x === foodPosition.x && mainSnake[0].y === foodPosition.y) {
        console.log("eaten")
        mainSnake.push(foodPosition)
        console.log('mainSnake: ', mainSnake);
        renderRandomFood()
        points+=10
        addDiv()
        console.log("attached");
        return true
    }
    return false
}
//To Move Right
function movedivRight(timestamp) {
    mainSnake[0].x += incr;
    snake.style.left = mainSnake[0].x + "px";
    direction = "right"
    if (mainSnake[0].x === 600) {
        mainSnake[0].x = 0
        snake.style.left = mainSnake[0].x + "px";
    }

    ifFoodEaten()

}
//To Move Left
function movedivLeft(timestamp) {
    mainSnake[0].x -= incr;
    snake.style.left = mainSnake[0].x + "px";
    direction = "left"
    if (mainSnake[0].x < 0) {
        mainSnake[0].x = 550
        snake.style.left = mainSnake[0].x + "px";
    }
    ifFoodEaten()
}
//To Move Down
function movedivDown(timestamp) {
    direction = "down"
    mainSnake[0].y += incr;
    snake.style.top = mainSnake[0].y + "px";
    if (mainSnake[0].y === 500) {
        mainSnake[0].y = 0
        snake.style.top = mainSnake[0].y + "px";
    }
    ifFoodEaten()

}
//To Move Up 
function movedivUp(timestamp) {
    mainSnake[0].y -= incr;
    snake.style.top = mainSnake[0].y + "px";
    direction = "up"
    if (mainSnake[0].y < 0) {
        mainSnake[0].y = 450
        snake.style.top = mainSnake[0].y + "px";
    }
    ifFoodEaten()

}
function addDiv(){
    let snakeDiv=document.createElement("div")
    snake.appendChild(snakeDiv)
    snakeDiv.setAttribute("class", "snake"); 
    snakeDiv.style.left=foodPosition.x+"px"
    snakeDiv.style.top=foodPosition.y+"px"
    
    
}    


// function updateDiv(){
//     for(let i=mainSnake.length;i<0;i++){
//     snakeDiv.style.left=mainSnake[i-1].x+"px"
//     snakeDiv.style.top=mainSnake[i-1].y+"px"
//     snakeDiv.innerHTMl-"zafir"
// }
// }
//Arrow keys Function
function arrowKeys() {
    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 37: {
                console.log('direction points: ', mainSnake);
                console.log('food points: ', foodPosition);
                if (direction === "right" || direction === "left") break;
                direction = "left"
                left = setInterval(movedivLeft, 500-points);
                clearInterval(up)
                clearInterval(down)
                clearInterval(right)
                break;

            }
            case 38: {
                console.log('direction: ', direction);

                if (direction === "down" || direction === "up") break;
                direction = "up"
                up = setInterval(movedivUp, 500-points);
                clearInterval(down)
                clearInterval(left)
                clearInterval(right)
                break;

            }
            case 39:
                {
                    console.log('direction: ', direction);
                    if (direction === "left" || direction === "right") break;
                    direction = "right"
                    right = setInterval(movedivRight, 500-points);
                    clearInterval(up)
                    clearInterval(down)
                    clearInterval(left)
                    break;
                }
            case 40: {
                console.log('direction: ', direction);
                if (direction === "up" || direction === "down") break;
                direction = "down"
                down = setInterval(movedivDown, 500-points);
                clearInterval(up)
                clearInterval(right)
                clearInterval(left)
                break;
            }
        }
    }
}
//Main
if (!ifFoodEaten()) {
    renderRandomFood()
    console.log("not Eaten");
}
   
    

arrowKeys()
