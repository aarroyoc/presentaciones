const File = require("../models/file");

module.exports = async function(req,res){
    try{
        let id = parseInt(req.params.id);
        let file = await File.findById(id);
        file.downloads++;
        file.save();
        res.download("./static/"+file.torrent,file.torrent);
    }catch(e){
        res.send("File not found").status(404);
    }
}