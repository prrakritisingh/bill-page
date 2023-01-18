console.log("hey");

document.getElementById("button").addEventListener('click', function () {
    console.log("wuv");
    let first = document.getElementsByClassName("orders")[0];
    // let main1= document.getElementsByClassName("billsection")[0];
    const heading1 = document.createElement("span");
    let item = document.getElementById("item").value;
    const text1 = document.createTextNode("Your Order:  " + item);
    const child1 = document.createElement("span");
    // heading1.classList.add("col-25");
    // child1.classList.add("col-75");
    heading1.appendChild(text1);
    first.appendChild(heading1);
    // child1.innerText = item;
    first.appendChild(child1);
    // console.log(heading);
    // console.log(child1);
    let second = document.getElementsByClassName("number")[0];
    const heading2 = document.createElement("span");
    let count = document.getElementById("quantity").value;
    let text2 = document.createTextNode("Quantity:  " + count);
    // const child2 = document.createElement("span");
    // child2.classList.add("col-75");
    // heading2.classList.add("col-25");
    heading2.appendChild(text2);
    second.appendChild(heading2);

    let bill = document.getElementById("bill")
    bill.classList.remove("hidden")

    let third = document.getElementById("button2");
    third.classList.remove("hidden");
    let fourth = document.getElementById("one")
    fourth.classList.remove("hidden");
})
