import express, { Request, Response } from 'express';
import cors from 'cors';
import userRoutes from './modules/user/user.routes';
import authRoutes from "./modules/auth/auth.routes";

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Clothing Store API!');
});

app.use('/api/users', userRoutes);
app.use("/api/auth", authRoutes);


export default app;

