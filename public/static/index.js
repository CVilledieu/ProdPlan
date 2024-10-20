function createButton() {
    const btn = document.createElement('button');
    btn.textContent = 'Create new planner';
    btn.addEventListener('click', function () {
        btn.style.color = 'red';
    });
    document.body.appendChild(btn);
}

function getHeader() {
    const div = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = "ProdPlan";
    document.body.appendChild(title);
}

function createHeader() {
    const divName = "titleDiv";
    const titleDiv = document.createElement("div");
    titleDiv.setAttribute("id",divName);

    const title = document.createElement("h1");
    title.textContent = "ProdPlan";
    titleDiv.appendChild(title);

    const rootDiv = document.getElementById("root");
    document.rootDiv.appendChild(titleDiv);
}

function addDivToRoot() {
    let r = document.getElementById("root");
    r.innerHTML += "<div><p>Test Div</p></div>";
}

function addDiv() {
    let r = document.getElementById("root");
    let newDiv = document.createElement("div");
    document.r.appendChild(newDiv);
}