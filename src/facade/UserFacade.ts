import { User } from '../types/user';

export interface UserFacade {
    singUp: (id: string, name: string, password: string) => Promise<string>;
    login: (id: string, password: string) => Promise<User>;
    logout: (id: string) => Promise<void>;
}
