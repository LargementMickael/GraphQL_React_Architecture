import mongoose from 'mongoose';

export function connectBD() {
    return new Promise<string>((resolve, reject) => {
        console.log('Connecting to DB at ');
        mongoose.connect('mongodb+srv://dormakaba:dormakaba@cluster0.1yiwk.mongodb.net/sample_restaurants')
            .then(() => {
                resolve('Successfully connected to database');
            })
            .catch((err) => {
                reject(err);
            });
    });
}
