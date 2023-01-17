function additem(){
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;

    if(name== "" || price==""){
        alert("filled can not be empty")

    }else{
        let todolist = document.getElementById('todolist');
        
        let li = document.createElement('li');
        
        li.className="my-4 d-flex justify-content-between align-items-center";
        let item_name = document.createElement('h5');
        let item_price = document.createElement('h5');
        item_price.style.width="100px";
        item_name.style.width="100px";
        item_name.textContent=name;
        item_price.textContent=price;
        
        let a = document.createElement('button');
        a.className="btn btn-danger"
        a.href="javascript:void(0)";
        a.textContent="X";
        li.appendChild(item_name);
        li.appendChild(item_price);
        li.appendChild(a);
        todolist.appendChild(li);


    }
    document.getElementById('name').value="";
    document.getElementById('price').value="";
    
    
    
    
}
    let btn = document.querySelector('ol');
    btn.addEventListener('click', function(e){

        let todolist = document.getElementById('todolist');
        
        let li = e.target.parentNode;

        todolist.removeChild(li);
        
        
    });
    