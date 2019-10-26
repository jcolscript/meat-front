export class User {
  constructor(
    public email: string,
    public name: string,
    public pass: string
  ) {}

  matches(another: User): boolean {
    return another !== undefined &&
    another.email === this.email &&
    another.pass === this.pass;
  }

}

export const users: {[key: string]: User} = {
  'juliana@gmail.com': new User('juliana@gmail.com', 'Juliana', 'juliana123'),
  'maria@gmail.com': new User('maria@gmail.com', 'Maria', 'maria123'),
  'ana@gmail.com': new User('ana@gmail.com', 'Ana', 'ana123'),
};
