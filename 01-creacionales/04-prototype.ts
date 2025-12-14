/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */

class Document {
  title: string;
  author: string;
  private content: string;

  constructor(title: string, author: string, content: string) {
    this.title = title;
    this.author = author;
    this.content = content;
  }

  clone(): Document {
    return new Document(this.title, this.author, this.content);
  }

  displayInfo(): void {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Content: ${this.content}`);
  }
}


function main() {
  const document = new Document('Document 1', 'Author 1', 'Content 1');
  console.log({ document })
  document.displayInfo();

  const document2 = { ...document }
  document2.title = 'Document 2';
  console.log({ document2 })
  // document2.displayInfo(); No va porque document2 es un objeto plano

  const document3 = structuredClone(document);
  document3.title = 'Document 3';
  console.log({ document3 })
  // document3.displayInfo(); No va porque document3 es un objeto plano

  const document4 = document.clone();
  document4.title = 'Document 4';
  console.log({ document4 })
  document4.displayInfo();
}

main();