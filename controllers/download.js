const File = require("../models/file");

module.exports = async function(req,res){
    try{
        let id = parseInt(req.params.id);
        let file = await File.findByPk(id);
        file.downloads++;
        file.save();
        res.download("./static/"+file.file,file.file);
    }catch(e){
	console.error(e);
        res.status(404).send("File not found");
    }
};
