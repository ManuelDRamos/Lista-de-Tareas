const express = require("express");
const { router } = require("./routes/index");
const cors = require("cors");

const app = express();
const port = 3000;


app.use(express.json());


app.use(cors());
app.use("/", router);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


module.exports = {
      app
    };