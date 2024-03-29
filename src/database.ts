import mongoose from 'mongoose';
import config from './config/config';



mongoose.connect( config.DB.URI, {} );

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB is connect !');
});

connection.once('error', (err) => {
    console.error(err);
    process.exit(0);
});


