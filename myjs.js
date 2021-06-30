function addTask(){
    let inputValue = document.getElementById('todo').value;
    let li = document.createElement('li');
    if(inputValue == ''){
        alert('Kindly Input something you need to do!');
    }else{
        console.log(inputValue);
    }
    document.getElementById('todo').value = "";
}