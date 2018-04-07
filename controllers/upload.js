const promisify = require("util").promisify;
const createTorrent = promisify(require("create-torrent"));
const fs = require("fs");
const writeFile = promisify(fs.writeFile);
const rename = promisify(fs.rename);

const Talk = require("../models/talk");
const File = require("../models/file");


async function get(req,res){
    res.render("upload");
}

async function post(req,res){
    let name = req.body.name;
    let description = req.body.description;
    let embed = req.body.embed;
    let file = req.files[0].filename;
    let originalname = req.files[0].originalname;
    await rename("./static/"+file,"./static/"+originalname);
    file = "./static/"+originalname;

    let torrent = await createTorrent(file,{name: originalname, comment: description});
    await writeFile("./static/"+originalname+".torrent",torrent);

    let fileDB = await File.create({
        file: originalname,
        torrent: originalname+".torrent"
    });

    let talk = Talk.build({
        name: name,
        description: description,
        embed: embed,
        file_id: fileDB.id
    });
    await talk.save();
    res.send("OK");
}

exports.get = get;
exports.post = post;