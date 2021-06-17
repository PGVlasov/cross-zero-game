const express = require("express");
const app = express();
const path = require("path");
const server = require("http").Server(app);

app.use(express.static(path.join(__dirname, "src")));

const port = process.env.PORT || 3001;
server.listen(port, () => console.log(`App listening on port ${port}!`));
