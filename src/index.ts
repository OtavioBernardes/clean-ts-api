import express from 'express';
import router from './infrastructure/routes/product-routes';

const app = express();

app.use(express.json());

app.post('/', (request, response) => {
  return response.send({
    message: `Hello World`,
  });
});

app.use('/api/', router)
app.listen(3000, () => console.log('Listening 3000'));
