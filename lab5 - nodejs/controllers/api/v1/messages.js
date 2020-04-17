const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messagesSchema = new Schema({
    text: String,
    user: String,
});
const Message = mongoose.model('Message', messagesSchema);

const getMessagesId = (req, res) => {
    let id = req.params.id;
    Message.find({_id: id}, (err, doc) => {
        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "message": doc
                }
            });
        }
    })
}

const postMessages = (req, res) => {
    let message = new Message();
    message.text = "nodejs isn’t hard, or is it?";
    message.user = "Pikachu";
    message.save((err, doc) => {
        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "message": doc
                }
            });
        }
    })
}

const putMessagesId = (req, res) => {
    let id = req.params.id;
    let text = "update";
    Message.findByIdAndUpdate({_id: id}, {text: text}, (err, doc) => {
        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "message": "Updated message",
                    "text": text
                }
            }); 
        }
    })
}

const deleteMessagesId = (req, res) => {
    let id = req.params.id;
    Message.findByIdAndDelete({_id: id}, (err, doc) => {
        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "message": "The message was removed"
                }
            });
        }
    })
}

const getMessagesAll = (req, res) => {
    let user = req.query.user;
    Message.find({user: user}, (err, doc) => {
        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "message": doc,
                    "user": user
                }
            });
        }
    })
}

module.exports.getMessagesId = getMessagesId;
module.exports.postMessages = postMessages;
module.exports.putMessagesId = putMessagesId;
module.exports.deleteMessagesId = deleteMessagesId;
module.exports.getAll = getMessagesAll;