import { User } from '../types/user';
import Store from '../store';

const signUp = async (id: string, name: string, password: string): Promise<string> => {
    // id check
    const userWithSameId = await Store.UserStore.findById(id);
    if (userWithSameId != null) {
        throw new Error(`User with id(${id}} is already registered.`);
    }
    // register user
    await Store.UserStore.create({ id, name });

    // register useAuthentication
    await Store.UserAuthenticateStore.create({ id, password });

    // welcome message
    // TODO
    return await Promise.resolve(id);
};

const login = async (id: string, password: string): Promise<User> => {
    // authenticate
    const auth = await Store.UserAuthenticateStore.findById(id);
    if (auth === null) {
        throw new Error(`User with id(${id}) is not exists.`);
    } else if (auth?.password !== password) {
        throw new Error('Password not matched.');
    }
    // find user
    const user = await Store.UserStore.findById(id);
    if (user === undefined) {
        throw new Error('Unknown error occurs.');
    }
    // add session

    return user;
};

const logout = async (id: string): Promise<void> => {
    // remove session

    return await Promise.resolve();
};

export default {
    signUp,
    login,
    logout
};
