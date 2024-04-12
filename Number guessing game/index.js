//NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;

let answer = Math.floor((Math.random() * (maxNum - minNum + 1)) + minNum);

let attempts = 0;

let guess;

let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if (isNaN(guess)){
        window.alert("Please enter a valid number");
    }else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }else{
        attempts++;
        if(guess < answer){
            window.alert("Your number is too low. Try again!");
        }
        else if(guess > answer){
            window.alert("Your number is too high. Try again!");
        }
        else{
            window.alert(`You got it! Good job! The answer was ${answer}. It took you ${attempts} attempts.`);
            running = false;
        }
    }
}
