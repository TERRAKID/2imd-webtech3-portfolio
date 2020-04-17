const getAll = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "message": "Homepage"
        }
    });
}

const getMessages = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "message": "GETTING messages"
        }
    });
}

const getMessagesId = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "message": "GETTING message with ID :id"
        }
    });
}

const postMessages = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "message": {
                "user": "Pikachu",
                "text": "nodejs isn’t hard, or is it?"
            }
        }
    });
}

const putMessagesId = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "message": "UPDATING a message with id :id"
        }
    });
}

const deleteMessagesId = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "message": "DELETING a message with id :id"
        }
    });
}

const getMessagesUser = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "message": "GETTING message for username :username"
        }
    });
}

module.exports.getAll = getAll;
module.exports.getMessages = getMessages;
module.exports.getMessagesId = getMessagesId;
module.exports.postMessages = postMessages;
module.exports.putMessagesId = putMessagesId;
module.exports.deleteMessagesId = deleteMessagesId;
module.exports.getMessagesUser = getMessagesUser;