# Día 3: Operadores en JavaScript

Este archivo contiene una introducción a los operadores más comunes en JavaScript con ejemplos y ejercicios.

---

## 1. Operadores Aritméticos

Se usan para realizar operaciones matemáticas:

```js
let a = 10;
let b = 3;

console.log(a + b);  // Suma
console.log(a - b);  // Resta
console.log(a * b);  // Multiplicación
console.log(a / b);  // División
console.log(a % b);  // Módulo (resto)
console.log(a ** b); // Potencia (exponente)
```

---

## 2. Operadores de Asignación

Usan `=` para asignar valores y otros para modificar el valor de una variable:

```js
let x = 5;
x += 2;  // x = x + 2
x -= 1;  // x = x - 1
x *= 3;  // x = x * 3
x /= 2;  // x = x / 2
x %= 2;  // x = x % 2
x **= 2; // x = x ** 2
console.log(x);
```

---

## 3. Operadores de Comparación

Devuelven `true` o `false` dependiendo de si se cumple la condición.

```js
console.log(5 == "5");   // true (igualdad débil)
console.log(5 === "5");  // false (igualdad estricta)
console.log(5 != 3);     // true
console.log(5 !== "5");  // true
console.log(10 > 5);     // true
console.log(5 < 3);      // false
console.log(7 >= 7);     // true
console.log(8 <= 4);     // false
```

---

## 4. Operadores Lógicos

Sirven para combinar condiciones lógicas.

```js
console.log(true && false); // false (AND)
console.log(true || false); // true (OR)
console.log(!true);         // false (NOT)
```

---

## 5. Incremento y Decremento

Aumentan o disminuyen el valor de una variable en 1.

```js
let n = 5;
n++;  // Incremento
console.log(n);

n--;  // Decremento
console.log(n);
```

