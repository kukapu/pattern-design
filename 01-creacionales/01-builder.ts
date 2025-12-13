/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

class Computer {
    public cpu: string = 'cpu -not defined';
    public memory: string = 'memory -not defined';
    public storage: string = 'storage -not defined';
    public display: string = 'display -not defined';

    public toString(): string {
        return `Computer {
            cpu: ${this.cpu},
            memory: ${this.memory},
            storage: ${this.storage},
            display: ${this.display}
        }`;
    }
}

class ComputerBuilder {
    private computer: Computer = new Computer();

    public setCPU(cpu: string): ComputerBuilder {
        this.computer.cpu = cpu;
        return this;
    }

    public setMemory(memory: string): ComputerBuilder {
        this.computer.memory = memory;
        return this;
    }

    public setStorage(storage: string): ComputerBuilder {
        this.computer.storage = storage;
        return this;
    }

    public setDisplay(display: string): ComputerBuilder {
        this.computer.display = display;
        return this;
    }

    public build(): Computer {
        return this.computer;
    }
}


function main() {
    const computer = new ComputerBuilder()
        .setCPU('Intel Core i7')
        .setMemory('16GB')
        .setStorage('1TB')
        .setDisplay('15.6"')
        .build();

    console.log(computer.toString());

    const gamingComputer = new ComputerBuilder()
        .setCPU('Ryzen X3D')
        .setMemory('64GB')
        .setStorage('2TB')
        .setDisplay('24"')
        .build();

    console.log(gamingComputer.toString());
}

main();