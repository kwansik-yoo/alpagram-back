import { User } from '../types/user';
import Store from '../store';
import mongoose from 'mongoose';

const signUp = async (id: string, name: string, password: string): Promise<string> => {
    // id check
    const predefinedUser = await Store.UserStore.findById(id);
    if (predefinedUser !== null) {
        throw new Error(`User with id(${id}} is already registered.`);
    }

    const session = await mongoose.startSession();
    await session.withTransaction(async () => {
        // register user
        await Store.UserStore.create({ id, name }, session);

        // register useAuthentication
        await Store.UserAuthenticateStore.create({ id, password }, session);
    });

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
    if (user === null) {
        throw new Error('Unknown error occurs.');
    }
    // add session

    return user;
};

const logout = async (id: string): Promise<void> => {
    // remove session

    return await Promise.resolve();
};

const updateName = async (id: string, name: string): Promise<void> => {
    await Store.UserStore.update(id, { id, name });
};

export default {
    signUp,
    login,
    logout,
    updateName
};
