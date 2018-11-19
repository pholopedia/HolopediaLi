export class Project {
  initial: string;
  name: string;

  constructor(name: string, initial?: string) {
    this.name = name;
    this.initial = (initial) ? initial : name.charAt(0);
  }
}