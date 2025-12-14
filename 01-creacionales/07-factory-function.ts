/**
 * ! Factory Function
 * Es un patrón de diseño que nos permite crear objetos o funciones de manera dinámica que serán
 * usados posteriormente en el código.
 *
 * * Es útil cuando necesitamos crear objetos o funciones de manera dinámica,
 * * es decir, en tiempo de ejecución y no en tiempo de compilación.
 *
 */

type Languaje = 'es' | 'en' | 'fr';

function createGreeter(lang: Languaje) {

  return function (name: string) {
    const message = {
      es: 'Hola',
      en: 'Hello',
      fr: 'Bonjour',
    }[lang];

    return console.log(`${message} ${name}`);
  }
}

