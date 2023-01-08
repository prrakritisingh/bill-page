// var butt= document.getElementById("button");
// butt.addEventListener('click', function(){
//     let name= document.getElementById("item").value;
//     document.getElementById('bill').textContent = name;
//     let quan=document.getElementById("quantity").value;
//     document.getElementById('bill').textContent = quan;
// })

const button = document.getElementById("button");
const personName = document.getElementById("name");
let quant = document.getElementById("quantity")
const comment = document.getElementById("comment")
let selections = document.getElementById('item');
let output = document.getElementById('billsection')
function clickButton(e) {
    e.preventDefault()
    button.addEventListener('click', add())
};

function add() {
    let result = document.getElementById('bill')
    let str = ''
    // creating the text element
    // console.log(selections.options[selections.selectedIndex].text);
    str += personName.value + "\n"
    str += selections.value +" \n"
    console.log(quant.value)
    str += quant.value + " \n"
    str += comment.value
    result.textContent = str
}
