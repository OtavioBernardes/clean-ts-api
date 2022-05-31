import express from 'express';
import router from './main/routes';

const app = express();

app.use(express.json());
app.use('/api/', router)

app.listen(3000, () => console.log('Listening 3000'));
