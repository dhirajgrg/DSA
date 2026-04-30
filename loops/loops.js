// Here is the **JavaScript solution with algorithm explanations** for all the listed questions:

// ### ✅ Q1. Print "Hello World" N Times
// const printHello = (n) => {
//   for (let i = 1; i <= n; i++) {
//     console.log("Hello World");
//   }
// };
// printHello(5);

// ### ✅ Q2. Print Natural Numbers up to N
// const printNatural=(n)=>{
// for(let i=1;i<=n;i++)
//     console.log(i)
// }
// printNatural(10)

// ### ✅ Q3. Reverse Loop (Print N to 1)
// const reverseLoop=(n)=>{
//     for(let i=n; i>=1;i--){
//         console.log(i);

//     }
// }
// reverseLoop(5)

// ### ✅ Q4. Table of a Number (up to 10 terms)
// const tableOfNumber=(n)=>{
//     for(let i=1;i<=10;i++){
//         console.log(`${n} x ${i} = ${n*i}`);

//     }
// }
// tableOfNumber(6)

// ### ✅ Q5. Sum Up to N Terms
// const sumUpToNterms = (n) => {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += i;
//   }
//   console.log(sum);
// };
// sumUpToNterms(5);

// ### ✅ Q6. Factorial of a Number
// const factorialOfNumber = (n) => {
//   let factorial = 1;
//   for (let i = 1; i <= n; i++) {
//     factorial *= i;
//   }
//   console.log(factorial);
// };

// factorialOfNumber(5)

// ### ✅ Q7. Sum of Even and Odd Numbers in Range
// const sumOfEvenAndOdd=(n)=>{
//     let sumOfEven=0
//     let sumOfOdd=0
//     for(let i=1;i<=n;i++){
//         if(i%2===0){
//             sumOfEven+=i
//         }else{

//             sumOfOdd+=i
//         }
//     }

//     console.log(sumOfEven,sumOfOdd)
// }

// sumOfEvenAndOdd(5)

// ### ✅ Q8. All Factors of a Number
// const factorsOfNumber = (n) => {
//   for (let i = 1; i <= n/2; i++) {
//     if (n % i === 0) {
//       console.log(i);
//     }
// }
// console.log(n)
// };

// factorsOfNumber(50)

// ### ✅ Q9. Check Prime (Three Methods)

// const isPrime = (n) => {
//   if (n <= 1) return false;
//   if (n === 2) return true;
//   if (n % 2 === 0) return false;

//   for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
//     if (n % i === 0) {
//       return false;
//     }
//   }

//   return true;
// };

// if (isPrime(13)) {
//   console.log("Yes! Prime number");
// } else {
//   console.log("No! It's not a Prime number");
// }
