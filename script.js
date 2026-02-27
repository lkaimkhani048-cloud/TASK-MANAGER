function addTask(){
    let taskvalue= document.getElementById("task").value;
    if (taskvalue == "")
    {
        alert("Please Enter a Task");
    }
    else{
        document.getElementById("list").innerHTML += "<li>"+ "<span>" + taskvalue + "</span>" + "<div>" +
        "<button class='updateBtn' onclick='updatetask(this)'>Update</button>" + "<button class= 'deleteBtn' onclick='deletetask(this)'>Delete</button>" +
        "</div>" +"</li>";   
        document.getElementById("task").value="";
    }
}

function deletetask(button){
    button.parentElement.parentElement.remove();
}

function updatetask(button){
    let li = button.parentElement.parentElement;
    let taskText = li.querySelector("span").innerText;
    let newTask = prompt("Update your task:", taskText);
    if (newTask != ""){
        li.querySelector("span").innerText = newTask;
    }
}