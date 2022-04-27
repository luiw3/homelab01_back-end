import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
const PORT: number = 8005;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(routes);
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});





