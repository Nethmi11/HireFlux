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
  origin: ['https://comfy-bublanina-6e91f9.netlify.app'], // Add your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  credentials: true // Include this if you need to send cookies or use authorization headers
}));

connectDB();

app.use("/jobs", jobsRouter);
app.use("/jobApplications", jobApplicationRouter)

app.use(GlobalErrorHandlingMiddleware)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));
