
let element = document.getElementById("element");


fn1 = () => {
    element.classList.remove("middle");
    element.classList.remove("big");
    element.classList.add("small");

}

fn2 = () => {
    element.classList.remove("small");
    element.classList.remove("big");
    element.classList.add("middle");

}

fn3 = () => {
    element.classList.remove("small");
    element.classList.remove("middle");
    element.classList.add("big");

}



