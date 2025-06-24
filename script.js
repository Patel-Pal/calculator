
//Keyboard input 
document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (!isNaN(key) || key == ".") {
    cinput += key;
    display.value = `${preinput} ${coperation} ${cinput}`;
  } else if (['+', '-', '*', '/'].includes(key)) {
    inputoperation(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    cinput = cinput.slice(0, -1);
    display.value = `${preinput} ${coperation} ${cinput}`;
  } else if (key.toLowerCase() === 'c') {
    cleardisp();
  }
  
});




// manual input
let cinput = "";
let coperation = "";
let preinput = "";

function inputnumber(num) {
    // console.log("hello");
    cinput += num;
    document.getElementById("display").value = `${preinput} ${coperation} ${cinput}`;
}


function inputoperation(operation) {
    if (cinput === " ") {
        return;
    }
    if (preinput !== " ") {
        calculate();
    }
    coperation = operation;
    preinput = cinput;
    cinput = ""
    document.getElementById("display").value = `${preinput} ${coperation}`;
}

// calculate
function calculate() {

    if (preinput === " " && cinput === " ") {
        return
    }
    let res;
    let pre = parseFloat(preinput);
    let current = parseFloat(cinput);

    switch (coperation) {
        case '+':
            res = pre + current;
            break;

        case '-':
            res = pre - current;
            break;

        case '*':
            res = pre * current;
            break;

        case '/':
            if(current === 0){
                alert("Number cannot divided by Zero")
            }else{
                res = pre / current;
            }
            break;
        default:
            return;
    }

    cinput = res.toString();
    coperation = "";
    preinput = "";
     document.getElementById("display").value = `${cinput}`;

}

function cleardisp(){
    cinput="";
    coperation="";
    preinput="";
    document.getElementById("display").value="";
}