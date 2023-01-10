export class CreateUserDto {
  name: string;
  secret: string;

  constructor(name: string, secret: string) {
    this.name = name;
    this.secret = secret;
  }
}
