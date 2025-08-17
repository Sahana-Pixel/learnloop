// If backend has cors() → ✅ Request goes through.
// If not → ❌ Browser blocks it (CORS error).


import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import userRoutes from './Routes/user.js';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to DB
connectDB();

// Routes
app.use('/api', userRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));












// Frontend sends a request with the token in headers:
// Authorization: Bearer <token>
// Backend:
// Checks if the token exists and is valid using a middleware function (authenticateToken).
// If valid → user is allowed to access the route.
// If invalid → user gets an error (unauthorized or forbidden).
// ✅ Result: Only logged-in users can see the profile page.