import { Schema } from 'mongoose';
import { Odm } from '../../odm';
import { User } from '../../../../types/user';

const odm: Odm<User> = {
    mapper: queryResult => queryResult ?? ({
        id: queryResult._id,
        name: queryResult.name
    }),
    schema: new Schema({
        _id: String,
        name: String
    }, {
        collection: 'User'
    })
};

export default odm;
