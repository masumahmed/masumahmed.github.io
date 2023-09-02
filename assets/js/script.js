function Modal() {
    document.querySelector("#modal-container").classList.remove("invisible");
    document.querySelector("#modal").classList.remove("invisible");
    document.querySelector("#modal-image").src = event.target.src;
    document.querySelector("#caption").innerHTML = event.target.alt;
    disableScroll();
}

function UnModal() {
    document.querySelector("#modal-container").classList.add("invisible");
    document.querySelector("#modal").classList.add("invisible");
    enableScroll();
}

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
}

let imgs = document.querySelectorAll("img");
for (let i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function () { Modal(); }
}

// temporarily move this to another file for better performance
function readTextFile(file) {
    let allText = "";
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return allText;
}

function Notes() {
    document.querySelector("#notesList").classList.add("invisible");
    document.querySelector("#notes").classList.remove("invisible");

    parse = event.target.href
    parse = parse.replace('notes.html#', '/notes/');
    console.log(parse);

    let converter = new showdown.Converter(),
        text = readTextFile(parse),
        html = converter.makeHtml(text);
    document.querySelector("#fill").innerHTML = html;
}

let links = document.querySelectorAll("a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () { Notes(); }
}

try{
    console.log(window.location.href);
    if (window.location.href == "https://masumahmed.github.io/notes.html" || true) {
        document.querySelector("#notesList").classList.remove("invisible");
    }
}
catch {

}

let converter = new showdown.Converter(),
    texta = readTextFile("README.md"),
    html = converter.makeHtml(texta);

console.log(texta);
document.querySelector("#readme").innerHTML = html;
