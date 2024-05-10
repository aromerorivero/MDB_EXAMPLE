const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const mongoURI = "mongodb://localhost:27017/Stock";


const options = {
    useNewUrlParser: true
}
mongoose.set('strictQuery', false);
mongoose.connect(mongoURI, options)
    .then(() => console.log("Conectado a la base de datos"))
    .catch(err => console.log(err))

const devices = require("./routes/devices");
app.use(express.json());
app.use("/devices", devices);
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})