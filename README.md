# Greeting Builder

## Descripción del proyecto

Este proyecto es un pequeño ejemplo en JavaScript que construye un saludo completo a partir de un nombre, un apellido y un momento del día.

- `formatName(firstName, lastName)`: valida los parámetros y devuelve el nombre completo.
- `getGreeting(timeOfDay)`: valida el momento del día y devuelve un saludo adecuado.
- `createGreeting(firstName, lastName, timeOfDay)`: combina ambos resultados y maneja errores para devolver mensajes claros.

Este proyecto se basa en el ejemplo de Roadmap.sh:

https://roadmap.sh/projects/js-greeting-builder

## Uso / How to use

1. Abre el archivo `main.js`.
2. Llama a `createGreeting()` con los argumentos deseados.
3. Imprime el resultado en consola.

### Ejemplo

```javascript
console.log(createGreeting('Noah', 'Kim', 'evening'));
// Good evening

console.log(createGreeting('Mina', 'Patel', 'midday'));
// Valor no admitido.
```

## In English

### Project description

This project is a small JavaScript example that builds a full greeting from a first name, last name, and time of day.

- `formatName(firstName, lastName)`: validates inputs and returns the full name.
- `getGreeting(timeOfDay)`: validates the time of day and returns the correct greeting.
- `createGreeting(firstName, lastName, timeOfDay)`: combines both outputs and handles errors to return clear messages.

### How to use

1. Open `main.js`.
2. Call `createGreeting()` with the desired arguments.
3. Print the result to the console.

### Example

```javascript
console.log(createGreeting('Noah', 'Kim', 'evening'));
// Good evening

console.log(createGreeting('Mina', 'Patel', 'midday'));
// Valor no admitido.
```
