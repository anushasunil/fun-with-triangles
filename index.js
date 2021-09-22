const inputs = document.querySelectorAll(".angles");
const checkButton = document.querySelector(".btn-check");
const message = document.querySelector(".output-message");

checkButton.addEventListener("click", function isTriangle() {
    const sumOfAngles = calculateSum(inputs[0].value, inputs[1].value, inputs[2].value)
    if (sumOfAngles === 180) {
        message.innerText = "Yes! It is a triangle."
    } else {
        message.innerText = "Uh oh! It is not a Triangle."
    }
})

function calculateSum(angle1, angle2, angle3) {
    let sum = Number(inputs[0].value) + Number(inputs[1].value) + Number(inputs[2].value);
    return sum
}