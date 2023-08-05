const my_name = document.getElementById('name');
const hi = document.getElementById('hi');
let currentIndexs = 0;

function setName() {
    const names = ["Soy <br> Jesus<br> Machaca<span class='print'>&lt;<span class='br'>br</span>&gt;</span>", "Soy <br> Full <br> Stack <br> Developer<span class='print'>&lt;<span class='br'>br</span>&gt;</span>"];
    my_name.innerHTML = names[currentIndexs];
    currentIndexs = (currentIndexs + 1) % names.length;
}

setInterval(setName, 4000);

function showInfo() {
    const catalogue = document.getElementById('catalogue')
    const home = document.getElementById('content');
    const more = document.getElementById('more-info')
    catalogue.style.display = 'none';
    home.style.display = 'none';
    more.style.display = 'block';
}

function showHome() {
    const catalogue = document.getElementById('catalogue')
    const home = document.getElementById('content');
    const more = document.getElementById('more-info')
    catalogue.style.display = 'none';
    more.style.display = 'none';
    home.style.display = 'block';
}

function showProjects(){
    const catalogue = document.getElementById('catalogue')
    const home = document.getElementById('content');
    const more = document.getElementById('more-info')
    more.style.display = 'none';
    home.style.display = 'none';   
    catalogue.style.display = 'block';
}

function showDisplays() {
    const home = document.getElementById('home');
    const projects= document.getElementById('project');
    const moreInfo= document.getElementById('minfo');

    home.addEventListener('click', showHome);
    projects.addEventListener('click', showProjects);
    moreInfo.addEventListener('click', showInfo);

}
showDisplays()
