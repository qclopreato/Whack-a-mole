let score = 0;
let randomNum = 0;

document.getElementById(`start`).addEventListener(`click`, function(){
    setTimeout(clicker, 2000);
    function clicker(){
        document.getElementById(`start`).click();
    }
});

document.getElementById(`start`).addEventListener(`click`, function(){
document.getElementById(`one`).style.color = `black`;
document.getElementById(`two`).style.color = `black`;
document.getElementById(`three`).style.color = `black`;
document.getElementById(`four`).style.color = `black`;
document.getElementById(`five`).style.color = `black`;
document.getElementById(`six`).style.color = `black`;
document.getElementById(`seven`).style.color = `black`;
document.getElementById(`eight`).style.color = `black`;
document.getElementById(`nine`).style.color = `black`;
function turnBlack(){
        switch(randomNum){
            case 1: 
                document.getElementById(`one`).innerHTML = `X`;
                document.getElementById(`one`).style.color = `black`;
                break;
            case 2:
                document.getElementById(`two`).innerHTML = `X`; 
                document.getElementById(`two`).style.color = `black`;
                break;
            case 3: 
                document.getElementById(`three`).innerHTML = `X`;
                document.getElementById(`three`).style.color = `black`;
                break;
            case 4:
                document.getElementById(`four`).innerHTML = `X`; 
                document.getElementById(`four`).style.color = `black`;
                break;
            case 5:
                document.getElementById(`five`).innerHTML = `X`; 
                document.getElementById(`five`).style.color = `black`;
                break;
            case 6: 
                document.getElementById(`six`).innerHTML = `X`;
                document.getElementById(`six`).style.color = `black`;
                break;
            case 7:
                document.getElementById(`seven`).innerHTML = `X`; 
                document.getElementById(`seven`).style.color = `black`;
                break;
            case 8:
                document.getElementById(`eight`).innerHTML = `X`; 
                document.getElementById(`eight`).style.color = `black`;
                break;
            case 9:
                document.getElementById(`nine`).innerHTML = `X`; 
                document.getElementById(`nine`).style.color = `black`;
                break;
        }
    }
    randomNum = Math.floor(1 + Math.random() * 9);
    console.log(randomNum);
    switch(randomNum){
        case 1:
            document.getElementById(`one`).style.color = "red";
            document.getElementById(`one`).innerHTML = "O";
            setTimeout(turnBlack, 750);
            break;
        case 2:
            document.getElementById(`two`).style.color = `red`;
            document.getElementById(`two`).innerHTML = "O";
            setTimeout(turnBlack, 750);
            break;
        case 3:
            document.getElementById(`three`).style.color = `red`;
            document.getElementById(`three`).innerHTML = "O";
            setTimeout(turnBlack, 750);
            break;
        case 4:
            document.getElementById(`four`).style.color = `red`;
            document.getElementById(`four`).innerHTML = "O";
            setTimeout(turnBlack, 750);
            break;
        case 5:
            document.getElementById(`five`).style.color = `red`;
            document.getElementById(`five`).innerHTML = "O";
            setTimeout(turnBlack, 750);
            break;
        case 6:
            document.getElementById(`six`).style.color = `red`;
            document.getElementById(`six`).innerHTML = "O";
            setTimeout(turnBlack, 750);
            break;
        case 7:
            document.getElementById(`seven`).style.color = `red`;
            document.getElementById(`seven`).innerHTML = "O";
            setTimeout(turnBlack, 750);
            break;
        case 8:
            document.getElementById(`eight`).style.color = `red`;
            document.getElementById(`eight`).innerHTML = "O";
            setTimeout(turnBlack, 750);
            break;
        case 9:
            document.getElementById(`nine`).style.color = `red`;
            document.getElementById(`nine`).innerHTML = "O";
            setTimeout(turnBlack, 750);
            break;
    }
});

document.getElementById(`one`).addEventListener(`click`, function(){
    if(document.getElementById(`one`).style.color === `red`){
        console.log(`POINT`);
        score += 1;
        document.getElementById(`score`).innerHTML = score;
    } else if (document.getElementById(`one`).style.color === `black`){
        console.log(`LOSE POINT`);
        score -= 1;
        document.getElementById(`score`).innerHTML = score;
    }
});
document.getElementById(`two`).addEventListener(`click`, function(){
    if(document.getElementById(`two`).style.color === `red`){
        console.log(`POINT`);
        score += 1;
        document.getElementById(`score`).innerHTML = score;
    } else if (document.getElementById(`one`).style.color === `black`){
        console.log(`LOSE POINT`);
        score -= 1;
        document.getElementById(`score`).innerHTML = score;
    }
});
document.getElementById(`three`).addEventListener(`click`, function(){
    if(document.getElementById(`three`).style.color === `red`){
        console.log(`POINT`);
        score += 1;
        document.getElementById(`score`).innerHTML = score;
    } else if (document.getElementById(`one`).style.color === `black`){
        console.log(`LOSE POINT`);
        score -= 1;
        document.getElementById(`score`).innerHTML = score;
    }
});
document.getElementById(`four`).addEventListener(`click`, function(){
    if(document.getElementById(`four`).style.color === `red`){
        console.log(`POINT`);
        score += 1;
        document.getElementById(`score`).innerHTML = score;
    } else if (document.getElementById(`one`).style.color === `black`){
        console.log(`LOSE POINT`);
        score -= 1;
        document.getElementById(`score`).innerHTML = score;
    }
});
document.getElementById(`five`).addEventListener(`click`, function(){
    if(document.getElementById(`five`).style.color === `red`){
        console.log(`POINT`);
        score += 1;
        document.getElementById(`score`).innerHTML = score;
    } else if (document.getElementById(`one`).style.color === `black`){
        console.log(`LOSE POINT`);
        score -= 1;
        document.getElementById(`score`).innerHTML = score;
    }
});
document.getElementById(`six`).addEventListener(`click`, function(){
    if(document.getElementById(`six`).style.color === `red`){
        console.log(`POINT`);
        score += 1;
        document.getElementById(`score`).innerHTML = score;
    } else if (document.getElementById(`one`).style.color === `black`){
        console.log(`LOSE POINT`);
        score -= 1;
        document.getElementById(`score`).innerHTML = score;
    }
});
document.getElementById(`seven`).addEventListener(`click`, function(){
    if(document.getElementById(`seven`).style.color === `red`){
        console.log(`POINT`);
        score += 1;
        document.getElementById(`score`).innerHTML = score;
    } else if (document.getElementById(`one`).style.color === `black`){
        console.log(`LOSE POINT`);
        score -= 1;
        document.getElementById(`score`).innerHTML = score;
    }
});
document.getElementById(`eight`).addEventListener(`click`, function(){
    if(document.getElementById(`eight`).style.color === `red`){
        console.log(`POINT`);
        score += 1;
        document.getElementById(`score`).innerHTML = score;
    } else if (document.getElementById(`one`).style.color === `black`){
        console.log(`LOSE POINT`);
        score -= 1;
        document.getElementById(`score`).innerHTML = score;
    }
});
document.getElementById(`nine`).addEventListener(`click`, function(){
    if(document.getElementById(`nine`).style.color === `red`){
        console.log(`POINT`);
        score += 1;
        document.getElementById(`score`).innerHTML = score;
    } else if (document.getElementById(`one`).style.color === `black`){
        console.log(`LOSE POINT`);
        score -= 1;
        document.getElementById(`score`).innerHTML = score;
    }
});
