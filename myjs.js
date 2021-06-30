function addTask(){
    let inputValue = document.getElementById('todo').value;
    let li = document.createElement('li');
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == ''){
        alert('Kindly Input something you need to do!');
    }else{
        console.log(inputValue);
    }
    document.getElementById('todo').value = "";
    let span = document.createElement('SPAN');
    let txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);
    for(var i=0;i<close.length;i++){
        close[i].onclick=function(){
            let div = this.parentElement;
            div.style.display = 'none';
        }
    }
}