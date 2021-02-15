'use strict';
let userName=prompt('what is your name?');
console.log(userName);
alert('Welcome to guessing game website ' +userName + '  ^_^ ');

alert('I will ask you five questions about me,please answer with yes/y or no/n');

let likePhotography = prompt('do I like photography?');
likePhotography= likePhotography.toLowerCase();

console.log(likePhotography);
while((likePhotography !=='yes') && (likePhotography !=='y') && (likePhotography !=='no') && (likePhotography !=='n'))
{
  likePhotography= prompt('do I like photography?');
}


if(likePhotography==='yes' || likePhotography=== 'y')
{
  alert('good guessing ^_^');
} else {alert('sorry but wrong answer');}


let likeDriving = prompt('do I like driving?');
likeDriving= likeDriving.toLowerCase();
console.log(likeDriving);

while((likeDriving !=='yes') && (likeDriving !=='y') && (likeDriving !=='no') && (likeDriving !=='n'))
{
  likeDriving= prompt('do I like driving?');
}
if (likeDriving==='yes'|| likeDriving==='y' )
{alert('you are right ^_^');}
else{alert('sorry wrong answer,I do *_*');}


let likeMeanPeople = prompt('do I like mean people?');
likeMeanPeople= likeMeanPeople.toLowerCase();
console.log(likeMeanPeople);

while((likeMeanPeople !=='yes') && (likeMeanPeople !=='y') && (likeMeanPeople !=='no') && (likeMeanPeople !=='n'))
{
  likeMeanPeople= prompt('do I like mean people?');
}
if (likeMeanPeople==='no'|| likeMeanPeople==='n' )
{alert('you are right, I like nice people just like you ^_^');}
else{alert('no I do not like them *_*');}

let greatPersonality = prompt('do I have great personality?');
greatPersonality= greatPersonality.toLowerCase();
console.log(greatPersonality);

while((greatPersonality !=='yes') && (greatPersonality !=='y') && (greatPersonality !=='no') && (greatPersonality !=='n'))
{
  greatPersonality = prompt('do I have great personality?');
}
if (greatPersonality==='yes'|| greatPersonality==='y' )
{alert('thanx ^_^');}
else{alert('I will work for that :)');}

let favColor = prompt('is it the brown my favourit color?');
favColor= favColor.toLowerCase();
console.log(likeDriving);

while((favColor !=='yes') && (favColor !=='y') && (favColor !=='no') && (favColor !=='n'))
{
  favColor = prompt('is it the brown my favourit color?');
}

if (favColor==='no'|| favColor==='n' )
{alert('my favoutit color is red ^_^');}
else{alert('sorry wrong answer,not my favourit *_*');}

alert('thank you for visiting our website and for your time ^_^ ' + userName);







