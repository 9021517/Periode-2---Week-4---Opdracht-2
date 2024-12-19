function generateTable () {
    const number = parseInt(document.getElementById('numberInput').value);
    const resultDiv = document.getElementById ('result');

    if (isNaN(number)) {
        resultDiv.innerHTML = '<p> Voer een geldig getal in! </p>';
        return;
    }

    let tableHtml = '<ul>';
        for (let i = 1; i <= 10; i++) {
            tableHtml += '<li>${i} x ${number} = ${i * number}</i>';
        }
        tableHtml += '</ul>';

        resultDiv.innerHTML = tableHtml;
}