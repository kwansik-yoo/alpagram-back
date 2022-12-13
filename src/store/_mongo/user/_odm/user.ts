import { Schema } from 'mongoose';
import { Odm } from '../../odm';
import { User } from '../../../../types/user';

const odm: Odm<User> = {
    fromDoc: queryResult => queryResult === null
        ? null
        : ({
            id: queryResult._id,
            name: queryResult.name
        }),
    toDoc: user => {
        const { id, name } = user;
        return {
            _id: id,
            name
        };
    },
    schema: new Schema({
        _id: String,
        name: String
    }, {
        collection: 'User'
    })
};

export default odm;
