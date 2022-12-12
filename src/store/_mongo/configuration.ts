import mongoose from 'mongoose';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async () => {
    await mongoose.connect(process.env.MONGO_URL ?? '');
};
