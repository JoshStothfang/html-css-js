console.log("Ready...");

const button_click = (nbr) => {
    let txt = document.getElementById("bc40").value;
    console.warn(txt, nbr);
}
const loaded = () => {
    let inpCtrl = document.getElementById("bc40");
    let inpVal = inpCtrl.value;
    console.log("input contains: ", inpVal);
    inpCtrl.value = "Hello, world!";
}