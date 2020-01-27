const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors")

mongoose.connect(
  "mongodb+srv://yuri:yuri@servidorteste-w68vm.mongodb.net/devRadar?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
  }
);

app.use(express.json());
app.use(cors())
app.use(routes);
app.listen(4000);
