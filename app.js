window.onload = () =>{
  const button = document.querySelector('#btn')
  button.addEventListener('click',calculateBmi)
}


function calculateBmi () {
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
//    console.log(height);
//    console.log(weight);
const result = document.querySelector('#result');
     if(!height || isNaN(height) || height<0) {
        result.innerText = "Please provide a valid hieght"
        return; 
    }
     else if(!weight || isNaN(weight) || weight<0)
     {
        result.innerText = "Please provide a valid weight"
        return ;
     }

     const bmi = (weight / ((height * height) / 10000)).toFixed(2);

     if(bmi < 18.5){
        result.innerText = `Under Weight: ${bmi}`
     }

     else if(bmi >= 18.5 && bmi <24.9){
        result.innerText = `Normal: ${bmi}`
     }

     else if(bmi>25){
        result.innerText = `overweight: ${bmi}`
     }
}



