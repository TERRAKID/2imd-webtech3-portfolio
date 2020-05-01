const Stat = require('../../../models/Stat');

const getAll = (req, res) => {
    Stat.find((err, doc) => {
        if (!err) {
            res.json({
                status : "success",
                data : { "stats" : doc }
            });
        } else {
            res.json({
                status : "error",
                message : "Unable to find a stat"
            });
        }
    })
}

const updateStats = (req, res) => {
    let country = req.body.country;
    let cases = req.body.cases;
    Stat.findOneAndUpdate({"country" : country}, {"cases" : cases}, (err, doc) => {
        if (!err) {
            res.json({
                status : "success",
                data : { "stats" : doc }
            });
        } else {
            res.json({
                status : "error",
                message : "Unable to update a stat"
            });
        }
    })
}

const addStats = (req, res) => {
    let stat = new Stat();
    stat.country = req.body.country;
    stat.cases = req.body.cases;
    stat.save((err, doc) => {
        if (!err) {
            res.json({
                status : "success",
                data : { "stats" : doc }
            });
        } else {
            res.json({
                status : "error",
                message : "Unable to add a stat"
            });
        }
    })
}

module.exports.getAll = getAll;
module.exports.updateStats = updateStats;
module.exports.addStats = addStats;