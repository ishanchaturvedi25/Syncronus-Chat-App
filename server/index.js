import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const databaseURL = process.env.DATABASE_URL;

app.use(cors({
    origin: [process.env.origin],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());

const server = app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
})

mongoose
.connect(databaseURL)
.then(() => console.log("DB Connection Successfull"))