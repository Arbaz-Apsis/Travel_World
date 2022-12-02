"use strict";

// Declare a Variable

var FirstName="Arbaz";

// Use a variable

console.log(FirstName);

// change a variable

FirstName="Shadab";
console.log(FirstName);

// you cannot start variable with number
// example 


// 1value (invalid)
        //var 1value="10";

// value1 (valid)
      var value1="10";
      console.log(value1);
    //   console.log(value1 / 10);
    //   console.log(value1 * 10);
    //   console.log(value1 - 10);


// You can use only underscore_ or dollar $ symbol
    // first_name (Valid)
            var first_name="sohail";
            console.log(first_name);

    // _firstname (valid)
            var _firstname="Ilyas";
            console.log(_firstname);


    // first$name (Valid)
            var first$name="Kaif";
            console.log(first$name);

    // $firstname (valid)
            var $firstname="Mujju";
            console.log($firstname);

    // You cannot use spaces 

        // var first name
          // ex var fisrt name="arbaz";


 // convention
   // Strat with small latter and use camelcase

// let Key word
    //Declare variable with let keyword

    let lastName="Shaikh";
    lastName="sayyed";
    console.log(lastName);

//declare Constants

const pi = 3.14;
// pi = 3.15;
console.log(pi);

// string indexing

        let midName= "shivajinagar";

        // s h i v a j i n a g  a  r
        // 0 1 2 3 4 5 6 7 8 9  10 11

        console.log(midName[8]);

        //lenght of string
        console.log(midName.length);

        //to find last lenght 
        console.log(midName[midName.length-1]); 

//trim()
        let newName="   kondhwa    ";     
        console.log(newName.length);
        newName= newName.trim();
        console.log(newName);
        console.log(newName.length);

// toUPPERCASE()
        console.log(newName.toUpperCase());

// to Lowercase()
console.log(newName.toLowerCase());

//slice() -> use to print  perticular character 
        // start index 
        // end index

        let newString = newName.slice(0,4       );
        console.log(newString);

//typeof operator
        //console.log(typeof age);

        // convert number to string
        let age = 18;
        age = String(age);
        console.log(typeof age);
        // convert string to number
        let aage = "18";
        age = Number(aage);
        console.log(typeof aage);

// string concatination for characters
        let str1= "Arbaz";
        let str2= "Shaikh";
        let str3= str1 + " " + str2;
        console.log(str3);

// string concatination for numbers
        let str4= "18";
        let str5= "10";
        let str6= +str4 + +str5;
        console.log(str6);
// template string 
        let age1= 23;
        let name1= "Arbaz";

// my name is arbaz and my name is 23
       // let aboutMe= "my name is " + name1 + " and my age is " +age1 +".";
       let aboutMe= `my name is ${name1} and my age is ${age1}.`
        console.log(aboutMe);

// undefined 
        let firstName1;
         console.log(typeof firstName1);
         firstName1= "Mazin";
         console.log(typeof firstName1, firstName1);

// BigInt
let myNumber = BigInt(12);
let sameMyNumber = 123n ;
console.log(myNumber + sameMyNumber);
//console.log(Number.MAX_SAFE_INTEGER);  to check maximum integer value in JS.

//boolean and comparision operatior

// boolean
        let num1= 7;
        let num2= 8;
        console.log(num1<=num2);

// == vs ===    //== only checks value and === only checks data type  1.33 hr
        let num3= 7;
        let num4= 8;
        console.log(num3 == num4);

// != vs !==  1.35 hr
        console.log(num3 != num4);


// if else condition

        let age2 = 18;

        if(age2>=17){
        console.log("you can play game");
        }
        else{
        console.log("you can not play game");
        }

//ternary opertor

        let age3 = 2;
        let drink = age3 >= 5 ? "coffee" : "Milk";
        console.log(drink);

// and or operator

        // and operator &&
        let name2 = "usman";
        let age4 = 24;
        if(name2[0] === "u" && age4>18){
                console.log("Name start with U and above 18");
        }else{
                console.log("Inside else");
        }

        // or operator ||
        let name3 = "usman";    
        let age5 = 24;
        if(name3[0] === "u" || age5>18){
                console.log("Inside if");
        }else{
                console.log("Inside else");
        }

// nested if else

        // winning number is 19

        // 19 your gues is right
        // 17 too low
        // 22 too high

       // let winningNumber = 19;
      //  let userGuess = +prompt("guess a number");

      //  if(userGuess === winningNumber){
          //      console.log("Your guess is right!!")
     //   }else{
             //   if(userGuess < winningNumber){
             //           console.log("Too low!!")        
             //   }
             //   else{
             //           console.log("Too High!!")
             //   }
       // }

//if 
//else if
//else if
//else if
//else

        let tempInDeg = 50;

        if(tempInDeg <= 0){
                console.log("Extremly Cold Outside");
        }else if(tempInDeg < 16){
                console.log("It is Cold Outside");
        }
        else if(tempInDeg < 25){
                console.log("Wheather is Ok");
        }
        else if(tempInDeg < 35){
                console.log("Lets go for swim");
        }
         else if(tempInDeg < 45){
                console.log("Turn on AC");
        }else{
                console.log("too hot!!")
        }

// switch statement

let day= 7;

switch(day){

        case 0:
                console.log("sunday");
                break;
        case 1:
                console.log("Monday");
                break;
        case 2:
                console.log("Tuesday");
                break;
        case 3:
                console.log("wednesday");
                break;
        case 4:
                console.log("Thusrsday");
                break;
        case 5:
                console.log("Friday");
                break;
        case 6:
                console.log("Saturday");
                break;
        default:
                console.log("Invalid Day");
}

// while loop 

        let i=1;
        while(i<=9){
                console.log(i);
                i++;
        }
        console.log(`current vlaue of of i is ${i}`);

// while loop example
        let num5 = 10;
        let total = (num5*(num5+1))/2;
        console.log(total);

// for loop 

        for(let i=0; i<=9;i++){
                console.log(i);
        }
       
// example of for loop 

        let total1 = 0;
        let sum = 100;

        for(let j = 1; j<=sum; j++){
                total1= total1 + j;
        }
        console.log(total1);

// break key word in for loop

        for(let i = 0; i<=10 ; i++){
                if(i===4){
                        break;
                }
        }
        console.log("hello break");

// break key word in for loop

        for(let i = 0; i<=10 ; i++){
                if(i===4){
                        continue;
                }
        }
        console.log("hello continue");

// do while loop

let k = 0;
do{
        console.log(k);
        k++;
}while(k<=9);

// intro to arrays  (array = oject) we can aslo call arrays as object.

        // order collection of items

                let fruits = ["mango", "apple", "banana"]
                console.log(fruits[2]);

                let numbers = [1,2,3,4];
                console.log(numbers[2]);

        // changes in array
                let fruits1 = ["mango", "apple", "banana"]
                console.log(fruits1);
                fruits1[2]= "grapes";
                console.log(fruits1);

        // to check it is array or not use this condition
                console.log(Array.isArray(fruits));

        // array push  (Add elements in an array (its add elements from last))
                let fruits2 = ["mango", "apple", "banana"]
                console.log(fruits2);
                fruits2.push("watermelon","orange");
                console.log(fruits2);

        //array pop (thi function removes elements from an array (it starts removing from last element  ))
                let fruits3 = ["mango", "apple", "banana"]
                console.log(fruits3);
                fruits3.pop();
                console.log(fruits3);
               
        // unshift (to add elemetns in an array from start)
                let fruits4 = ["grapes", "apple", "mangos"]
                console.log(fruits4);
                fruits4.unshift("banana", "pinapple");
                console.log(fruits4);   

        // shift (to remove elemetns in an array from start)
                let fruits5 = ["stawberries", "lemon", "cherry", "papaya"]
                console.log(fruits5);
                fruits5.shift();
                console.log(fruits5);   
        // primitive vs reference data type array

        // primitive type
                let numm1= 6;
                let numm2= numm1;
                console.log("value of num1 is", numm1);
                console.log("value of num2 is", numm2);
                numm1++;
                console.log("value of num1 is", numm1);
                console.log("value of num2 is", numm2);

        // Reference type
        // array

                let array1=["item1","item2"];
                let array2 = array1;
                console.log("array1", array1);
                console.log("array2", array2);
                
                console.log("after pushing element to array1")
                array1.push("item3");
                console.log("array1", array1);
                console.log("array2", array2);

        // how to clone array  3.24hrs

                let array3 = ["item1","item2"];
                let array4= array3.slice(0).concat(["item3","item4"])
        // or use this method let array4 = [...array3,"item5","item6"];
        // or use for add 2 arrays oneMoreArray = [...array1,...array2];
                array3.push("item3")
                console.log(array3===array4);
                console.log("array3", array3);
                console.log("array4", array4);

        // for loop in array 

                let fruits6 = ["mango", "apple", "banana"];
                let fruits7 = [];
                for(let i=0; i< fruits6.length; i++){
                        fruits7.push(fruits6[i].toUpperCase());       
                }
                console.log(fruits7);

        // use const for creating array (we use costant because const never change + its value)

                const frut = ["mango", "apple", "banana"];
                frut.push("grapes","stawberries");
                console.log(frut);

        // while loop in array
                 const fruit = ["mango", "apple", "banana"];

                  let c = 0;
                  while(c<fruit.length){
                        console.log(fruit[c].toUpperCase());
                        c++;
        }

        // for loop of array
                 const frt = ["orange", "lemon","cherry"];
                 for(let fr of frt){
                        console.log(fr.toUpperCase());
                 }

        // for loop of array

                const ft = ["irfan","ilyas","kaif"];
                for(let index in ft){
                   console.log(ft[index].toUpperCase());
                }  
        // array distructing
                const myArray = ["value1","value2","value3","value4"];
                let [myVar1,myVar2,...myNewArray] = myArray;
                console.log("value of myvar1 is", myVar1);
                console.log("value of myvar2 is", myVar2);
                console.log(myNewArray);

