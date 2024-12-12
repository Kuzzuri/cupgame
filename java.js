const cup1 = document.getElementById("cup1");
const cup2 = document.getElementById("cup2");
const cup3 = document.getElementById("cup3");
const ball1 = document.getElementById("ball1");
const ball2 = document.getElementById("ball2");
const ball3 = document.getElementById("ball3");
let counterForTwo = 0;
let ballList = [ball1, ball2, ball3];
let ballList2 = [ball1, ball2, ball3];
let topListe2 = [ball1, ball2, ball3];
let topListe3 = [ball1, ball2, ball3];
let topListe4 = [ball1, ball2, ball3];
let ballList3 = [ball1, ball2, ball3];
let ballList4 = [ball1, ball2, ball3];
let ballList5 = [ball1, ball2, ball3];
let random = Math.floor(Math.random() * 3);
let randomSpot = ballList[random];
let button = document.getElementById("button");
const cupsDiv = document.getElementById("cupsDiv");
const gameDiv = document.getElementById("gameDiv");
const ballsDiv = document.getElementById("ballsDiv");
let scoreText = document.getElementById("scoreText")
let scoreResult = document.getElementById("scoreResult");
let score = 0;
let gameCounter = 0;
let numberCount = 0;
let titles = document.getElementById("titles");
let numberT = 3;

button.addEventListener("click", () => {
    if(cupsDiv.classList.contains("cupsUp")){
        if(!gameDiv.classList.contains("gameActive")){
    cupsDiv.classList.remove("cupsUp");
    cupsDiv.classList.add("cupsDown");
    ballsDiv.classList.add("displaySikici");
    gameDiv.classList.add("gameActive");
    scoreText.textContent = "";
    titles.textContent = 1;
    setTimeout(() => {
        playGame()
    }, 500)
    }
    else if(gameDiv.classList.contains("gameActive")){
        numberCount++;
        numberRandomizer()
        titles.textContent = 1;
        gameDiv.classList.remove("gameActive");
        cupsDiv.classList.remove("cupsUp");
        cupsDiv.classList.add("cupsDown");
        ballsDiv.classList.add("displaySikici");
        if(numberCount < 2){
            cup1.style.transition = "0.3s"
            cup2.style.transition = "0.3s"
            cup3.style.transition = "0.3s"
        }
        else if(numberCount == 2){
            cup1.style.transition = "0.2s"
            cup2.style.transition = "0.2s"
            cup3.style.transition = "0.2s"
        }
        else if(numberCount == 3){
            cup1.style.transition = "0.1s"
            cup2.style.transition = "0.1s"
            cup3.style.transition = "0.1s"
        
        }
        else if(numberCount == 5){
            cup1.style.transition = "50ms"
            cup2.style.transition = "50ms"
            cup3.style.transition = "50ms"
        
        }
        else if(numberCount > 5){
            cup1.style.transition = "40ms"
            cup2.style.transition = "40ms"
            cup3.style.transition = "40ms"
        
        }
        scoreText.textContent = "";
        setTimeout(() => {
            gameDiv.classList.add("gameActive");
            playGame()
        }, 500)
    }
    }
    else{

    }
    console.log(numberCount)
})

function playReseter(){
    cup1.classList.remove("sectorOne");
    cup1.classList.remove("sectorTwo");
    cup1.classList.remove("sectorThree");
    cup2.classList.remove("sectorOne");
    cup2.classList.remove("sectorTwo");
    cup2.classList.remove("sectorThree");
    cup3.classList.remove("sectorOne");
    cup3.classList.remove("sectorTwo");
    cup3.classList.remove("sectorThree");
    cup1.classList.add("sectorOne");
    cup3.classList.add("sectorThree");
    cup2.classList.add("sectorTwo")
}




const selector = () => {
    counter++;
    cup2.classList.remove("sectorTwo")
    cup2.classList.add("sectorThree")
    cup3.classList.remove("sectorThree")
    cup3.classList.add("sectorTwo")
    console.log(counter);
    if(counter < 3){
        selector()
    }
}

const randomSpotOneFunction = () => {
    if(cup1.classList.contains("sectorOne")){

    }
    else if(cup1.classList.contains("sectorTwo")){
        if(cup2.classList.contains("sectorOne")){
            cup2.classList.remove("sectorOne");
            cup2.classList.add("sectorTwo");
            cup1.classList.remove("sectorTwo");
            cup1.classList.add("sectorOne");
        }
        else if(cup3.classList.contains("sectorOne")){
            cup3.classList.remove("sectorOne");
            cup3.classList.add("sectorTwo");
            cup1.classList.remove("sectorTwo");
            cup1.classList.add("sectorOne");
        }
    }
    else if(cup1.classList.contains("sectorThree")){
        if(cup2.classList.contains("sectorOne")){
            cup2.classList.remove("sectorOne");
            cup2.classList.add("sectorThree");
            cup1.classList.remove("sectorThree");
            cup1.classList.add("sectorOne");
        }
        else if(cup3.classList.contains("sectorOne")){
            cup3.classList.remove("sectorOne");
            cup3.classList.add("sectorThree");
            cup1.classList.remove("sectorThree");
            cup1.classList.add("sectorOne");
        }
    }
    cupMoverTwo(cupMoverThree);
}
const randomSpotTwoFunction = () => {
    if(cup1.classList.contains("sectorTwo")){

    }
    else if(cup1.classList.contains("sectorOne")){
        if(cup2.classList.contains("sectorTwo")){
            cup2.classList.remove("sectorTwo");
            cup2.classList.add("sectorOne");
            cup1.classList.remove("sectorOne");
            cup1.classList.add("sectorTwo");
        }
        else if(cup3.classList.contains("sectorTwo")){
            cup3.classList.remove("sectorTwo");
            cup3.classList.add("sectorOne");
            cup1.classList.remove("sectorOne");
            cup1.classList.add("sectorTwo");
        }
    }
    else if(cup1.classList.contains("sectorThree")){
        if(cup2.classList.contains("sectorTwo")){
            cup2.classList.remove("sectorTwo");
            cup2.classList.add("sectorThree");
            cup1.classList.remove("sectorThree");
            cup1.classList.add("sectorTwo");
        }
        else if(cup3.classList.contains("sectorTwo")){
            cup3.classList.remove("sectorTwo");
            cup3.classList.add("sectorThree");
            cup1.classList.remove("sectorThree");
            cup1.classList.add("sectorTwo");
        }
    }
    cupMoverTwo(cupMoverThree);
}
const randomSpotThreeFunction = () => {
    if(cup1.classList.contains("sectorThree")){

    }
    else if(cup1.classList.contains("sectorTwo")){
        if(cup2.classList.contains("sectorThree")){
            cup2.classList.remove("sectorThree");
            cup2.classList.add("sectorTwo");
            cup1.classList.remove("sectorTwo");
            cup1.classList.add("sectorThree");
        }
        else if(cup3.classList.contains("sectorThree")){
            cup3.classList.remove("sectorThree");
            cup3.classList.add("sectorTwo");
            cup1.classList.remove("sectorTwo");
            cup1.classList.add("sectorThree");
        }
    }
    else if(cup1.classList.contains("sectorOne")){
        if(cup2.classList.contains("sectorThree")){
            cup2.classList.remove("sectorThree");
            cup2.classList.add("sectorOne");
            cup1.classList.remove("sectorOne");
            cup1.classList.add("sectorThree");
        }
        else if(cup3.classList.contains("sectorThree")){
            cup3.classList.remove("sectorThree");
            cup3.classList.add("sectorOne");
            cup1.classList.remove("sectorOne");
            cup1.classList.add("sectorThree");
        }
    }
    cupMoverTwo(cupMoverThree);
}

const playGame = () => {
    ball1.style.color = "red";
    ball2.style.color = "white";
    ball3.style.color = "white";
    cupMover();
}

 const cupMover = () => {
        if(randomSpot == ball1){
            randomSpotOneFunction()
        }
        else if(randomSpot == ball2){
            randomSpotTwoFunction()
        }
        else if(randomSpot == ball3){
            randomSpotThreeFunction()
        }
        console.log("I am cupMoverOne");
}



//breakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

let randomTwo = Math.floor(Math.random() * 2);
let ballListRemoved = ballList2.splice(random, 1)
let randomSpotTwo = ballList2[randomTwo];
const trashTwo = topListe2.splice(topListe2.indexOf(randomSpotTwo), 1)


function cupMoverTwo(callback) {
        counterForTwo++;
        if(counterForTwo == 1){
            setTimeout(() => {
                if(randomSpotTwo == ball1){
                    randomSpotOneFunction()
                }
                else if(randomSpotTwo == ball2){
                    randomSpotTwoFunction()
                }
                else if(randomSpotTwo == ball3){
                    randomSpotThreeFunction()
                }
                console.log("I am cupMoverTwo")
                callback()
            }, 500)
        }
}

let randomThree = Math.floor(Math.random() * 2);
let randomSpotThree = topListe2[randomThree];
const trashThree = topListe3.splice(topListe3.indexOf(randomSpotThree), 1)

const cupMoverThree = () => {
    setTimeout(() => {
        if(randomSpotThree == ball1){
            randomSpotOneFunctionCopy()
        }
        else if(randomSpotThree == ball2){
            randomSpotTwoFunctionCopy()
        }
        else if(randomSpotThree == ball3){
            randomSpotThreeFunctionCopy()
        }
        console.log("I am cupMoverThree")
    }, 500)
}

let randomFour = Math.floor(Math.random() * 2);
let randomSpotFour = topListe3[randomFour];
const trashFour = topListe4.splice(topListe4.indexOf(randomSpotFour), 1)

function cupMoverFour(callback){
    setTimeout(() => {
        if(randomSpotFour == ball1){
            randomSpotOneFunction()
        }
        else if(randomSpotFour == ball2){
            randomSpotTwoFunction()
        }
        else if(randomSpotFour == ball3){
            randomSpotThreeFunction()
        }
        callback()
        console.log("I am cupMoverFour")
    }, 500)
}

let randomFive = Math.floor(Math.random() * 2);
let randomSpotFive = topListe4[randomFive];

function cupMoverFive(){
    setTimeout(() => {
        titles.textContent = 0;
    }, 1000)
    if(gameCounter == 0){
        gameCounter++;
        setTimeout(() => {
            if(randomSpotFive == ball1){
                randomSpotOneFunction()
            }
            else if(randomSpotFive == ball2){
                randomSpotTwoFunction()
                ball1.style.color = "white"
                ball2.style.color = "red"
                ball3.style.color = "white"
            }
            else if(randomSpotFive == ball3){
                randomSpotThreeFunction()
                ball1.style.color = "white"
                ball2.style.color = "white"
                ball3.style.color = "red"
            }
            console.log("I am cupMoverFive");
        }, 500)
    }
    else if(gameCounter > 0){
        setTimeout(() => {
        if(ballList[title.textContent].id == ball1.id){
            randomSpotOneFunction()
        }
        else if(ballList[title.textContent].id == ball2.id){
            randomSpotTwoFunction()
            ball1.style.color = "white"
            ball2.style.color = "red"
            ball3.style.color = "white"
            console.log("i work")
        }
        else if(ballList[title.textContent].id == ball3.id){
            randomSpotThreeFunction()
            ball1.style.color = "white"
            ball2.style.color = "white"
            ball3.style.color = "red"
            console.log("i work?")
        }
        console.log("I am cupMoverFiveImpostor")
        console.log(ballList[title.textContent]);
        console.log(ball1.id)
        console.log(ball2.id)
        console.log(ball3.id)
    }, 500)
    }
}

const randomSpotOneFunctionCopy = () => {
    if(cup1.classList.contains("sectorOne")){

    }
    else if(cup1.classList.contains("sectorTwo")){
        if(cup2.classList.contains("sectorOne")){
            cup2.classList.remove("sectorOne");
            cup2.classList.add("sectorTwo");
            cup1.classList.remove("sectorTwo");
            cup1.classList.add("sectorOne");
        }
        else if(cup3.classList.contains("sectorOne")){
            cup3.classList.remove("sectorOne");
            cup3.classList.add("sectorTwo");
            cup1.classList.remove("sectorTwo");
            cup1.classList.add("sectorOne");
        }
    }
    else if(cup1.classList.contains("sectorThree")){
        if(cup2.classList.contains("sectorOne")){
            cup2.classList.remove("sectorOne");
            cup2.classList.add("sectorThree");
            cup1.classList.remove("sectorThree");
            cup1.classList.add("sectorOne");
        }
        else if(cup3.classList.contains("sectorOne")){
            cup3.classList.remove("sectorOne");
            cup3.classList.add("sectorThree");
            cup1.classList.remove("sectorThree");
            cup1.classList.add("sectorOne");
        }
    }
    cupMoverFour(cupMoverFive)
}
const randomSpotTwoFunctionCopy = () => {
    if(cup1.classList.contains("sectorTwo")){

    }
    else if(cup1.classList.contains("sectorOne")){
        if(cup2.classList.contains("sectorTwo")){
            cup2.classList.remove("sectorTwo");
            cup2.classList.add("sectorOne");
            cup1.classList.remove("sectorOne");
            cup1.classList.add("sectorTwo");
        }
        else if(cup3.classList.contains("sectorTwo")){
            cup3.classList.remove("sectorTwo");
            cup3.classList.add("sectorOne");
            cup1.classList.remove("sectorOne");
            cup1.classList.add("sectorTwo");
        }
    }
    else if(cup1.classList.contains("sectorThree")){
        if(cup2.classList.contains("sectorTwo")){
            cup2.classList.remove("sectorTwo");
            cup2.classList.add("sectorThree");
            cup1.classList.remove("sectorThree");
            cup1.classList.add("sectorTwo");
        }
        else if(cup3.classList.contains("sectorTwo")){
            cup3.classList.remove("sectorTwo");
            cup3.classList.add("sectorThree");
            cup1.classList.remove("sectorThree");
            cup1.classList.add("sectorTwo");
        }
    }
    cupMoverFour(cupMoverFive)
}
const randomSpotThreeFunctionCopy = () => {
    if(cup1.classList.contains("sectorThree")){

    }
    else if(cup1.classList.contains("sectorTwo")){
        if(cup2.classList.contains("sectorThree")){
            cup2.classList.remove("sectorThree");
            cup2.classList.add("sectorTwo");
            cup1.classList.remove("sectorTwo");
            cup1.classList.add("sectorThree");
        }
        else if(cup3.classList.contains("sectorThree")){
            cup3.classList.remove("sectorThree");
            cup3.classList.add("sectorTwo");
            cup1.classList.remove("sectorTwo");
            cup1.classList.add("sectorThree");
        }
    }
    else if(cup1.classList.contains("sectorOne")){
        if(cup2.classList.contains("sectorThree")){
            cup2.classList.remove("sectorThree");
            cup2.classList.add("sectorOne");
            cup1.classList.remove("sectorOne");
            cup1.classList.add("sectorThree");
        }
        else if(cup3.classList.contains("sectorThree")){
            cup3.classList.remove("sectorThree");
            cup3.classList.add("sectorOne");
            cup1.classList.remove("sectorOne");
            cup1.classList.add("sectorThree");
        }
    }
    cupMoverFour(cupMoverFive)
}


cup1.addEventListener("click", () =>{
    if(!cupsDiv.classList.contains("cupsUp")){
        if(titles.textContent == 0){
            counterForTwo--;
            counterForTwo--;
            counterForTwo--;
            counterForTwo--;
            cupsDiv.classList.remove("cupsDown");
            cupsDiv.classList.add("cupsUp");
            ballsDiv.classList.remove("displaySikici")
            if(cup1.classList.contains("sectorOne")){
                if(ball1.style.color == "red"){
                    scoreText.classList.remove("resultLose");
                    scoreText.classList.add("resultWin");
                    scoreText.textContent = "You Win!"
                    score++;
                    scoreResult.textContent = `Score:${score}`;
                }
                else{
                    scoreText.classList.remove("resultLose");
                    scoreText.classList.add("resultWin");
                    scoreText.textContent = "You Lose!"
                }
        }
            else if(cup1.classList.contains("sectorTwo")){
                if(ball2.style.color == "red"){
                    scoreText.classList.remove("resultLose");
                    scoreText.classList.add("resultWin");
                    scoreText.textContent = "You Win!"
                    score++;
                    scoreResult.textContent = `Score:${score}`;
                }
                else{
                    scoreText.classList.remove("resultLose");
                    scoreText.classList.add("resultWin");
                    scoreText.textContent = "You Lose!"
                }
            }
            else if(cup1.classList.contains("sectorThree")){
                if(ball3.style.color == "red"){
                    scoreText.classList.remove("resultLose");
                    scoreText.classList.add("resultWin");
                    scoreText.textContent = "You Win!"
                    score++;
                    scoreResult.textContent = `Score:${score}`;
                }
                else{
                    scoreText.classList.remove("youWin")
                    scoreText.classList.add("resultLose");
                    scoreText.textContent = "You Lose!"
                }
            }
        }
    }
    else{
    }
})
cup2.addEventListener("click", () =>{
    if(!cupsDiv.classList.contains("cupsUp")){
        if(titles.textContent == 0){
            counterForTwo--;
            counterForTwo--;
            counterForTwo--;
            counterForTwo--;
            cupsDiv.classList.remove("cupsDown");
            cupsDiv.classList.add("cupsUp");
            ballsDiv.classList.remove("displaySikici")
            if(cup2.classList.contains("sectorOne")){
                if(ball1.style.color == "red"){
                    scoreText.classList.remove("resultLose");
                    scoreText.classList.add("resultWin");
                    scoreText.textContent = "You Win!"
                    score++;
                    scoreResult.textContent = `Score:${score}`;
                }
                else{
                    scoreText.classList.remove("youWin")
                    scoreText.classList.add("resultLose");
                    scoreText.textContent = "You Lose!"
                }
            }
            else if(cup2.classList.contains("sectorTwo")){
                if(ball2.style.color == "red"){
                    scoreText.classList.remove("resultLose");
                    scoreText.classList.add("resultWin");
                    scoreText.textContent = "You Win!"
                    score++;
                    scoreResult.textContent = `Score:${score}`;
                }
                else{
                    scoreText.classList.remove("youWin")
                    scoreText.classList.add("resultLose");
                    scoreText.textContent = "You Lose!"
                }
            }
            else if(cup2.classList.contains("sectorThree")){
                if(ball3.style.color == "red"){
                    scoreText.classList.remove("resultLose");
                    scoreText.classList.add("resultWin");
                    scoreText.textContent = "You Win!"
                    score++;
                    scoreResult.textContent = `Score:${score}`;
                }
                else{
                    scoreText.classList.remove("youWin")
                    scoreText.classList.add("resultLose");
                    scoreText.textContent = "You Lose!"
                }
            }
        }
    }
    else{

    }
})
cup3.addEventListener("click", () =>{
    if(!cupsDiv.classList.contains("cupsUp")){
        if(titles.textContent == 0){
            counterForTwo--;
        counterForTwo--;
        counterForTwo--;
        counterForTwo--;
        cupsDiv.classList.remove("cupsDown");
        cupsDiv.classList.add("cupsUp");
        ballsDiv.classList.remove("displaySikici");
        if(cup3.classList.contains("sectorOne")){
            if(ball1.style.color == "red"){
                scoreText.classList.remove("resultLose");
                scoreText.classList.add("resultWin");
                scoreText.textContent = "You Win!"
                score++;
                scoreResult.textContent = `Score:${score}`;
            }
            else{
                scoreText.classList.add("resultLose");
                scoreText.classList.remove("resultWin");
                scoreText.textContent = "You Lose!"
            }
        }
        else if(cup3.classList.contains("sectorTwo")){
            if(ball2.style.color == "red"){
                scoreText.classList.remove("resultLose");
                scoreText.classList.add("resultWin");
                scoreText.textContent = "You Win!"
                score++;
                scoreResult.textContent = `Score:${score}`;
            }
            else{
                scoreText.classList.add("resultLose");
                scoreText.classList.remove("resultWin");
                scoreText.textContent = "You Lose!"
            }
        }
        else if(cup3.classList.contains("sectorThree")){
            if(ball3.style.color == "red"){
                scoreText.classList.remove("resultLose");
                scoreText.classList.add("resultWin");
                scoreText.textContent = "You Win!"
                score++;
                scoreResult.textContent = `Score:${score}`;
            }
            else{
                scoreText.classList.add("resultLose");
                scoreText.classList.remove("resultWin");
                scoreText.textContent = "You Lose!"
            }
        }
    }
        }
    else{

    }
})



console.log(randomSpot);
console.log(randomSpotTwo);
console.log(randomSpotThree);
console.log(randomSpotFour);
console.log(randomSpotFive);


//button gameunactive tıkladığında variable yap random => bu randomı impostor kullansın
function numberRandomizer(){
    const numberRandom = Math.floor(Math.random () * 3);
    title.textContent = numberRandom
}