"use strict";

// JavaScript Fundamentals – Part 1

/*Coding Challenge #1 
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

/*
Coding Challenge #3 
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
