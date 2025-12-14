/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 *
 */

class CodeEditorState {
  constructor(
    readonly content: string,
    readonly cursor: number,
    readonly selection: number
  ) { }

  copyWith({
    content,
    cursor,
    selection
  }: Partial<CodeEditorState>): CodeEditorState {
    return new CodeEditorState(
      content ?? this.content,
      cursor ?? this.cursor,
      selection ?? this.selection
    );
  }

  display(): void {
    console.log(this.content);
    console.log(`Cursor: ${this.cursor}`);
    console.log(`Selection: ${this.selection}`);
  }
}

class CodeEditorHistory {
  private history: CodeEditorState[] = [];
  private currentState: number = -1;

  save(state: CodeEditorState): void {
    if (this.currentState < this.history.length - 1) {
      this.history = this.history.slice(0, this.currentState + 1);
    }

    this.history.push(state);
    this.currentState++;
  }

  redo(): CodeEditorState | null {
    if (this.currentState < this.history.length - 1) {
      this.currentState++;
      return this.history[this.currentState]!;
    }
    return null;
  }

  undo(): CodeEditorState | null {
    if (this.currentState > 0) {
      this.currentState--;
      return this.history[this.currentState]!;
    }
    return null;
  }
}

function main() {
  const history = new CodeEditorHistory();
  let state = new CodeEditorState("Onizuka", 0, 0);
  history.save(state);
  state.display();

  state = state.copyWith({ content: "Hello" });
  history.save(state);
  state.display();

  state = state.copyWith({ content: "Hello World" });
  history.save(state);
  state.display();

  state = state.copyWith({ content: "Hello World!" });
  history.save(state);
  state.display();

  console.log('--- UNDO ---');
  state = history.undo()!;
  state.display();

  console.log('--- REDO ---');
  const nextState = history.redo();
  if (nextState) {
    state = nextState;
    state.display();
  }
}

main();