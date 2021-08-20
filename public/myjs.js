showTask();
let taskInput = document.getElementById('todo');
let addTaskBtn = document.getElementById('addTask');
addTaskBtn.addEventListener("click", function(){
    addTaskInputValue = taskInput.value;
    let trimInput = addTaskInputValue.trim();
    if(trimInput=== '' || trimInput == ' '){
        alert('Enter something!');
    }else{
        let storage = localStorage.getItem('task');
        if(storage == null){
            taskObj = [];
        }else{
            taskObj = JSON.parse(storage);
        }
        taskObj.push({'task_name':trimInput,'completeStatus':false});
        localStorage.setItem('task',JSON.stringify(taskObj));
        taskInput.value = '';
    }
    showTask();
});

function showTask(){
    let storage = localStorage.getItem('task');
    if(storage == null){
        taskObj = [];
    }else{
        taskObj = JSON.parse(storage);
    }
    let data = '';
    let workList = document.getElementById('todoLists');
    taskObj.forEach((item,index) => {
        if(item.completeStatus==true){
            taskCompleteValue = `<td class="completed">${item.task_name}</td>`;
        }else{
            taskCompleteValue = `<td>${item.task_name}</td>`;
        }
        data+=`<tr>
        <td scope="row">${index+1}</td>
        <td>${taskCompleteValue}</td>
        <td><button type="button" class="btn btn-info" onclick="editTask(${index})" >Edit</button>
        <button type="button" class="btn btn-success" onclick="completeTask(${index})">Complete</button>
        <button type="button" class="btn btn-danger" onclick="deleteTask(${index})">Delete</button></td>
    </tr>`;
    });
    if(taskObj.length<1){
        data = 'No Task to do!';
        workList.innerHTML = data;
    }else{
        workList.innerHTML = data;
    }
}
let shortTimeStore;
function editTask(index){
    let storage = localStorage.getItem('task');
    let taskObj = JSON.parse(storage);
    let updateTaskBtn = document.getElementById("update");
    taskInput.value = taskObj[index]['task_name'];
    shortTimeStore = index;
    addTaskBtn.className="d-none";
    updateTaskBtn.className='btn btn-primary';
}


let updateTaskBtn = document.getElementById('update');
updateTaskBtn.addEventListener("click", function(){
    addTaskInputValue = taskInput.value;
    let trimInput = addTaskInputValue.trim();
    if(trimInput=== '' || trimInput == ' '){
        alert('Enter something!');
    }else{
        let storage = localStorage.getItem('task');
        let taskObj = JSON.parse(storage);
        for(keys in taskObj[shortTimeStore]){
            if(keys == 'task_name'){
                taskObj[shortTimeStore].task_name = trimInput;
                localStorage.setItem("task", JSON.stringify(taskObj));
            }
        }
        updateTaskBtn.className='d-none';
        addTaskBtn.className="btn btn-primary";
        taskInput.value = '';
    }
    showTask();
});

function completeTask(index){
    let storage = localStorage.getItem('task');
    let taskObj = JSON.parse(storage);
    if(taskObj[index]['completeStatus'] == true){
        taskObj[index]['completeStatus'] = false;
    }else{
        taskObj[index]['completeStatus'] = true;
    }
    localStorage.setItem("task", JSON.stringify(taskObj));
    showTask();
}

function deleteTask(index){
    let storage = localStorage.getItem('task');
    let taskObj = JSON.parse(storage);
    let ask = confirm('Do you want to delete Task!');
    if(ask){
        taskObj.splice(index,1);
        localStorage.setItem('task',JSON.stringify(taskObj));
    }
    showTask();
}


let searchItem = document.getElementById("search");
searchItem.addEventListener("input", function(){
   let filter = searchItem.value.toUpperCase();
   let table = document.getElementById('todoLists');
   let tr = table.getElementsByTagName('tr');
   for(let i=0;i<tr.length;i++){
       let td= tr[i].getElementsByTagName('td')[2];
    if(td){
        let textValue = td.textContent || td.innerHTML;
         if(textValue.toUpperCase().indexOf(filter)> -1){
             tr[i].style.display = ""; 
         }else{
            tr[i].style.display = "none";
         }
    }
   }
});