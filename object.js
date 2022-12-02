// Objects in JAVASCRIPT

// object reference type
    const person = {
        name: "Arbaz",
        age : 23,
        hobbies:["Cricket", "Explore Places", "Bike Riding"]
    }
         console.log(person);    

// how to add key value pair in object

    person.gender="male";
    console.log(person);

// how to access data from object

    console.log(person["name"]);
    
// difference between dot . notation and bracket [] notation
    // it will show key value as email :
    const key = "email";
    person[key] = "arbazshaikh@gmail.com";
    console.log(person);

// for in loop 

    for(let key in person){
        // console.log(`${key} : ${person[key]}`);
        console.log(key,":",person[key]);
    }

// object.keys (to get all the keys present in object)
    console.log((Object.keys(person)));

// computed properties

        const key1 = "objectkey1";
        const key2 = "objectkey2";

        const value1 = "myValue1";
        const value2 = "myValue2";

        const obj = {};

        obj[key1]= value1;
        obj[key2]= value2;

        console.log(obj);
        
        //  or use this method

        // const obj = {
        //      [key1] : value1,
        //      [key2] : value2,
        //  }
        //  console.log(obj);
    
 // spread operator in array revision

    const Array1 = ["asd","wer","fgh"];
    const Array2 = [1,2,3];

    const NewArray = [...Array1,...Array2, 56,53];
    // const NewArray = [..."abc"];
    // const NewArray = [..."123456"];
    console.log(NewArray);

// spread operator in object 
    const obj1 = {
            keyy1 : "value1",
            keyy2 : "value2",
                }
    const obj2 = {
            keyy1 : "valueUnique",
            keyy3 : "value3",
            keyy4 : "value4",
    }

        const newObj = {...obj1,...obj2};
    console.log(newObj);

// object destructring

    const band = {
        singer : "arijit sing",
        famousSong : "tum hi ho",
        year : 1999,
        anotherFamousSong : "kesariya",
    }

     let {singer , famousSong,...restProp} = band;

     console.log(singer, famousSong);
     console.log(restProp);

// onjects inside array
    // very usefull in real world applications

        const users = [
            {userId:1 , firstName: "arbaz", gender: "male"},
            {userId:2 , firstName: "irfan", gender: "male"},
            {userId:3 , firstName: "BalaKhatun", gender: "female"},
         
        ]
        for(let user of users){
            console.log(user.firstName);
        }

// nested destructuring
    // using above object (users) for this consition (to create varaible using object)

        const [user1, user2, user3] = users;
        console.log(user3);

    // destructuring the value using boject
        const [{firstName} , , {gender}] = users;
        console.log(firstName);
        console.log(gender);

// FUNCTIONS
    // function declration 
        function singHappyBirthday(){
            console.log("HAPPY BIRTHDAY TO YOU...")
        }
        singHappyBirthday();
    
        function sumThreeNumbers(number1 , number2 , number3){
            return number1 + number2 + number3;
        }   

        const returnValue = sumThreeNumbers(8,3,4);
        console.log(returnValue);

    // example
        // function isEven(number){
        //     if(number % 2 === 0){
        //         return true;
        //     }
        //     return false;
        // }
        //     console.log(isEven(6));
    //expample
        function firstChar(anyString){
            return anyString[0];
        }

        console.log(firstChar("xyz"));
    // Example of function using an array

        function findTarget(array,target){
            for(i=0 ; i<array.length; i++){
                if(array[i]===target){
                    return i;
                }
            }
            return -1;
        }

        const myArray = [1,4,7,9,22];
        const ans = findTarget(myArray, 5);
        console.log(ans);   
        
    // function Expresion  -> (when we assing our function into one variable it is called function expresion).

        const isEven = function(number){
            return number % 2===0;
        }
        console.log(isEven(5));

// 5.16 hrs 
    // Arrow functions
        const singHappyBirthdayy = () => {
            console.log("HAPPY BIRTHDAY TO YOU...")
        }
        singHappyBirthdayy();

        //
        const sumThreeNumberss = (number1 , number2 , number3) => {
            return number1 + number2 + number3;
        }   

        const returnValuee = sumThreeNumberss(8,4,4);
        console.log(returnValuee);

        //
        const isEvenn = (number) => {
            return number % 2===0;
        }
        console.log(isEvenn(4));

// function inside function

    function app(){
        const myFunc = () =>{
            console.log("Hello to myFunc");
        }

        const addTwo = (num1, num2) =>{
            return num1 + num2;
        }
        const mul = (num1, num2) => num1*num2;
        console.log("inside Function");
        myFunc();
        console.log(addTwo(2,4));
        console.log(mul(2,5));
    }
    app();

//lexical scope (it means calling functions in function & and it will find the value from its lexical environment 
// otherwise it will find the value from its global environment)

    const myVar= "value1";

    function myApp() {

            function myFunc(){
                const myFunc2 = () =>{
                    console.log("inside myFunc2",myVar);
                }
                myFunc2();
            }
        console.log(myVar);
        myFunc();
    }

    myApp();

// block scope vs function scope 
    // let and const are block scope (we cannot access let and const outside the block)
    // var is function scope (we can access var in whole file & we can call it from anywhere)

// default paraqmeters(if the value of b not declare then it will take b=0 by default and 
// if the value of b is defined the  it will run normally)

    function addTwoNum(a,b=0){
        return a+b;
    }
    const ans1 = addTwoNum(5,4);
    console.log(ans1);

// rest parameter (here rest function is (...c))
 
    function myRest(a,b,...c){
        console.log(`a is ${a}`);
        console.log(`b is ${b}`);
        console.log(`c is`,c);
    }
        myRest(1,2,3,4,5,6);

    // example 

        function addAll(...numbers){
            let total = 0;
            for(let number of numbers){
                total = total + number;
            }
            return total;
        }
        const ans2 = addAll(4,5,4,2,10);
        console.log("Addition of numbers is",ans2);

// parameter destructuring (mostly use in objects)

    const person1 = {
        firstName : "Arbaz",
        gender :  "male",
        age : 23,
    }

    function printDetails({firstName, gender, age}){
        console.log(firstName);
        console.log(gender);
        console.log(age);
    }

    printDetails(person1);

// Callback function (it is use to call one function in another)

    function myFun2(name){
            console.log("inside my function2");
            console.log(`your name is ${name}`);    
    }

    function myFun(callback){
        console.log("hello there i am a function");
        callback("Arbaz");
    }

    myFun(myFun2);

// function returning function

    function myfunction(){
        function hello(){
            return "hello world";

        }   
          return hello ;
    }

    const ans3 = myfunction();
    console.log(ans3());    

// important array method 
    // forEach
    // map 
    // filter
    // reduce

// forEach method

    const numbers = [2,4,6,8];
    function myfunctionn(number,index){
        console.log(`index is ${index} number is ${number}`);
    }

    numbers.forEach(myfunctionn);

    // example

    const userr = [
        {firstName: "arbaz", age: 23},
        {firstName: "ilyas", age: 24},
        {firstName: "irfan", age: 22},
    ]

    userr.forEach(function(user5){
         console.log(user5.firstName);
    });

// map method

    const numbers1 = [2,3,4,5];
    const square = function(number){
        return number*number;
    }

    const squareNumber= numbers1.map(square);
    console.log(squareNumber);
    
    //example

    const usr = [
        {firstName: "usman", age: 23},
        {firstName: "turgut", age: 24},
        {firstName: "bamsi", age: 22},
    ]

    const userNames= usr.map((user)=>{
        return user.firstName;
    });
    console.log(userNames);

// filter mehtod
    const numbr = [1,3,2,6,4,8];

    const isEvn = function(number){
        return number%2===0;
    }

    const evenNumbers = numbr.filter(isEvn);
    console.log(evenNumbers);

//reduce method

    const numb = [1,2,3,4,5,10];
    // aim : sum of all numbers

    const sum = numb.reduce((accumulator, currentValue)=>{
        return accumulator + currentValue;
    });
    console.log(sum);   

    //how its works
    //  accumulator    currentValue     return
    //     1               2                  3
    //     3               3                  6
    //     6               4                  10
    //     10              5                  15
    //     15              10                 25

    //example or reduce

    const  userCart = [
        {productId: 1, productName: "Mobile", price: 12000},
        {productId: 2, productName: "Laptop", price: 22000},
        {productId: 3, productName: "Tv", price: 15000},
    ]
    
    const totalAmout = userCart.reduce((totalPrice, currentProduct)=>{
            return totalPrice + currentProduct.price; 
    },0);

    console.log(totalAmout);

//sort method (use to sort anything or an array inascending or descending order)

    const numbe = [5,400,9,3000,1200];
    numbe.sort((a,b)=>{
        return a-b;  // for ascending order
       // return b-a;   for descending order
    });
    console.log(numbe);

    // exmple with product cart
        // price high to low  and low to high

                 const products = [
                    {productId: 1, productName: "P1", price: 4000},
                    {productId: 2, productName: "P2", price: 200},
                    {productId: 3, productName: "P3", price: 1000},
                    {productId: 4, productName: "P4", price: 800},
                    {productId: 5, productName: "P5", price: 500},
            ]

            // price low to high
            const lowToHigh = products.slice(0).sort((a,b)=>{
                return a.price-b.price;
            });
            console.log(lowToHigh);

            // high to low
            const highToLow = products.slice(0).sort((a,b)=>{
                return b.price-a.price;
            });
            console.log(highToLow);

// FIND method

    const myArry = ["Hello", "cat","dog","lion"];

    // function isLenght3(string){
    //     return string.length===3;
    // }

    const anss = myArry.find((string)=>string.length===3);
    console.log(anss);  

    const users1 = [
        {userId:1 , userName: "arbaz"},
        {userId:2 , userName: "irfan"},
        {userId:3 , userName: "BalaKhatun"},
        {userId:4 , userName: "orhan"},
        {userId:3 , userName: "jerkotai"},
    ];

    const myUser = users1.find((user)=>user.userId===3);
    console.log(myUser);

//EVERY method

    const num = [2,4,6,9,10];

    const every = num.every((number)=>number%2===0);

    console.log(every);

// example

    const  userCart1 = [
        {productId: 1, productName: "Mobile", price: 12000},
        {productId: 2, productName: "Laptop", price: 22000},
        {productId: 3, productName: "Tv", price: 15000},
    ]

    const abc = userCart1.every((cart)=>cart.price<30000);

    console.log(abc);

// SOME method
    // kya ek bhi number hai jo even hai fir ansr true
    const nn= [3,4,11,9];

    const n = nn.some((number)=>number%2===0);

    console.log(n);

// example
    const  userCart2 = [
        {productId: 1, productName: "Mobile", price: 12000},
        {productId: 2, productName: "Laptop", price: 22000},
        {productId: 3, productName: "Tv", price: 250000},
    ]

    const nm = userCart2.some((cart)=>cart.price>100000);
    console.log(nm);

// FILL method
// value , start , end // value =0 , start point=[2], end point[6]
    const myArr = new Array(10).fill(-1);
    console.log(myArr);

    const myArr2 = [1,2,3,4,5,6,7,8,9];
    myArr2.fill(0,2,6);
    console.log(myArr2);

// splice method     
// start , delete , insert

    const myArray2 = ['item1','item2','item3'];

     //delete
    //  myArray2.splice(1,1);

    // intert
   // myArray2.splice(1,0,'inserted item');

   // insert and delete 
     const deletedItem = myArray2.splice(1,2,'inserted item1','inserted item2');
     console.log(myArray2);
     console.log("Deleted Item", deletedItem);

// iterables
    // jispe hum for of loop laga sakein
    // string , array are iterable // objects are not iterable

    const firstName1 = "Arbaz";
    for(let char of firstName1){
            console.log(char);
    }

    // example
    const items = ["item1","item2","item3"];
    for(let item of items){
        console.log(item);
    }

// array like object 
    //jinke pass lenght property hoti hai 
    // or jinko hum index se access kar sakte hai 
    // examle : string is array like object

// sets (it is iterable)
// store data
// sets also have its own method 
// no index-based access 
// order is not quarenteed
// unique items only (no duplicates allowed)

    const number4 = new Set();
    number4.add(1);
    number4.add(2);
    number4.add(3);
    number4.add(4);
    number4.add(5);
    number4.add(6);
    // number4.add(items); // items is array present in above line 525
    // number4.add(['item1','item2']);// ye dono bhi array add hoga q ki dono ka index alag hai
    // number4.add(['item1','item2']);
        // if(number4.has(1)){
        //     console.log("1 is persent");
        // }else{
        //     console.log("1 is not peresent");
        // }
        for(let number of number4){
            console.log(number);
        }
   
//we cannot count leth of set so we can use element here 

        const myArray3 = [1,2,4,4,5,5,6];
        const uniqueElement = new Set(myArray3);
        let length = 0;
        for(let element of uniqueElement){
            length++;
        }
        console.log("Length is:",length);

// map method (use to add extra info in object using set keyword) need revision
        const person3 = {
            id:1,
            firstname: "arbaz"
        }
        const extraInfo = new Map();
        extraInfo.set(person3, {age:8 , gender:"male"});
        console.log(person3.id);
        console.log(extraInfo.get(person3).gender);

// clone using Object.assign

    const obj3 = {
        key1: "value1",
        key2: "value2",
    }

    // const obj4 = {...obj3};
    const obj4 = Object.assign({}, obj3);
    obj3.key3 = "value3";
    console.log(obj3);
    console.log(obj4);

// optional chaining (it is use when we will define keys in future and it is denoted as ? symbol)

    const user6 = {
        firstName: "Arbaz",
        // address: {houseNumber: '1234'},
    }

    console.log(user6?.firstName);
    console.log(user6?.address?.houseNumber);

// Methods -> // this // call // apply // bind
// 1. this method (use to call object inside function)
    // function inside object

    function personInfo(){
        console.log(`Person Name is ${this.firstName} and Age is ${this.age}.`);
    }

    const person4= {
        firstName: "Alauddin",
        age : 9,
        about : personInfo
    }
    const person5= {
        firstName: "Orhan",
        age : 11,
        about : personInfo
    }
    const person6= {
        firstName: "Usman",
        age : 30,
        about : personInfo
    }

    person4.about();
    person5.about();
    person6.about();

// console.log(window);
    // "use strict"; (if we use this on the top then it will show undefine)

    function myFunction(){
        console.log(this);
    }
    myFunction();

// 2. call method   

    function about(hobby, favMucisian){
    console.log(this.firstName, this.age, hobby, favMucisian);
    }
    const u1 = {
        firstName: "Turgut",
        age : 35,
    }   
    const u2 = {
        firstName: "Bamsi",
        age : 40,
    }

    // about.call(u2,"cricket", "arijit singh"); // if you call element of u2
    about.call(u1,"cricket", "arijit singh");   // if you call element of u1

// 3. apply method (it is similar to call method only we have to use apply(keyword) instead of call(keyword))
        // and we need to assign order in array format like ["cricket", "arijit singh"].

        // about.apply(u1,["cricket", "arijit singh"]);
        about.apply(u2,["cricket", "arijit singh"]);

//4. bind method (bind method returns a funtion which store all data of object)

    const func = about.bind(u1,"cricket", "arijit singh");
    func();

// dont do mistakes  for reference video 9.05 hrs 
    const u3 ={
        firstName: "Ertugrul",
        age : 40,
        about : function(){
            console.log(this.firstName, this.age);
        }
    }

   const myFn = u3.about.bind(u3);
   myFn();

// use can also use function in object like (in line 684 about also work like line 672)  
        const u4 ={
            firstName: "Ertugrul",
            age : 40,
            about(){
                console.log(this.firstName, this.age);
            }
        }

// 9.23 hrs  to 10.04 hrs need refresher

 // about k andr jo functions hote hai usko methods bolte hai   

// class 

    class Animal {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        eat(){
            return `${this.name} is eating`;
        }
        isSuperCute(){
            return this.age<= 1;
        }
        isCute(){
            return true;
        }
    }

    class Dog extends Animal{

    }

    const tommy = new Dog("tommy",3);
    console.log(tommy.eat());
    console.log(tommy.isSuperCute());
    console.log(tommy.isCute());

// hum object ko instance bol sakte hai 

// super class 

class Animal1 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age<= 1;
    }
    isCute(){
        return true;
    }
}

class Dog1 extends Animal1{
    constructor(name, age,speed){
        super(name,age);
        this.speed= speed;
    }
    run(){
        return `${this.name} is running at ${this.speed}kmph`;
    }
}

const jerry = new Dog1("jerry",3, 45);
console.log(jerry.run());

// Getter and Setters

    // getter
    class Person {
        constructor(firstName, lastName, age){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;

        }

        get fullName(){ // getter
            return `${this.firstName} ${this.lastName}`
        }
        set fullName(fullName){   // setter
            const [firstName, lastName]= fullName.split(" ");
            this.firstName = firstName;
            this.lastName = lastName;
        }
}

    const per1 = new Person("arbaz","shaikh",5);
    per1.fullName = "shadab khan";
    console.log(per1);

// static methods and properties

    