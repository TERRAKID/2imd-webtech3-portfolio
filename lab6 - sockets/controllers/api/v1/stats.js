const getAll = (req, res) => {
    res.json({
        status : "success",
        data : {
            "stats" : [
                { "id" : 1, "country" : "Belgium", "cases" : 123 },
                { "id" : 2, "country" : "Netherlands", "cases" : 389 },
            ]
        }
    });
}

const updateStats = (req, res) => {
    res.json({
        status : "success",
        data : {
            "stats" : { "id" : 1, "country" : "Belgium", "cases" : 123 }}
    });
}

const addStats = (req, res) => {
    res.json({
        status : "success",
        data : {
            "stats" : { "id" : 1, "country" : "Belgium", "cases" : 123 }}
    });
}

module.exports.getAll = getAll;
module.exports.updateStats = updateStats;
module.exports.addStats = addStats;