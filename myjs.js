let close = document.getElementsByClassName('close');
for(let i=0;i<close.length;i++){    
    close[i].onclick = function(){        
        let div = this.parentElement;
        console.log(div.value);
        div.style.display = 'none';
    }
}

/* let selectItem = document.querySelector('ul');
selectItem.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        console.log((this).text());
        e.target.classList.toggle('done');
    }
},false);
 */

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
