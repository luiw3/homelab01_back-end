import express from 'express';

const app = express();
const PORT: number = 8000;
app.get('/', (req,res) => res.send('Express + TypeScript Serveraaaaaaaaa'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
