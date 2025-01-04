import cookieParser from 'cookie-parser';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import { notFound, errorHandler } from './middleware/error.middleware.js';
import connectDB from './config/db.js';
import superAdminRoutes from "./routes/superAdmin.routes.js"

const port = process.env.PORT || 5000;
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}))

app.use(cookieParser());


app.use('/api/superAdmin', superAdminRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// POST /api/users - Register a users
// POST /api/users/auth - Auth a user and get token
// POST /api/users/logout - Logout a user and clear cookie
// GET  /api/users/profile - Get user profile
// PUT  /api/users/profile - Update user profile