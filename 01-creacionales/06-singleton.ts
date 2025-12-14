/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

class DragonBalls {
  private static instance: DragonBalls;
  private ballsCollected: number;

  private constructor() {
    this.ballsCollected = 0;
  }

  static getInstance(): DragonBalls {
    if (!DragonBalls.instance) {
      DragonBalls.instance = new DragonBalls();
    }
    return DragonBalls.instance;
  }

  collectBall(): void {
    if (this.ballsCollected === 7) {
      console.log("You have collected all 7 Dragon Balls!");
      return;
    }
    this.ballsCollected++;
    console.log(`Collected ball. Total: ${this.ballsCollected}`);
  }

  summonShenlong() {
    if (this.ballsCollected === 7) {
      console.log("Shenlong has been summoned!");
      this.ballsCollected = 0;
      return;
    }
    console.log(`You need to collect ${7 - this.ballsCollected} more balls.`);
  }
}

function main() {
  const gokuDragonBalls = DragonBalls.getInstance();

  gokuDragonBalls.collectBall();
  gokuDragonBalls.collectBall();
  gokuDragonBalls.collectBall();
  gokuDragonBalls.collectBall();

  gokuDragonBalls.summonShenlong();

  const vegetaDragonBalls = DragonBalls.getInstance();
  vegetaDragonBalls.collectBall();
  vegetaDragonBalls.collectBall();
  vegetaDragonBalls.collectBall();

  gokuDragonBalls.summonShenlong();

  vegetaDragonBalls.summonShenlong();
}

main();