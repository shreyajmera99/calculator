let string = ""

let buttons = document.querySelectorAll('.btn')
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if (e.target.innerHTML == "=") {
            string = eval(string)
            document.querySelector('input').value = string;
                }
        else if(e.target.innerHTML == "AC") {
            string = ""
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "DEL") {
            string = string.substring(0,string.length-1)
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === ".") {
        let lastNumber = string.split(/[-+*/]/).pop();
        if (lastNumber.indexOf('.') === -1) {
          string += e.target.innerHTML;
        }
        document.querySelector('input').value = string;
         
          }
        else if (e.target.innerHTML == "%") {
            let numbers = string.split('*');
            if (numbers.length === 2) {
              let number1 = parseFloat(numbers[0]);
              let number2 = parseFloat(numbers[1]);
              let percentage = calculatePercentage(number1, number2);
              string = percentage.toString();
              document.querySelector('input').value = string;
            }
          } 
        else{
        string = string + e.target.innerHTML;
        console.log(string)
        document.querySelector('input').value = string;
        }
    })
})
function calculatePercentage(number1 ,number2) {
    return (number1*number2)/100
  }
   