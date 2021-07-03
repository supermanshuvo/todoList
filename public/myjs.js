function addTask(){
    let todoInput = document.getElementById('todo').value;
    let trimInput = todoInput.trim();
    if(trimInput=== '' || trimInput == ' '){
        alert('Kindly Enter something');
    }else{
        // console.log(trimInput);
    }
}