import express from 'express';
import routes from './routes';



const app = express();
const PORT: number = 8005;

app.use(routes);
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
