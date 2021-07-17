
//Pedir 2 datos por pantalla y almacenarlo en dos variables 
//diferentes:
//Variable 1(8)  Variable 2 (20)
//Realizar todas las Operacion compracion vistas en la clase
//Mostra en la consola todos los posibles resultados
//y explicar con sus propias palabras porque se dio es resultado 'true , false'


let a = 8, b = 20;

//Operador Mayor que
console.log(`El ${a} es mayor que el ${b} :`,a>b, `\ndebido a que el 20 es mayor`);
//Operador Mayor o igual que
console.log(`El ${a} es mayor o igual que el ${b} :`,a>=b, `\ndebido a que el 8 es menor`);
//Operador Menor que
console.log(`El ${a} es menor que el ${b} :`,a<b, `\ndebido a que efectivamente el 8 es menor`);
//Operador Menor o igual que
console.log(`El ${a} es menor o igual que el ${b} :`,a<=b, `\ndebido a que efectivamente el 8 es menor que el 20`);

// Operador Igual que
console.log(`El ${a} es igual que el ${b} :`,a==b , `\ndebido a que los números son diferentes`);
//Operador Identico que
console.log(`El '${a} ${typeof a}' es identico que el '${b} ${typeof b}' :`,a===b, `\ndebido a que aunque los tipos de datos son identicos el valor de los datos no`);
//Operador Diferente que
console.log(`El ${a} es diferente que el ${b} :`,a!=b, `\ndebido a que efectivamente el valor de los dos datos no es el mismo`);
//Operador No Diferente que
console.log(`El '${a} ${typeof a}' es no diferente que el '${b} ${typeof b}' :`,a!==b, `\ndebido a que la combinación dato y tipo de dato no es identica`);