
let close = document.getElementsByClassName('close');
console.log(close.value+' in close out for');
for(let i=0;i<close.length;i++){
    console.log(close[i].value+' in close out i');
    close[i].onclick = function(){
        console.log(close[i].value+' in close in i');
        let div = this.parentElement;
        console.log(div.value+' in div');
        div.style.display = 'none';
    }
}


function addTask(){
    let inputValue = document.getElementById('todo').value;
    let li = document.createElement('li');
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == ''){
        alert('Kindly Input something you need to do!');
    }else{
        // console.log(inputValue); Test input
        document.getElementById('paddingWorkList').appendChild(li);
    }
    document.getElementById('todo').value = "";
    let button = document.createElement('BUTTON');
    let txt = document.createTextNode('Delete');
    button.className = 'close';
    button.appendChild(txt);
    li.appendChild(button);
    for(let i=0;i<close.length;i++){
        close[i].onclick=function(){
            let div = this.parentElement;
            div.style.display = 'none';
        }
    }
}
