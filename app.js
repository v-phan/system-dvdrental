import express from 'express';
import { postgraphile } from 'postgraphile';
import { router } from './routes/routes.js'
import { errorHandlerMiddleware } from './middleware/errorHandler.js'
import { notFound } from './middleware/notFoundHandler.js'

const app = express();
const port = 8080;

// Middleware
app.use(express.json())
app.use(router);
app.use(errorHandlerMiddleware);
app.use(notFound);

// Connect postgraphile
app.use(
    postgraphile(
      process.env.DATABASE_URL || "postgres://postgres:postgres@127.0.0.1:5432/dvdrental",
      "public",
      {
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true,
      }
    )
  );

// Run the API
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})