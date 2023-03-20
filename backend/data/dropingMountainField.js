require('dotenv').config({ path: __dirname + '/../.env' });
const fs = require('fs');

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION);



// loop through all routes on the mongo server  
const mountain = require('../models/mountain');


// remove all mountainId from mountains collection in mongodb
mountain.updateMany({}, { $unset: { mountainId: 1 } }, (err, res) => {
    if (err) {
        console.log("failed to remove mountainId");
        console.log(err);
    } else {
        console.log("removed mountainId");
        console.log(res);
    }
}
);