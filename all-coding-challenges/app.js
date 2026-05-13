"use strict";

// JavaScript Fundamentals – Part 1

/*==================================================================
Coding Challenge #1 
   Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
    BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
    and height in meter). 

    Your tasks: 
        1. Store Mark's and John's mass and height in variables 
    2. Calculate both their BMIs using the formula (you can even implement both  versions) 
    3. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!

    Test data: 
    Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall. 
    Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall. 
 
GOOD LUCK 😀
*/
//----------------solutions---------------------
//step-1 define BMI  calculate function
// function BMI(mass, height) {
//   return mass / (height * height);
// }

// //step-2 call function with data
// //TEST DATA 1 :
// let markBMI = BMI(78, 1.69);
// let jhonBMI = BMI(92, 1.95);

// //TEST DATA 2 :
// let markBMI = BMI(95, 1.88);
// let jhonBMI = BMI(85, 1.76);

// //step-3 check BMI result of both user
// if (markBMI > jhonBMI) {
//   console.log(
//     `Mark's has higher BMI : ${markBMI.toFixed(2)} than Jhon's BMI : ${jhonBMI.toFixed(2)}`,
//   );
// } else {
//   console.log(
//     `Jhon's has higher BMI : ${jhonBMI.toFixed(2)} than Mark's BMI : ${markBMI.toFixed(2)}`,
//   );
// }

/*=======================================================================
Coding Challenge #2 
    There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy! 
    
    Your tasks: 
    1. Calculate the average score for each team, using the test data below 
    2. Compare the team's average scores to determine the winner of the         competition, and print it to the console. Don't forget that there can be a   draw, so test for that as well (draw means they have the same average score) 
    3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉 
    4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy 

    Test data: 
    Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 
    Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
    Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/
//------------------solution---------------
//step-1 define calculate average  function
// function calculateAverageScore(score1, score2, score3) {
//   return ((score1 + score2 + score3) / 3).toFixed(2);
// }

//step-2 calculate average score of both teams
//  Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// const dolphineAverageScore = calculateAverageScore(96, 108, 89);
// const koalasAverageScore = calculateAverageScore(88, 91, 110);

// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// const dolphineAverageScore = calculateAverageScore(97, 112, 101);
// const koalasAverageScore = calculateAverageScore(109, 95, 123);

//    Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// const dolphineAverageScore = calculateAverageScore(97, 112, 101);
// const koalasAverageScore = calculateAverageScore(109, 95, 106);

//step-3 apply condtions required minimum points 100  for draw or win for both teams
// if (
//     dolphineAverageScore >= 100 &&
//      dolphineAverageScore > koalasAverageScore
//     ) {
//   console.log(`Dolphine's  teams win trophy  with : ${dolphineAverageScore} points`);
// } else if (
//   koalasAverageScore >= 100 &&
//   koalasAverageScore > dolphineAverageScore
// ) {
//   console.log(`Koalas's teams win trophy with : ${koalasAverageScore} points`);
// } else if(dolphineAverageScore>=100 && koalasAverageScore>=100 && dolphineAverageScore===koalasAverageScore) {
//   console.log(`Teams draw with points \n Dolphine team : ${dolphineAverageScore} and Koalas team : ${koalasAverageScore}`);
// }else{
//     console.log(`No teams wins a trophy 💣`)
// }

/*=================================================================
Coding Challenge #3 

Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%. 

Your tasks: 
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!) 
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25” 

Test data: 
§ Data 1: Test for bill values 275, 40 and 430 
Hints: 
To calculate 20% of a value, simply multiply it by 20/100 = 0.2 
Value X is between 50 and 300, if it's >= 50 && <= 300
*/

//------------solution----------
/*
const totalBillAmount = (billAmount) => {
  let tip = billAmount >= 50 && billAmount <= 300
      ? billAmount * 0.15
      : billAmount * 0.2;

  console.log(
    `The bill was ${billAmount}, the tip was ${tip}, and total value ${billAmount + tip}`,
  );
};
totalBillAmount(275);
totalBillAmount(40);
totalBillAmount(430);
*/

/*==========================================
Coding Challenge #4
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..." 

Your tasks: 
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets. 
2. Use the problem-solving framework: Understand the problem and break it up into sub-problems! 

Test data: 
 Data 1: [17, 21, 23] 
 Data 2: [12, 5, -5, 0, 4] 
 
GOOD LUCK 😀 
 
*/

//-------------solution-----------------
/*
const printForecast = (arr) => {
  arr.forEach((temp, index) => {
    console.log(`${temp}°C in ${index + 1} days`);
  });
};

printForecast([17,21,23])
*/

/*=====================================================
Coding Challenge #1 
We're building a football betting app (soccer for my American friends 😅)! Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data. 

Your tasks: 
1. Create one player array for each team (variables 'players1' and 
'players2') 
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players 
3. Create an array 'allPlayers' containing all players of both teams (22 
players) 
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic' 
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2') 
6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in) 
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator. 
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored
*/