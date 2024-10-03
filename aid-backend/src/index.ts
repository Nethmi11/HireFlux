import "dotenv/config";
import express from "express";
import jobsRouter from "./api/jobs";
import { connectDB } from "./infrastructure/db";
import jobApplicationRouter from "./api/jobApplication";
import cors from "cors";
import GlobalErrorHandlingMiddleware from "./api/middleware/global-error-handler";

const app = express();

app.use(express.json());
app.use(cors({
  origin: ['https://main--comfy-bublanina-6e91f9.netlify.app'], // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // If Clerk uses cookies or session-based auth
  allowedHeaders: ['Authorization', 'Content-Type'] // Ensure Authorization is allowed
}));

connectDB();

app.use("/jobs", jobsRouter);
app.use("/jobApplications", jobApplicationRouter)

app.use(GlobalErrorHandlingMiddleware)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));
