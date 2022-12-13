import { Schema } from 'mongoose';
import { Odm } from '../../odm';
import { UserAuthentication } from '../../../../types/user';

const odm: Odm<UserAuthentication> = {
    fromDoc: queryResult => queryResult === null
        ? null
        : ({
            id: queryResult._id,
            password: queryResult.password
        }),
    toDoc: userAuth => {
        const { id, password } = userAuth;
        return {
            _id: id,
            password
        };
    },
    schema: new Schema({
        _id: String,
        password: String
    }, {
        collection: 'UserAuthentication'
    })
};

export default odm;
