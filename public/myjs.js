let storage = localStorage.getItem('task');
storage = storage ? storage.split(',') : [];
function addTask(){
    let todoInput = document.getElementById('todo').value;
    let trimInput = todoInput.trim();
    if(trimInput=== '' || trimInput == ' '){
        alert('Kindly Enter something');
    }else{
        storage.push(trimInput);
        localStorage.setItem('task', JSON.stringify(storage));
        // console.log(JSON.parse(localStorage.getItem('task')));
        show();
    }
}
function show(){
    let li = document.createElement("LI");
    
}