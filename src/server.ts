import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from './routes/routes';

const app = express();
app.use(express.json());

// Swagger UI
app.use('/docs', swaggerUi.serve, async (_req: express.Request, res: express.Response) => {
  return res.send(swaggerUi.generateHTML(await import('../public/swagger.json')));
});

RegisterRoutes(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//api/books/v1/endpoints