let score = 0;
let randomNum = 0;

document.getElementById(`start`).addEventListener(`click`, function(){
    randomNum = Math.round(Math.random() * 8);
    console.log(randomNum);
    switch(randomNum){
        case 1:
            /*setTimeout(function(){
                document.getElementById(`one`).style.color = "red"
            }, 3000);*/
    }
});