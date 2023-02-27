let tasks = [];
document.addEventListener("DOMContentLoaded", () => {
  let tasksJson = localStorage.getItem("tasks");
  if (tasksJson) {
    tasks = JSON.parse(tasksJson);
    for (const toDo of tasks) {
      drawTask(toDo);
    }
  }
});
document.forms.myForm.addEventListener("submit", function (event) {
  //event.preventDefault();
  let text = document.forms.myForm.title.value;

  let toDo = {
    title: text,
    id: Date.now(),
    isDone: false,
  };
  drawTask(toDo);
  tasks.push(toDo);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  localStorage.document.forms.myForm.reset();
});

function drawTask(toDo) {
  let li = document.createElement("li");
  li.classList.add("list-group-item");
  li.innerHTML = "<span>❌ </span>" + toDo.title;
  li.dataset.id = toDo.id;
  li.dataset.isDone = toDo.isDone;
  document.querySelector(".tasks").append(li);
  if (toDo.isDone) {
    li.classList.add("list-group-item-success");
  }
}

document.querySelector(".clear").addEventListener("click", (event) => {
  document.querySelector(".tasks").innerHTML = "";
});

document.querySelector(".tasks").addEventListener("click", (event) => {
  if (event.target.tagName == "LI") {
    if (event.target.classList.contains("list-group-item-success")) {
      event.target.classList.remove("list-group-item-success");
      event.target.dataset.isDone = false;    

      let id = event.target.dataset.id;
     
      
      let element = tasks.filter((x) => x.id == id);
      let index = tasks.indexOf(element[0]);
      tasks[index].isDone=false;

    } else {
      event.target.classList.add("list-group-item-success");
      event.target.dataset.isDone = true;
     
      let id = event.target.dataset.id;
     
      
      let element = tasks.filter((x) => x.id == id);
      let index = tasks.indexOf(element[0]);
      tasks[index].isDone=true;
      
    }
  } else if (event.target.tagName == "SPAN") {
    let id = event.target.parentElement.dataset.id;
    tasks = tasks.filter((x) => x.id != id);
    console.log(tasks);
    event.target.parentElement.remove();
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
});

let body = document.querySelector('body');


document.addEventListener('DOMContentLoaded', () => {
    body.style.setProperty('background-color', document.cookie.split(';')[0].split('=')[1]);
});

document.querySelector('#redBtn').addEventListener('click', () => {
    console.log('red');

    document.cookie = "theme=red;max-age=86400";
    body.style.setProperty('background-color', 'red');
    document.querySelector('.form-control').style.setProperty('background-color', 'yellow');
   

});

document.querySelector('#blueBtn').addEventListener('click', () => {
    console.log('blue');
    document.cookie = "theme=blue;max-age=86400";
    body.style.setProperty('background-color', 'blue');
    document.querySelector('.form-control').style.setProperty('background-color', 'green');
});

document.querySelector('#greenBtn').addEventListener('click', () => {
    console.log('green');
    document.cookie = "theme=green;max-age=86400";
    body.style.setProperty('background-color', 'green');
    document.querySelector('.form-control').style.setProperty('background-color', 'blue');
});

document.querySelector('#yellowBtn').addEventListener('click', () => {
    console.log('yellow');
    document.cookie = "theme=yellow;max-age=86400";
    body.style.setProperty('background-color', 'yellow');
    document.querySelector('.form-control').style.setProperty('background-color', 'red');
});
