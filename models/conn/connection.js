const mongoose = require('mongoose');

function Connection(url,user,pass,bank){
    mongoose.connect(`mongodb://localhost/hsolutions`).then(() => {
        console.log("MongoDB connected with sucess");
    }).catch((err) => {
        console.error(err);
    });
}

module.exports = Connection;
