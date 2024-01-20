const taskinput = document.getElementById("text-input");
const taskform = document.getElementById("task-form");
const tasklist = document.getElementById("task-list");

taskform.addEventListener("submit" , (e) =>{
    e.preventDefault();
    const tasktitle = taskinput.value;

    if(tasktitle==""){
        alert("please Enter task");
    }
    else{
    const listitem = document.createElement("li");
    listitem.innerHTML =tasktitle;
    tasklist.append(listitem);
    let span =document.createElement("span");
    span.innerHTML="&times;";
    listitem.appendChild(span);
    taskinput.value="";
    savedata();
}
});


tasklist.addEventListener("click" ,(e) => {
    if(e.target.tagName =="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }

    if(e.target.tagName == "SPAN"){
        const li = e.target.parentElement;
        li.remove();
        savedata();
    }
});

function showdata(){
    tasklist.innerHTML = localStorage.getItem('listitem')
}

function savedata(){
    localStorage.setItem('listitem' , tasklist.innerHTML);
}

showdata();