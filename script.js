var butt= document.getElementById("button");
butt.addEventListener('click', function(){
    let name= document.getElementById("item").value;
    document.getElementById('bill').textContent = name;
    let quan=document.getElementById("quantity").value;
    document.getElementById('bill').textContent = quan;
})
