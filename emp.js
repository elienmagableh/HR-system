localStorage.setItem("name", "jhone");
  
  document.getElementById("result").innerHTML = localStorage.getItem("name");


  
    
var min_num = 100;
var max_num = 500;
while(true){
    
    let num_random = Math.random()* max_num;
    console.log('input : '+num_random);
    if(num_random >= min_num){
        console.log(Math.floor(num_random));
       break; 
    } else {
        console.log(':::'+Math.floor(num_random));
    }
}
function salarycaluclator () {


   
    let salary = parseInt(prompt('Please enter employee salary'));
  
  
    let employeeName = prompt('Please enter employee name');
  
  
    let netSalary = salary - ((salary /100) * 10);
  
  
    document.write(`Net salary of ${employeeName} is ${netSalary}`);
   
  
   }
  
  
   salarycaluclator();
  