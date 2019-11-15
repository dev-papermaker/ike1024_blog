var mongoose = require("mongoose");

var memoSchema = new mongoose.Schema({
    user_senior: String,
    memo_title: String,
    memo_description: String,
    memo_topic: String,
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String,
        company: String,
        industry: String
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

module.exports = mongoose.model("Memo", memoSchema);
