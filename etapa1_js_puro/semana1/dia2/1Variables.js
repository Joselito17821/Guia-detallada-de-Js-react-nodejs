//Variables , var, let, const.

/*
    VAR:Declara una variable, opcionalmente la inicia a un valor.
    lET:Declara una variable local con ámbito de bloque, opcionalmente la inicia a un valor.
    CONST:Declara un nombre de constante de solo lectura y ámbito de bloque.
*/

/*
1. var (evítala en código moderno)
°Fue la forma original de declarar variables.

°Tiene scope de función: si la declaras dentro de una función, no se puede usar fuera.

°Se eleva (hoisting): JavaScript la "sube" al inicio del contexto, lo cual puede causar errores difíciles de detectar.

°Se puede re-declarar y re-asignar.
*/
var nombre = "Ana";
var nombre = "Carlos"; // esto funciona con var (no recomendado)

/*
2. let (la opción recomendada para variables mutables)
Introducida en ES6 (2015).

Tiene scope de bloque (entre {}).

Se puede re-asignar pero no re-declarar en el mismo bloque.

También tiene hoisting, pero no se puede usar antes de declararse (dará error).
*/
let edad = 25;
edad = 26; // ✅ se puede cambiar

//let edad = 30; // ❌ error si está en el mismo bloque

/*
3. const (para variables inmutables)
También tiene scope de bloque.

No se puede re-asignar ni re-declarar.

Debe inicializarse al momento de declararla.
*/
const PI = 3.1416;
PI = 3; // ❌ Error: no se puede cambiar


/*
🧭 ¿Cuándo usar cada uno?

Caso                                    ¿Qué usar?
	                                
Valor que no cambia	                    const
Valor que cambia	                    let
Código antiguo o scope de función	    var (evitar)

*/

//Fuente:https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types