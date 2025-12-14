/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

import { COLORS } from "../helpers/colors";

interface Hamburger {
  prepare(): void;
}

class ChickenHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparando el pollo');
  }
}

class BeefHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparando el carne');
  }
}

class BeanHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparando el frijoles');
  }
}


abstract class Restaurant {
  abstract createHamburger(): Hamburger;

  orderHamburger(): void {
    const hamburger = this.createHamburger();
    hamburger.prepare();
  }
}


class ChickenRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new ChickenHamburger();
  }
}

class BeefRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new BeefHamburger();
  }
}

class BeanRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new BeanHamburger();
  }
}

function main() {
  let restaurant: Restaurant | null = null;

  const type = prompt('¿Qué tipo de hamburguesa deseas? (chicken/beef/bean)');

  if (type === 'chicken') {
    restaurant = new ChickenRestaurant();
  }

  if (type === 'beef') {
    restaurant = new BeefRestaurant();
  }

  if (type === 'bean') {
    restaurant = new BeanRestaurant();
  }

  if (!restaurant) {
    console.log('Tipo de hamburguesa no válido');
    return;
  }

  restaurant.orderHamburger();
}

main();
