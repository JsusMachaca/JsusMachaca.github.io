const my_name = document.getElementById('name');
const hi = document.getElementById('hi');
let currentIndex = 0;
let currentIndexs = 0;

function setName() {
    const names = ["I'm <br> Jesus", "I'm <br> Full <br> Stack <br> Developer"];
    my_name.innerHTML = names[currentIndexs];
    currentIndexs = (currentIndexs + 1) % names.length;
}

setInterval(setName, 4000);

function hideCont() {
    const todo = document.getElementById('todo');
    const projects = document.getElementById('pjs');
    todo.style.display = 'none';
}

function showHome() {
    const todo = document.getElementById('todo');
    todo.style.display = 'block';
}