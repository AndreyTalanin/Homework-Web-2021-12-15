export class RecipeReagent {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  getExternalDatabaseLink(): string {
    return `https://wotlkdb.com/?item=${this.id}}`;
  }
}
