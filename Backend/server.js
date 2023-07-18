const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api", require("./routes/productRoutes"));

app.listen(PORT, () => {
  console.log(`server listening in port : ${PORT}`);
});
