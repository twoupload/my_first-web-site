const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handTitleClick() {
    h1.style.color = "blue";
}

function mouseEnter() {
    h1.innerText = "Mouse is here!";
}

function mouseLeave() {
    h1.innerText = "Mouse is gone!";
}

function handleWhindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier");
}

function handWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("WOW! WIFI!");
}

h1.addEventListener("click", handTitleClick);
h1.addEventListener("mouseenter", mouseEnter);
h1.addEventListener("mouseleave", mouseLeave);

window.addEventListener("resize",handleWhindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handWindowOffline);
window.addEventListener("online", handleWindowOnline);
