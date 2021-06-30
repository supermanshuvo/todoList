let close = document.getElementsByClassName('delete');
for(let i=0;i<close.length;i++){    
    close[i].onclick = function(){        
        let div = this.parentElement;
        div.style.display= 'none';
    }
}
let done = document.getElementsByClassName('done');
for(let i=0;i<done.length;i++){    
    done[i].onclick = function(){        
        let div = this.parentElement;
        div.style.textDecoration= 'line-through';
        div.style.backgroundColor='green';
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
        document.getElementById('paddingWorkList').appendChild(li);
    }
    document.getElementById('todo').value = "";
    let doneText = document.createTextNode('Done');
    let doneButton = document.createElement('BUTTON');
    doneButton.className = 'done';
    doneButton.appendChild(doneText);
    li.appendChild(doneButton);
    for(let j=0;j<done.length;j++){
        done[j].onclick=function(){
            let div = this.parentElement;
            div.style.textDecoration= 'line-through';
            div.style.backgroundColor='green';
        }
    }
    let button = document.createElement('BUTTON');
    let deleteText = document.createTextNode('Delete');
    button.className = 'delete';
    button.appendChild(deleteText);
    li.appendChild(button);
    for(let i=0;i<close.length;i++){
        close[i].onclick=function(){
            let div = this.parentElement;
            div.style.display= 'none';
        }
    }
}
