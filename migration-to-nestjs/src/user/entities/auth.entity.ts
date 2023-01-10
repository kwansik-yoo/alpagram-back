export class Auth {
  id: string;
  secret: string;
  roles: RoleType[];

  constructor(id: string, secret: string, roles: RoleType[]) {
    this.id = id;
    this.secret = secret;
    this.roles = roles;
  }
}

export const Role = {
  User: '유저',
  Admin: '관리자',
} as const;

type RoleType = keyof typeof Role;
