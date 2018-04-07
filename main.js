const express = require("express");
const app = express();

const db = require("./db");

const index = require("./controllers/index");
const upload = require("./controllers/upload");
const download = require("./controllers/download");
const downloadTorrent = require("./controllers/downloadTorrent");

const multer = require("multer");

app.set("view engine","ejs");
app.set("views",__dirname + "/views");

app.use("/static",express.static("static"));

app.get("/",index);
app.get("/download/:id",download);
app.get("/downloadTorrent/:id",downloadTorrent);
//app.get("/upload",upload.get);
//app.post("/upload",multer({dest: "./static/"}).any(),upload.post);

app.listen(5454,function(){
    db.sync()
    .then(()=>{
        console.log("Presentaciones running at 5454");
    })
    .catch((e)=>{
        console.error("Error with Sequelize-MariaDB");
        console.error(e);
    });
    
});