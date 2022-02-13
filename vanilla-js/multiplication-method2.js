//ASK USER FOR INPUT AND CONVERT TO NUMBER
let num = parseInt(prompt("Enter a number: "));

//TIMESTABLE FUNCTION
function timesTable(num) {
  //MAKES SURE USER ENTERS NUMBER BETWEEN 2 AND 20
  while (num < 3 || num > 19) {
    alert("number must be between 2 and 20");
    num = parseInt(prompt("Enter a number: "));
  }

  let text = "";
  let i = 1;
  while (i < 11) {
    text += num + " x " + i + " = " + num * i + "<br>";
    i++;
  }
  document.getElementById("multiply").innerHTML = text;
}

timesTable(num);
