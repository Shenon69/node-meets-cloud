import express from "express";
import router from "../api/v1/routes.js";

const v1Routes = router;

const app = express();
app.use(express.json());

app.use("/api/v1", v1Routes);

export default app;
