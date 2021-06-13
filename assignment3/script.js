let numRows = 0;
let numCols = 0;
let colorSelected;

const tr = "<tr></tr>";
const td = "<td class=\"cell\"></td>";
const table = document.querySelector("tbody");

//Adds a row
function addR() {
    numRows++;
    updateRowCounter()
    table.innerHTML += tr;

    for (let i = 0; i < numCols; i++)
        table.querySelectorAll("tr")[numRows - 1].innerHTML += td;
    applyListeners()
}
//Adds a column
function addC() {
    numCols++;
    updateColCounter();

    for (let i = 0; i < numRows; i++) {
        table.querySelectorAll("tr")[i].innerHTML += td;
    }
    applyListeners()
}

//Removes a row
function removeR() {
    if (numRows === 0)
        return

    numRows--;
    updateRowCounter();

    table.querySelectorAll("tr")[numRows].remove();
    applyListeners()
}
//Remove a column
function removeC() {
    if (numCols === 0)
        return

    numCols--;
    updateColCounter();

    for (let i = 0; i < numRows; i++) {
        table.querySelectorAll("tr")[i].querySelectorAll("td")[numCols].remove();
    }
    applyListeners()
}
//sets global var for selected color
function selected() {
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function applyListeners() {
    let elements = document.getElementsByClassName("cell");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function (event) {
            event.target.classList = "";
            event.target.classList.add(colorSelected);
        }, false);
    }
}

function fillU() {
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            let contain = !table.querySelectorAll("tr")[i].querySelectorAll("td")[j].classList.contains("Red") &&
                !table.querySelectorAll("tr")[i].querySelectorAll("td")[j].classList.contains("Green") &&
                !table.querySelectorAll("tr")[i].querySelectorAll("td")[j].classList.contains("Yellow") &&
                !table.querySelectorAll("tr")[i].querySelectorAll("td")[j].classList.contains("Blue")

            if (contain)
                table.querySelectorAll("tr")[i].querySelectorAll("td")[j].classList.add(colorSelected);
        }
    }
}

function fill() {
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            table.querySelectorAll("tr")[i].querySelectorAll("td")[j].classList = "";
            table.querySelectorAll("tr")[i].querySelectorAll("td")[j].classList.add(colorSelected);
        }
    }
}

function clearAll() {
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            table.querySelectorAll("tr")[i].querySelectorAll("td")[j].classList = "";
        }
    }
}

function updateRowCounter() {
    document.querySelector("#row").innerHTML = "ROW: " + numRows;
}

function updateColCounter() {
    document.querySelector("#col").innerHTML = "COL: " + numCols;
}
