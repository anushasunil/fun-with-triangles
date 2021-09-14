const sides = document.querySelectorAll(".side-input");
const hypotenuseButton = document.querySelector(".btn-hypotenuse");
const outputMessage = document.querySelector(".output-message");

hypotenuseButton.addEventListener("click", function calculateHypotenuse()
{
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value))
    const hypotenuse = Math.sqrt(sumOfSquares);
    outputMessage.innerText = "The hypotenuse of the given triangle is " + hypotenuse
});

function calculateSumOfSquares( a, b)
{
    return a**2 + b**2;
}