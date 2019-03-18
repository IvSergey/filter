const State = {
    text : [],
    number : [],
};
const wrapper = document.getElementById('wrapper');
// const buttonDelete = document.getElementById('delete');
// buttonDelete.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('!!!!');
//     console.log(e.target);
//     // e.target.parentNode.remove(); 
//     wrapper.remove(e.target.parentNode)

// })
const templateWrapper = `<select name="field" class="field" >
<option value="text" selected>Text field</option>
<option value="number">Number field</option>
</select>
<select name="kind" class="kind">

</select>

<input type="text">
        
`

const addCondition = document.querySelector('#add-condition');
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
    // console.log(wrapper.firstElementChild)
})





var kinds = {
    text: ["Containing", "Exactly matching", "Begins with", "Ends with"],
    number: ["Equal", "Greater than", "Less than"]
};



var field = document.querySelector(".field");
var kind = document.querySelector(".kind");
window.onload = selectField;
field.onchange = selectField;

function selectField(ev){
  kind.innerHTML = "";
  var c = this.value || "text", o;
  for(let i = 0; i < kinds[c].length; i++){
    o = new Option(kinds[c][i],i,false,false);
    kind.add(o);
  };
}
