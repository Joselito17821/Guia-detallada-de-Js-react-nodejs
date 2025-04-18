# Tipos de Datos en JavaScript

JavaScript tiene dos categorías de tipos de datos: primitivos y no primitivos.

## Primitivos
- **String**: texto.
- **Number**: números (enteros o decimales).
- **Boolean**: `true` o `false`.
- **Undefined**: variable declarada pero no inicializada.
- **Null**: valor intencionalmente vacío.
- **Symbol**: identificadores únicos.
- **BigInt**: números muy grandes.

```js
let nombre = "Carlos";      // string
let edad = 30;              // number
let esEstudiante = true;    // boolean
let x;                      // undefined
let y = null;               // null
```

## No Primitivos
- **Object**: estructuras con pares clave-valor.
- **Array**: listas ordenadas.
- **Function**: bloques de código reutilizables.

```js
let persona = { nombre: "Ana", edad: 22 };
let colores = ["rojo", "verde", "azul"];
function saludar() {
  console.log("Hola!");
}
```

---

## typeof
Para saber el tipo de una variable:

```js
console.log(typeof nombre); // "string"
```

---

## Ejercicios

1. Declara una variable de cada tipo primitivo.
2. Declara un objeto con 3 propiedades.
3. Declara un array de 5 elementos.
4. Usa `typeof` para mostrar el tipo de cada variable.

Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types
