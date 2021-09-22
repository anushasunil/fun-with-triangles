const baseAndHeight = document.querySelectorAll(".base-and-height");
const checkButton = document.querySelector(".btn-check");
const outputMessage = document.querySelector(".output-message");

checkButton.addEventListener("click", function area() {
    const base = Number(baseAndHeight[0].value);
    const height = Number(baseAndHeight[1].value);
    const areaOfTriangle = calculateArea(base, height);

    outputMessage.innerText = "The Area of the given triangle is " + areaOfTriangle + "sq.cm"

})

function calculateArea(base, height) {
    return 0.5 * base * height;
}