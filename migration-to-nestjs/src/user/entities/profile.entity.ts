export class Profile {
  id: string;
  nickname: string;
  img: string;

  constructor(id: string, nickname: string, img: string) {
    this.id = id;
    this.nickname = nickname;
    this.img = img;
  }
}
