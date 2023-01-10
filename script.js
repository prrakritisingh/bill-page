console.log("hey");

document.getElementById("button").addEventListener('click', function(){
    console.log("wuv");
    let main= document.getElementsByClassName("billsection")[0];
    let item= document.getElementById("item").value;
    const child1= document.createElement("span");
    child1.classList.add("order");
    child1.innerText = item;
    main.appendChild(child1);
    console.log(child1);
} )  

















































// const button = document.getElementById("button");
// const personName = document.getElementById("name");
// let quant = document.getElementById("quantity")
// const comment = document.getElementById("comment")
// let selections = document.getElementById('item');
// let output = document.getElementById('billsection')
// function clickButton(e) {
//     e.preventDefault()
//     add()
// };

function add() {
    // let result = document.getElementById('bill')
    // let str = ''
    // // creating the text element
    // //
    // console.log(selections.options[selections.selectedIndex].text);
    // str += personName.value + "\n"
    // str += selections.value +" \n"
    // // console.log(quant.value)
    // str += quant.value + " \n"
    // str += comment.value
    // result.textContent = str
}