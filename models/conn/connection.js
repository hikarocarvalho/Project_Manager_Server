const mongoose = require('mongoose');

function Connection(url,user,pass,bank){
    //mongoose.connect(`${url}/${bank}`, {
    mongoose.connect(`mongodb://localhost/hsolutions`
        //user:user,
        //pass:pass,
        //useNewUrlParser: true,
        //useUnifiedTopology: true,
   // }).then(() => {
    ).then(() => {
        console.log("MongoDB connected with sucess");
    }).catch((err) => {
        console.error(err);
    });
}

module.exports = Connection;
