
# Cómo se ejecuta JavaScript en el Navegador con Node.js

Este archivo explica cómo se ejecuta JavaScript tanto en el navegador como en Node.js, y cómo ambos entornos interactúan.

## 1. JavaScript en el Navegador (Frontend)

**¿Qué es?**

JavaScript se ejecuta en el navegador del usuario, lo que permite que las páginas web sean dinámicas, interactivas y que respondan a eventos de usuario como clics, desplazamientos, etc.

### ¿Cómo se ejecuta?

Cuando el navegador carga una página web, el código JavaScript se puede incluir dentro de la página HTML usando la etiqueta `<script>`.

### Ejemplo básico:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo JS</title>
</head>
<body>
    <h1 id="titulo">Hola, mundo!</h1>
    <button id="cambiarTexto">Cambiar texto</button>

    <script>
        // JavaScript en el navegador
        document.getElementById('cambiarTexto').addEventListener('click', function() {
            document.getElementById('titulo').innerText = 'Texto cambiado!';
        });
    </script>
</body>
</html>
```

---

## 2. JavaScript con Node.js (Backend)

**¿Qué es?**

Node.js es un entorno de ejecución de JavaScript del lado del servidor. Permite ejecutar JavaScript fuera del navegador y se utiliza para crear aplicaciones del lado del servidor, como APIs, servidores HTTP, manejo de bases de datos, etc.

### ¿Cómo se ejecuta?

Node.js se instala en tu máquina y puedes ejecutar archivos JavaScript directamente desde la terminal. A diferencia de JavaScript en el navegador, no tiene acceso al DOM, pero tiene otras funcionalidades como la manipulación de archivos y la creación de servidores HTTP.

### Ejemplo básico (servidor HTTP con Node.js):

```javascript
// Importar el módulo http de Node.js
const http = require('http');

// Crear un servidor que responde con "Hola Mundo"
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola Mundo desde Node.js');
});

// Escuchar en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
```

Para ejecutar este código, guardas el archivo como `servidor.js` y lo corres desde la terminal con:

```bash
node servidor.js
```

---

## 3. ¿Cómo interactúan?

Aunque Node.js y JavaScript en el navegador son entornos distintos, ambos se pueden usar juntos para construir aplicaciones web modernas. Aquí hay algunas formas de hacerlo:

- **Express.js**: Framework de Node.js para crear aplicaciones web y servir contenido estático al navegador.
- **Webpack y Babel**: Herramientas que permiten empaquetar y transpilando JavaScript moderno para el navegador.
- **Socket.io**: Biblioteca para la comunicación en tiempo real entre el navegador y el servidor usando Node.js.

### Ejemplo usando Node.js y JavaScript en el navegador con Express.js:

```javascript
// server.js (Node.js)
const express = require('express');
const app = express();

// Servir archivos estáticos (HTML, CSS, JS) desde una carpeta pública
app.use(express.static('public'));

// Crear un servidor HTTP
app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
```

En la carpeta `public/` se puede colocar el archivo `index.html` con JavaScript que se ejecutará en el navegador.

---

## Resumen

- **JavaScript en el navegador** se ejecuta para manipular la página web, interactuar con el DOM y responder a eventos.
- **Node.js** permite ejecutar JavaScript en el servidor, lo que facilita crear aplicaciones del lado del servidor, manejar bases de datos, archivos y mucho más.
- Puedes combinar ambos para crear aplicaciones web dinámicas utilizando Express.js, Socket.io y otras herramientas.

---

Fuente: [MDN - JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps)
