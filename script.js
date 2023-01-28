console.log("hey");

const state = {};
const price = {
   chaap: "5",
   momo: "10",
   chole: "6",
   maggie: "8",
   tea: "11"
};

document.getElementById('button').addEventListener('click', setState);

function setState() {
    const itemName = document.getElementById('item').value;
    const itemQty = document.getElementById('quantity').value;
    if (itemName in state) state[itemName] += (+itemQty);
    else state[itemName] = (+itemQty);
    console.log(state)
    // (+itemQty) typecast string to integer
    updateDom();
}

function updateDom() {
    let total = 0;
    let content = '<td>Item</td><td>Qty</td><td>Price</td>';
    for (item in state) {
        content += `<tr><td>${item}</td><td>${state[item]}</td><td>${price[item]*state[item]}</td></tr>`;
        total += price[item]*state[item];
    }
    document.getElementById('summary').innerHTML = content;
    document.getElementById('totall').innerText = `Total Qty: ${total}`;
}
