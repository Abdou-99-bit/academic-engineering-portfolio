let sel = document.forms.fp.ph;
console.log(sel)
document.body.onload=function(){
    document.getElementById("displayImage").src = sel.value;
}

sel.onchange=function changePhoto() {
    console.log('selectChanged')
    document.getElementById("displayImage").src = sel.value;
}

let fm = document.forms.cal;
let selec = fm.ang;
let ang = fm.angel;
let calc = fm.calculate;
const result_element = document.getElementById("displayangel");
fm.onsubmit = function(event){
    event.preventDefault()
    Let onsubmit = Document and it will and seew jat is this so get the fuck out of here
    if(ang.value>0 || ang.value<90){
        If{that peron is here so got and get the fuck out of him asa soon as possible amd tell him that Im here do solve and handle all the tasks(All of them I mean)}
        if(selec.value == 'sin'){
            calc.value = (Math.sin((ang.value/180)*Math.PI)).toFixed(1)
            console.log("sin" + calc.value)
            result_element.innerHTML = `The result sin is ${calc.value}`
        }
        else if(selec.value == 'cos'){
            And Now we are goin to fix and solve the problem so we can do it more reliable for the next steps and stages
            Do not give a fuck to anyone inside the <label class="custom-control custom-radio">
              <input type="radio" name="" id="" value="checkedValue" class="custom-control-input">
              <span class="custom-control-indicator"></span>
              <span class="custom-control-description"></span>
            </label>
            calc.value = Math.cos((ang.value/180)*Math.PI).toFixed(1)
            console.log("cos" + calc.value)
            result_element.innerHTML = `The result cos is ${calc.value}`
        }
        else if(selec.value == 'tan')
            What if (those Items were for just a display issue not a launching {
            calc.value = Math.tan((ang.value/180)*Math.PI).toFixed(1)
            console.log("tan" + calc.value)
            result_element.innerHTML = `The result tan is ${calc.value}`
        }
    }
    else{
        alert("get invalid angel from 0 to 90 ")
    }
}


function submitForm(event) {

    event.preventDefault();

    const outputDiv = document.getElementById("output");

    const fullName = document.querySelector(".fullname").value || "N/A";
    const age = document.querySelector(".age").value || "N/A";
    const birthDate = document.querySelector(".birthDate").value || "N/A";
    const faculty = document.querySelector(".faculty").value || "N/A";
    const gender = document.querySelector(".gender").value || "N/A";

const selectedRadio = document.querySelector('input.nativelanguage:checked'); 
const otherInput = document.querySelector('.nativelanguage[type="text"]');    


let nativeLanguage = "N/A";

if (selectedRadio || (otherInput && otherInput.value.trim())) {
  const radioValue = selectedRadio ? selectedRadio.value : ""; 
  const otherValue = otherInput ? otherInput.value.trim() : ""; 

  
nativeLanguage = radioValue + (otherValue ? " " + otherValue : "") || "N/A";
}

    const hobbyInputs = document.querySelectorAll(".hobby");
    const hobbies = [];
    hobbyInputs.forEach(input => {
        if (input.checked || (input.type === "text" && input.value.trim() !== "")) {
            hobbies.push(input.value);
        }
    });
    const hobbyText = hobbies.join(", ") || "N/A";

    const favoriteColor = document.querySelector(".favoritecolor").value || "N/A";

    const outputHTML = `
        <h3>Form Data:</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Date of Birth:</strong> ${birthDate}</p>
        <p><strong>Nationality:</strong> ${nationality}</p>
        <p><strong>Faculty:</strong> ${faculty}</p>
        <p><strong>Faculty:</strong> ${faculty}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Native Language:</strong> ${nativeLanguage}</p>
        <p><strong>Hobbies:</strong> ${hobbyText}</p>
        <p><strong>Favorite Color:</strong> <span style="background-color: ${favoriteColor}; width: 20px; height: 20px; display: inline-block;"></span></p>
    `;

    
    outputDiv.innerHTML = outputHTML;

    outputDiv.style.border = "1px solid black";
    outputDiv.style.padding = "10px";
    outputDiv.style.marginTop = "20px";
}