const State = {
    text : [],
    number : [],
};
const wrapper = document.getElementById('wrapper');

const addCondition = document.getElementById('add-condition');
addCondition.addEventListener('click', (e) => {
    e.preventDefault();
    var div = document.querySelector(".div-wrapper");
    var newDiv = div.cloneNode(true);
    div.parentNode.insertBefore(newDiv, null);

    const deleteButton = document.createElement('button');
    deleteButton.textContent ='X';

    deleteButton.addEventListener("click", (e)=>{
        e.preventDefault();
        wrapper.removeChild(newDiv);
    })

     newDiv.appendChild(deleteButton);
  
})


let number = document.querySelector(".number");
let text = document.querySelector(".text");
const form = document.querySelector("#form-main");
let fields = document.querySelector(".fields")


fields[0].addEventListener("click", (e)=>{
    if (form.elements.fields.value == "Number field"){
        number[0].style.display="inline-block";
        text[0].style.display="none";
        e.preventDefault();
    }
    else if (form.elements.fields.value == "Text field"){
        text[0].style.display="inline-block";
        number[0].style.display="none";
    }

})
