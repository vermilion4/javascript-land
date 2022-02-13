//ASK USER FOR INPUT AND CONVERT TO NUMBER
let num = parseInt(prompt("Enter a number: "));

//TIMESTABLE FUNCTION
function timesTable(num) {

  //CONDITION TO CHECK IF USERS INPUT IS BETWEEN 2 AND 20
if (num > 2 && num < 20) {
    //IF INPUT IS BETWEEN 2 AND 20, RUN FOR LOOP FROM 1 TO 10
    for (let i = 1; i <= 10; i++) {

      // OUTPUT "USER INPUT X LOOP NUMBER = VALUE"
      //i.e. "2 X 4 = 8"
      console.log(num + " x " + i + " = " + num * i);
    }

    //IF INPUT NOT BETWEEN 2 AND 20, ERROR MESSAGE
} else {
    console.log("Entered number out of range, must be between 2 and 20");
}
}

//PASS USER INPUT INTO FUNCTION CALL
timesTable(num);
