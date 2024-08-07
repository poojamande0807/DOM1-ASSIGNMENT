document.getElementById('calculateButton').addEventListener('click', calculateLength);
function calculateLength() {
    var userInput = document.getElementById('userInput').value;
    var lengthExcludingSpaces = userInput.replace(/\s/g, '').length;
    document.getElementById('result').textContent = lengthExcludingSpaces;
}