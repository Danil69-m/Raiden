function compareNumbers() {
    
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);

    let result = '';


    if (number1 > number2) {
        result = "Наибольшее число: " + number1;
    } else if (number2 > number1) {
        result = "Наибольшее число: " + number2;
    } else {
        result = "Числа равны";
    }


    document.getElementById("result").innerHTML = result;
}



for (let i = 13; i <= 1113; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      document.write("ThreeFive" + "<br>");
    } else if (i % 3 === 0) {
      document.write("Three" + "<br>");
    } else if (i % 5 === 0) {
      document.write("Five" + "<br>");
    } else {
      document.write(i + "<br>");
    }
  }

  