import { Schema } from 'mongoose';
import { Odm } from '../../odm';
import { UserAuthentication } from '../../../../types/user';

const odm: Odm<UserAuthentication> = {
    mapper: queryResult => queryResult ?? ({
        id: queryResult._id,
        password: queryResult.password
    }),
    schema: new Schema({
        _id: String,
        password: String
    }, {
        collection: 'UserAuthentication'
    })
};

export default odm;
