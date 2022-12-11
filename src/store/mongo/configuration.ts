import mongoose from 'mongoose';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async () => {
    await mongoose.connect('mongodb://alpagram:alpagram@localhost:27017/alpagram');
};
