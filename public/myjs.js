// Show Task Run if task is added
showTask();
// Initialize Variable
let taskInput = document.getElementById('todo'),
    addTaskBtn = document.getElementById('addTask'),
    searchInput = document.getElementById('searchInput'),
    cancel = document.getElementById('cancel'),
    hiddenId = document.getElementById('hiddenId');

// Create Function Task
function createTask(){
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
}
// Show Task That Input
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
            taskCompleteBtn = `<button type="button" class="btn btn-warning btn-sm" onclick="completeTask(${index})">Not Done</button>`;
        }else{
            taskCompleteValue = `<td>${item.task_name}</td>`;
            taskCompleteBtn = `<button type="button" class="btn btn-success btn-sm" onclick="completeTask(${index})">Complete</button>`;
        }
        data+=`<tr>
        <td scope="row">
          ${index+1}
        </td>
          ${taskCompleteValue}
        <td>
          <button type="button" class="btn btn-info btn-sm" onclick="editTask(${index})" >Edit</button>
        </td>
        <td>
          ${taskCompleteBtn}
        </td>
        <td>
          <button type="button" class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Delete</button>
        </td>
      </tr>`;
    });
    if(taskObj.length<1){
        data = 'No Task to do!';
        workList.innerHTML = data;
    }else{
        workList.innerHTML = data;
    }
}
// Edit Task Create Function
function editTask(index){
    let storage = localStorage.getItem('task');
    let taskObj = JSON.parse(storage);
    let updateTaskBtn = document.getElementById("update");
    taskInput.value = taskObj[index]['task_name'];
    hiddenId.value = index;
    addTaskBtn.className="d-none";
    updateTaskBtn.className='btn btn-primary';
}

// Update Task Function
let updateTaskBtn = document.getElementById('update');
function updateTask(){
    addTaskInputValue = taskInput.value;
    let trimInput = addTaskInputValue.trim();
    if(trimInput=== '' || trimInput == ' '){
        alert('Enter something!');
    }else{
        let storage = localStorage.getItem('task');
        let taskObj = JSON.parse(storage);
        for(keys in taskObj[hiddenId.value]){
            if(keys == 'task_name'){
                taskObj[hiddenId.value].task_name = trimInput;
                localStorage.setItem("task", JSON.stringify(taskObj));
            }
        }
        updateTaskBtn.className='d-none';
        addTaskBtn.className="btn btn-outline-primary";
        taskInput.value = '';
    }
    hiddenId.value = "";
    showTask();
}

// Complete or Not Done Task Function
function completeTask(index){
    let storage = localStorage.getItem('task');
    let taskObj = JSON.parse(storage);
    if(taskObj[index]['completeStatus'] == true){
        taskObj[index]['completeStatus'] = false;
    }else{
        taskObj[index]['completeStatus'] = true;
    }
    localStorage.setItem("task", JSON.stringify(taskObj));
    searchInput.value = '';
    showTask();
}

// Delete Task Function
function deleteTask(index){
    let storage = localStorage.getItem('task');
    let taskObj = JSON.parse(storage);
    if(parseInt(hiddenId.value)===parseInt(index)){
        console.log('Thanks for Clicking');
    }else{
        let ask = confirm('Do you want to delete Task!');
        if(ask){
            taskObj.splice(index,1);
            localStorage.setItem('task',JSON.stringify(taskObj));
            console.log('Success In your hand');
        }
    }
    showTask();
}

// Search Task Function
function searchResult(){
    let text = searchInput.value.toUpperCase();
    let table = document.getElementById('todoLists');
    let tr = table.getElementsByTagName('tr');
    for(let i=0;i<tr.length;i++){
        let td=tr[i].getElementsByTagName('td')[1];
        if(td){
            let textValue = td.textContent || td.innerHTML;
            if(textValue.toUpperCase().indexOf(text)> -1){
                tr[i].style.display='';
            }else{
                tr[i].style.display="none";
            }
        }
    }

}
// Cancel Task Input and Update 
function cancelTask(){
    hiddenId.value = "";
    updateTaskBtn.className='d-none';
    addTaskBtn.className="btn btn-outline-primary";
    taskInput.value = '';
    console.log('Thanks for Clicking');
}
// Click Button
addTaskBtn.addEventListener("click", createTask);
updateTaskBtn.addEventListener("click", updateTask);
searchInput.addEventListener("keyup", searchResult);
cancel.addEventListener('click',cancelTask);