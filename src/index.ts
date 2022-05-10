import express from 'express';

const app = express();
app.use(express.json());

interface RequestBody {
  name: string;
}

app.post('/', (request, response) => {
  const user = request.body as RequestBody;

  return response.send({
    message: `Hello ${user.name}`,
  });
});

app.listen(3000, () => console.log('Listening 3000'));
