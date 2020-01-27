module.exports = function parseStringAsArray(arrayAsString){
   // trin remove espaços antes e depois da string
   return arrayAsString.split(',').map(tech => tech.trim());
}