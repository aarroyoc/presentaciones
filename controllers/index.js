const Talk = require("../models/talk");
const File = require("../models/file");
const moment = require("moment");

module.exports = async (req,res)=>{
    try{
        let talks = await Talk.all({
            order: [
                ["createdAt","DESC"]
            ],
            include: [File]
        });
        res.render("index",{talks: talks, moment: moment});
    }catch(e){
        console.error(e);
    }
};