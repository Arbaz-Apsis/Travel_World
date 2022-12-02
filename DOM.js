// hoisting (it means variable declare k pahele hum variable call karte hai 
// but vaiable lexical me hona chaiye)
    // like console.log(firstName);
    // firstName = "Arbaz";

// function execution contxt

// Example of closure 
    function myFunction(power){
        return function(number){
            return number ** power;
        }
    }
    // for cube
    const cube = myFunction(3);
    const ans = cube(3);
    console.log(ans);

    // for square
    const square = myFunction(2);
    const ans1 = square(4);
    console.log(ans1);

 
// example of closure //     

    function func(){
        let counter = 0;
        return function(){
            if(counter<1){
                console.log("Hi, You called me !");
                counter++;
            }else{
                console.log("Me already call ho chuka hu");
            }
        }
    }

    const myFunc = func();
    myFunc();
    myFunc();
  
//////////////////////////////////////////// D O M ///////////////////////////////////////////

