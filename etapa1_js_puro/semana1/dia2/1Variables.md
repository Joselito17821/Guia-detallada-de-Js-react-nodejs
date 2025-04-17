# 🔤 Variables en JavaScript

## 🧠 ¿Qué es una variable?

Una variable es un espacio en memoria donde puedes guardar datos. En JavaScript puedes usar tres formas de declarar variables:

- `var` → forma antigua, **NO recomendada**
- `let` → valor puede cambiar (recomendado)
- `const` → valor **constante**, no puede cambiar

---

## 🪄 Declaración de variables

```js
let edad = 25;         // puede cambiar
const nombre = "Ana";  // constante
```

---

## ⚠️ Reglas para nombres de variables

- Deben comenzar con una letra, `_` o `$`
- No pueden comenzar con un número
- No pueden usar palabras reservadas (como `let`, `class`, etc.)
- Usualmente se usan en **camelCase**: `miNombre`, `numeroFavorito`

---

## 🔁 Diferencias entre `let` y `const`

| Característica     | `let`                        | `const`                              |
|--------------------|------------------------------|---------------------------------------|
| Reasignable        | ✅ Sí                         | ❌ No                                 |
| Re-declarable      | ❌ No (en el mismo bloque)    | ❌ No                                 |
| Uso recomendado    | Cuando el valor va a cambiar | Cuando el valor nunca cambia          |

---

## 🎯 Ejemplos

```js
let contador = 1;
contador = 2; // ok

const pi = 3.1416;
// pi = 3.15; ❌ Error: no se puede cambiar
```
---

## ✅ Buenas prácticas

- Usa `const` por defecto. Solo usa `let` si el valor va a cambiar.
- Nombres descriptivos: `edadUsuario` es mejor que `x`.
- No uses `var`.
