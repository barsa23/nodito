// run `node index.js` in the terminal
const express = require('express');
const hbs = require("express-handlebars");
const router = express.Router();
const path = require("path");
const app = express();


const PORT = 3003;

const routeindex = require("./routes/routeindex");

app.engine(".hbs", hbs.engine({extname: "hbs"}))
app.set("view engine", "hbs")
app.set("views", "./views")


app.use(express.static("public"));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static('.'));


app.use("/", routeindex);

app.set("views", path.join(__dirname, "views"));

app.listen(PORT, () => {
   console.log(`servidor corriendo en el ${PORT}`);
})




