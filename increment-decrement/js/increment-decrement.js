const IncDec = (incDec) => {

    let inp = document.getElementById("inp");
    
    inp.style.color = "black";
    inp.style.fontStyle = "normal";
    inp.style.fontWeight = "normal";

    let val = inp.value;

    if (incDec === "dec") {
        val--
    }
    else if (incDec === "inc") {
        val++
    }

    if (val % 2 === 0) {
        inp.style.color = "red";
    }
    if (val % 3 === 0) {
        inp.style.fontStyle = "italic";
    }
    if (val % 7 === 0) {
        inp.style.fontWeight = "bold";
    }

    inp.value = val;
}