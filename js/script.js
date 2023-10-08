
const convertFahrenheit = () =>{
  var celcius = parseFloat(document.querySelector("#celcius").value);

  var fahrenheitResult = (1.8 * celcius)+32;
  var a = fahrenheitResult.toFixed(2);

  document.querySelector("#celcius").value = celcius;
  document.querySelector("#fahrenheit").value = a;
}


const convertCelcius = () =>{
  var fahrenheit = parseFloat(document.querySelector("#fahrenheit").value);

  var celciusResult = (fahrenheit - 32)/1.8;
  var b = celciusResult.toFixed(2);

  document.querySelector("#celcius").value = b;
  document.querySelector("#fahrenheit").value = fahrenheit;
}

const reset = () =>{
  document.querySelector("#celcius").value = " ";
  document.querySelector("#fahrenheit").value = " ";
}