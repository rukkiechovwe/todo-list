//Add Tasks From Input
/*var task = []
var addTaskInputTextbox = document.getElementById('addTaskInput');
var addDescriptionTexbox = document.getElementById('addDescriptionInput')
var addTaskButton = document.getElementById('enterButton');
var listItem = document.getElementById('myList');

addTaskButton.addEventListener('click', function(){
    var newTask = createTodoHtml(addTaskInputTextbox.value,addDescriptionTexbox.value,'Today');
    task.push(newTask);
    renderList();

    addTaskInputTextbox.value = '';
    addDescriptionTexbox.value = '';

    if (addTaskButton.value === 'Edit Task') {
            addTaskButton.value = 'Add Task';
        }
});
function renderTodo(TaskTitle,TaskDescription,TaskDeadline,index){
    var html =
"<li class='li'> \
    <div class='todo-item'>\
        <div class='todo-details'>\
            <div class='todo-title'>" + TaskTitle +"</div>\
            <div class='todo-description'>" + TaskDescription +"</div>\
            <div class='todo-deadline'>"+ TaskDeadline +"</div>\
        </div>\
        <div class='todo-tools'>\
            <a onclick='editTodo(" + index +")'href="#">Edit</a> | \
            <a onclick='deleteTodo(" + index +")' href="#">Delete</a> \
        </div>\
    </div>\
</li>";
return html;
}
function createTodoHtml(TaskTitle,TaskDescription,TaskDeadline){
    return {
        TaskTitle: TaskTitle,
        TaskDescription: TaskDescription,
        TaskDeadline: TaskDeadline,
    };
};
function deleteTodo(index) {
    elem.style.display="none";
}
function renderList(){
    var outputHTML = '';

    task.forEach(function(TaskTitle,TaskDescription,TaskDeadline,index){
        outputHTML += renderTodo(addTaskInputTextbox.value,addDescriptionTexbox.value,'Today');
    });
    listItem.innerHTML += outputHTML;
}*/



var addTaskButton = document.getElementById('enterButton');
var addUpdateButton = document.getElementById('updateButton');
var pButton = document.getElementById('p');
addUpdateButton.style.display = 'none';
pButton.style.display = 'none';
var listItem = document.getElementById('myList');
generalid = 0;

addUpdateButton.addEventListener('click', function(){
        //console.log('iewjk')
    var addTaskInputTextbox = document.getElementById('addTaskInput').value; 
    var addDescriptionTexbox = document.getElementById('addDescriptionInput').value;
    var addDeadline = document.getElementById('addDeadline').value;
     p = document.getElementById('p').innerHTML
    console.log(p)

    title = 'title'+ p
    desc = 'desc' + p

    title1 = document.getElementById(title).innerHTML
    desc1 = document.getElementById(desc).innerHTML;
    console.log(title1, desc1, 'printing')
       title1 = addTaskInputTextbox ;
     desc1 = addDescriptionTexbox

    //console.log(addTaskInputTextbox)
    //console.log(addDescriptionTexbox)
    //console.log(addDeadline)

      document.getElementById('myList').style.display='block';
    })

addTaskButton.addEventListener('click', function(){
    //console.log('button was clicked')
    var addTaskInputTextbox = document.getElementById('addTaskInput').value; 
    var addDescriptionTexbox = document.getElementById('addDescriptionInput').value;
    var addDeadline = document.getElementById('addDeadline').value;
    //console.log(addDeadline)

    var div1 = document.createElement('li');
    div1.className = 'li';

    generalid += 1;
    id = 'li' + generalid;
    div1.id = id;
    //console.log(generalid)

    var div2 = document.createElement('div');
    div2.className = 'todo-item';
    div1.appendChild(div2);

    var div3 = document.createElement('div');
    div3.className = 'todo-details';
    div2.appendChild(div3);

    var div31 = document.createElement('div');
    div31.className = 'todo-title';
    div31.innerHTML = addTaskInputTextbox ;
    div31.id = 'title' + id;
    div3.appendChild(div31);

    var div32 = document.createElement('div');
    div32.className = 'todo-description';
    div32.innerHTML = addDescriptionTexbox;
    div32.id = 'desc' + id;
    div3.appendChild(div32);

    var div33 = document.createElement('div');
    div33.className = 'todo-deadline';
    div33.innerHTML = addDeadline;
    div3.appendChild(div33);

    var div4 = document.createElement('div');
    div4.className = 'todo-tools';
    div2.appendChild(div4);

    var div41 = document.createElement('a');
    div41.href = '#';
    div41.innerHTML = 'Edit ';
    div41.className = id;
    div41.addEventListener('click', function editItem(myid){
        addUpdateButton.style.display = 'block';
        pButton.style.display = 'block';
        p.innerHTML = id
        addTaskButton.style.display = 'none';
        id = myid.target.className;
        title = 'title' +  id;
        desc = 'desc' + id;
        console.log(id, 'edit', title, desc);
        title1 = document.getElementById(title).innerHTML
        desc1 = document.getElementById(desc).innerHTML
        console.log(title1, desc1, 'editing')
        document.getElementById('myList').style.display='none';
        //console.log(myid.target)
    })

    div4.appendChild(div41);

    var div43 = document.createElement('a');
    div43.className = '';
    div43.innerHTML = '|';
    div4.appendChild(div43);

    var div42 = document.createElement('a');
    div42.href = '#';
    div42.innerHTML = ' Delete';
    div42.className = id
    div42.addEventListener('click', function deleteItem(myid){
        id = myid.target.className
        //console.log(myid.target)
        document.getElementById(id).remove()
      // console.log(, 'Delete');
    })
    div4.appendChild(div42);

    listItem.appendChild(div1);
});