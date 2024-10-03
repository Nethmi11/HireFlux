import "dotenv/config";
import express from "express";
import jobsRouter from "./api/jobs";
import { connectDB } from "./infrastructure/db";
import jobApplicationRouter from "./api/jobApplication";
import cors from "cors";
import GlobalErrorHandlingMiddleware from "./api/middleware/global-error-handler";

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/jobs", jobsRouter);
app.use("/jobApplications", jobApplicationRouter)

app.use(GlobalErrorHandlingMiddleware)

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 8000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is listening on port ${port} and accessible from network interfaces.`);
});
