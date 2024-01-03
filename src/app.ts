import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// inicialization
const app = express();

// settings
app.set('port', process.env.PORT || 4000 );

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes 

app.get('/', (req, res) => {
    res.send(`The api is at http://localhost:${app.get('port')}`);
});

export default app;