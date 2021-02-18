'use strict';
let a = 0;

let userName = prompt('what is your name?');                 //declaration varible user name to ask the user about the name
console.log(userName);
alert('Welcome to guessing game website ' + userName + '  ^_^ ');

alert('I will ask you five questions about me,please answer with yes/y or no/n');

//declaration varible likePhotography to ask the user and console the value

let likePhotography = prompt('do I like photography?');          
likePhotography = likePhotography.toLowerCase();

console.log(likePhotography);

// while loop to get specific answer from user yes/y/n/no
while ((likePhotography !== 'yes') && (likePhotography !== 'y') && (likePhotography !== 'no') && (likePhotography !== 'n')) {
  likePhotography = prompt('do I like photography?');
}


if (likePhotography === 'yes' || likePhotography === 'y') {    //condition to check the right answer
  alert('good guessing ^_^');
  a++;
}

else { alert('sorry but wrong answer'); }

//declaration var. likeDriving

let likeDriving = prompt('do I like driving?');
likeDriving = likeDriving.toLowerCase();
console.log(likeDriving);

while ((likeDriving !== 'yes') && (likeDriving !== 'y') && (likeDriving !== 'no') && (likeDriving !== 'n')) {
  likeDriving = prompt('do I like driving?');
}
if (likeDriving === 'yes' || likeDriving === 'y') {            //condition to check the right answer
  alert('you are right ^_^');
  a++;
}
else { alert('sorry wrong answer,I do *_*'); }

//declaration var. likeMeanPeople 

let likeMeanPeople = prompt('do I like mean people?');
likeMeanPeople = likeMeanPeople.toLowerCase();
console.log(likeMeanPeople);

while ((likeMeanPeople !== 'yes') && (likeMeanPeople !== 'y') && (likeMeanPeople !== 'no') && (likeMeanPeople !== 'n')) {
  likeMeanPeople = prompt('do I like mean people?');
}
if (likeMeanPeople === 'no' || likeMeanPeople === 'n') {
  alert('you are right, I like nice people just like you ^_^');
  a++;
}
else { alert('no I do not like them *_*'); }

//declaration var. greatPersonality


let greatPersonality = prompt('do I have great personality?');
greatPersonality = greatPersonality.toLowerCase();
console.log(greatPersonality);

while ((greatPersonality !== 'yes') && (greatPersonality !== 'y') && (greatPersonality !== 'no') && (greatPersonality !== 'n')) {
  greatPersonality = prompt('do I have great personality?');
}
if (greatPersonality === 'yes' || greatPersonality === 'y') {
  alert('thanx ^_^');
  a++;
}
else { alert('I will work for that :)'); }

//declaration var.favColor

let favColor = prompt('is it the brown my favourite color?');
favColor = favColor.toLowerCase();
console.log(likeDriving);

while ((favColor !== 'yes') && (favColor !== 'y') && (favColor !== 'no') && (favColor !== 'n')) {
  favColor = prompt('is it the brown my favourite color?');
}

if (favColor === 'no' || favColor === 'n') {
  alert('my favourite color is red ^_^');
  a++;
}
else { alert('sorry wrong answer,not my favourite *_*'); }



let condition1 = false;


alert('now guessing number game ,be ready!');

for (let i = 0; i < 4; i++) {          //for loop to check the attemp numbers
  let guessNumber1 = prompt('can you please guess a random number');

  if (guessNumber1 > '3') {            //check the condition
    alert('too high');
  }

  else if (guessNumber1 < 3) { alert('too low'); }
  else {
    a++;
    condition1 = true;
    alert('right guessing congrats ^_^');
    break;
  }
}

if (condition1 === false) {
  alert('sorry but you have exhausted all attempts The correct answer is 3');
}



let favDrink = ['tea', 'coffee', 'milk', 'nescafe', 'orange juice', 'pepsi'];    //declartion favDrink array

let condition2 = false;

for (let j = 0; j < 6; j++) {                                                   //for loop to check the attemp numbers
  let drinkName = prompt('now can you guess what is my favorite drink? be careful you have 6 trails ');

  for (let check = 0; check < favDrink.length; check++) {                        //check the condition
    if (drinkName === favDrink[check]) {

      a++;
      condition2 = true;
      alert('correct answer ^_^ ,the correct answers are ' + favDrink[0] + ',' + favDrink[1] + ',' + favDrink[2] + ',' + favDrink[3] + ',' + favDrink[4]) + ',' + favDrink[5] ;

      break;
    }
  }
  if (condition2 === true) {
    break;
  }
  alert('sorry try again');
}
if (condition2 === false) {
  alert('sorry but you have exhausted all trails,the correct answer are ' + favDrink[0] + ',' + favDrink[1] + ',' + favDrink[2] + ',' + favDrink[3] + ',' + favDrink[4]) + ',' + favDrink[5] ;


}
alert('your score is ' + a + '/7');
alert('thank you for visiting our website and for your time ^_^ ' + userName);


