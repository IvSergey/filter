const State = {
    text : [],
    number : [],
};
const wrapper = document.getElementById('wrapper');
// const buttonDelete = document.getElementById('delete');
// buttonDelete.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('!!!!');
//     // console.log(e.target.parentNode);
//     // e.target.parentNode.remove(); 

// })
const templateWrapper = `<select name="fields" class="fields" >
            <option value="Text field">Text field</option>
            <option value="Number field">Number field</option>
        </select>
        <select class="text">
            <option selected value="Containing">Containing</option>
            <option value="Containing">Exactly matching</option>
            <option value="Containing">Begins with</option>
            <option value="Containing">Ends with</option>
        </select>
        <select class="number">
            <option selected value="Equal">Equal</option>
            <option value="Greater than">Greater than</option>
            <option value="Less than">Less than</option>
        </select>
        `

const addCondition = document.getElementById('add-condition');
addCondition.addEventListener('click', (e) => {
    e.preventDefault();
    var newDiv = document.createElement('div');
    newDiv.classList.add('div-wrapper');
    newDiv.innerHTML = templateWrapper;

    const deleteButton = document.createElement('button');
    deleteButton.textContent ='X';

    deleteButton.addEventListener("click", (e)=>{
        e.preventDefault();
        wrapper.removeChild(newDiv);
    })

    newDiv.appendChild(deleteButton);
    
    // console.log(document.getElementById('wrapper'),'!!!');
    wrapper.appendChild(newDiv);
})


const number = document.getElementsByClassName("number");
const text = document.getElementsByClassName("text");
const form = document.querySelector("#form-main");
let fields = document.getElementsByClassName("fields")


fields[0].addEventListener("click", ()=>{
    if (form.elements.fields.value == "Number field"){
        number[0].style.display="inline-block";
        text[0].style.display="none";
    }
    else if (form.elements.fields.value == "Text field"){
        text[0].style.display="inline-block";
        number[0].style.display="none";
    }
        
    
})
