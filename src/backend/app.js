const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const trianglesRouter = require("./api/triangles");
const buildPath = path.join(__dirname, "../../dist");
const cors = require("cors");

// Serve the built client html
app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(cors());

router.use("/triangles", trianglesRouter);

app.use(process.env.API_PATH, router);

app.use("*", (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});

module.exports = app;
