// Only change code below this line
class Thermostat{
  constructor(ft){
    this._ft = ft;
  }
  get temperature(){
    return (5/9 * (this._ft-32));
  }
  set temperature(celstemp){
    this._ft = (celstemp * 9.0/5 +32);
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
console.log(thermos.temperature)
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
