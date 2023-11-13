import app from "./config/app.js";

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

app.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});

app.get("/", (req, res) => {
  res.json({ message: "Hello FOSS NSBM!" });
});
