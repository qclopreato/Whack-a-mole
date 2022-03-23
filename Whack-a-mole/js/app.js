let score = 0;
let randomNum = 0;

document.getElementById(`start`).addEventListener(`click`, function(){
    setTimeout(clicker, 2000);
    function clicker(){
        document.getElementById(`start`).click();
    }
});

document.getElementById(`start`).addEventListener(`click`, function(){
function turnBlack(){
        switch(randomNum){
            case 1: 
                document.getElementById(`one`).style.color = `black`;
                break;
            case 2: 
                document.getElementById(`two`).style.color = `black`;
                break;
            case 3: 
                document.getElementById(`three`).style.color = `black`;
                break;
            case 4: 
                document.getElementById(`four`).style.color = `black`;
                break;
            case 5: 
                document.getElementById(`five`).style.color = `black`;
                break;
            case 6: 
                document.getElementById(`six`).style.color = `black`;
                break;
            case 7: 
                document.getElementById(`seven`).style.color = `black`;
                break;
            case 8: 
                document.getElementById(`eight`).style.color = `black`;
                break;
            case 9: 
                document.getElementById(`nine`).style.color = `black`;
                break;
        }
    }
    randomNum = Math.floor(1 + Math.random() * 9);
    console.log(randomNum);
    switch(randomNum){
        case 1:
            document.getElementById(`one`).style.color = "red";
            setTimeout(turnBlack, 750);
            break;
        case 2:
            document.getElementById(`two`).style.color = `red`;
            setTimeout(turnBlack, 750);
            break;
        case 3:
            document.getElementById(`three`).style.color = `red`;
            setTimeout(turnBlack, 750);
            break;
        case 4:
            document.getElementById(`four`).style.color = `red`;
            setTimeout(turnBlack, 750);
            break;
        case 5:
            document.getElementById(`five`).style.color = `red`;
            setTimeout(turnBlack, 750);
            break;
        case 6:
            document.getElementById(`six`).style.color = `red`;
            setTimeout(turnBlack, 750);
            break;
        case 7:
            document.getElementById(`seven`).style.color = `red`;
            setTimeout(turnBlack, 750);
            break;
        case 8:
            document.getElementById(`eight`).style.color = `red`;
            setTimeout(turnBlack, 750);
            break;
        case 9:
            document.getElementById(`nine`).style.color = `red`;
            setTimeout(turnBlack, 750);
            break;
    }
});

document.getElementById(`one`).addEventListener(`click`, function(){
    if(document.getElementById(`one`).style.color === `red`){
        console.log(`POINT`);
        score += 1;
        document.getElementById(`score`).innerHTML = score;
    } else if (document.getElementById(`one`).style.color !== `red`){
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
    } else if (document.getElementById(`two`).style.color !== `red`){
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
    } else if (document.getElementById(`three`).style.color !== `red`){
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
    } else if (document.getElementById(`four`).style.color !== `red`){
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
    } else if (document.getElementById(`five`).style.color !== `red`){
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
    } else if (document.getElementById(`six`).style.color !== `red`){
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
    } else if (document.getElementById(`seven`).style.color !== `red`){
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
    } else if (document.getElementById(`eight`).style.color !== `red`){
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
    } else if (document.getElementById(`nine`).style.color !== `red`){
        console.log(`LOSE POINT`);
        score -= 1;
        document.getElementById(`score`).innerHTML = score;
    }
});
