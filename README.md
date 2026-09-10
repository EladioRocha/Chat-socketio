# Chat-socketio

Chat web por salas con Express y Socket.IO. Permite unirse con un nombre, enviar mensajes y actualizar la lista de participantes. Las salas se mantienen en memoria y se pierden al reiniciar el servidor.

## Estructura

- [examples](examples)
- [public](public)
- [index.html](index.html)
- [server.js](server.js)

## Preparación y uso

Abre `http://localhost:3000` en dos ventanas, entra a la misma sala con nombres diferentes y envía un mensaje. Comprueba también la actualización de participantes al cerrar una ventana.

### Raíz del repositorio

Requiere Node.js. Este paquete no fija una versión del runtime; valida compatibilidad con las dependencias antes de actualizarlo.

```sh
npm ci
npm run start
```

Comandos declarados en [package.json](package.json):

| Comando | Acción |
| --- | --- |
| `npm run test` | `echo "Error: no test specified" && exit 1` |
| `npm run start` | `node server.js` |

El script `test` es un marcador inicial, no una suite de pruebas.

## Validación y estado

Esta guía se contrastó con el árbol de archivos y los manifiestos del repositorio. No se ha validado una ejecución completa contra servicios externos, bases de datos o hardware. Las versiones y los scripts mostrados describen el código actual; no implican que sus dependencias antiguas sigan siendo compatibles.

## Documentación previa

Se conserva como referencia histórica, incluidas las imágenes y atribuciones originales. Los enlaces a demos y servicios no se han comprobado.

# Simple rooms chat with socket.io

This project are created with HTML, CSS and JS. Back-end is created with **NodeJS**

**Example using simple chat**\
![GIF using simple rooms chat](https://github.com/EladioRocha/Chat-socketio/blob/main/examples/result-1.gif?raw=true)
