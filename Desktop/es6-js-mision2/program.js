//RETO 1- HOLA ES6///
function hola(mensaje){
    return mensaje
}
console.log(hola("HELLO ES6"))
//----------------------------///
//RETO 2- TEMPLATE STRING ///
function template(nombre){
let saludo= `Hola, ${nombre}!
Tu nombre en minusculas es: "${nombre.toLowerCase()}".`
return saludo
}
console.log(template("JUAN"));
//----------------------------///
//RETO 3 - FLECHAS 1-//
    var inputs = process.argv.slice(2);
    var result = inputs.map(s => s[0]).reduce((soFar, s) => soFar + s);
    console.log(`[${inputs}] se convierte en "${result}"`);
//---------------------------//
//RETO 4 //
var foot = {
    kick: function () {
        this.yelp = "AYYY!";
        setImmediate(() => console.log(this.yelp));
    }
};
foot.kick();
//-----------------------------///
//RETO 5- destruct//
let userArray = process.argv.slice(2);
let userObject = {username: userArray[1], email: userArray[2],
};
console.log(userObject);
//------------------------------///
//RETO  6 - MIN//
var numbers = process.argv.slice(2);
var min = Math.min(...numbers);
console.log(`El valor minimo de [${numbers}] es ${min}`);
//------------------------------///
//RETO  7//
module.exports = function average(...args) {
    let totalSum = 0;
    args.forEach((item) => {
      totalSum += item;
    });
    return totalSum / args.length;
  };

 //------------------------------/// 
//RETO 8 -DEFAULT ARGUMENTS 1
  module.exports = function midpoint() {
    const [value1, value2] = arguments;
    if (value1 === undefined && value2 === undefined) return 0.5;
    if (value1 === undefined && value2 !== undefined) return value2 / 2;
    if (value1 < 0) return 0;
    return (value1 + value2) / 2;
  };
  //------------------------------///
  //RETO 9- DEFAULT ARGUMENTS, Part 2
  module.exports = function makeImportant() {
    const [palabra, repeticion] = arguments;
    if (repeticion === undefined)
      return `${palabra}${"!".repeat(palabra.length)}`;
    return `${palabra}${"!".repeat(repeticion)}`;
  };
  //------------------------------///
  //RETO -10 - TAGGED TEMPLATE STRINGS
  console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
  function html(pieces, ...values) {
    let valueReturn = pieces[0];
    for (let i = 0; i < values.length; ++i) {
      valueReturn += substitution(values[i]) + pieces[i + 1];
    }
    return valueReturn;
  }
  
  function substitution(value) {
    return value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/'/g, "&apos;")
      .replace(/"/g, "&quot;");
  }
  
