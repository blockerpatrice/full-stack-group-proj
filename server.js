const express = require("express");
const app = express();
const PORT = 2901;
const mongoose = require('mongoose');


app.use(express.json());

app.use("/", require("./chatRoute"));


mongoose.connect('mongodb://localhost:27017/chatting-app',{useNewUrlParser: true})
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));

app.listen(PORT, () => {
   console.log(`App is listening on port ${PORT}`);
});