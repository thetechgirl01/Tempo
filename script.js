
function convertTemp() {
    let kelvin = parseFloat(document.getElementById("kelvinInput").value);

    let celsius = kelvin - 273;

    let fahrenheit = celsius * 9/5 + 32;

    let newton =  celsius * 0.33;

    //to display the results
    document.getElementById("celsiiusOutput").innerHTML = celsius.toFixed(2);
    document.getElementById("fahrenheitOutput").innerHTML = fahrenheit.toFixed(2);
    document.getElementById("newtonOutput").innerHTML = newton.toFixed(2);

}