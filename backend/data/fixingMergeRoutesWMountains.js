require('dotenv').config({ path: __dirname + '/../.env' });
const fs = require('fs');

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises



// loop through all routes on the mongo server  
const route = require('../models/route');
const mountain = require('../models/mountain');

const routes = JSON.parse(fs.readFileSync(__dirname + '/routesData.json', 'utf-8'));

console.log(routes);


routes.forEach(routeItem => {
    const Id = routeItem.mountainId;
    // console.log(Id);

    // loop through all mountains on the mongo server
    mountain.find({ mountainId: Id }, (err, mountain) => {
        if (err) {
            console.log(err);
        } else {
            const moutain_id = mountain[0]._id;
            console.log(moutain_id);
            const newRoute = new route({
                    mountainId: moutain_id,
                    routeName: routeItem.routeName,
                    routeGain: routeItem.routeGain,
                    routeDistance: routeItem.routeDistance,
                    routeDifficulty: routeItem.routeDifficulty,
                    routeRiskFactor: routeItem.routeRiskFactor
            });
            newRoute.save() 
                .then((newRoute) => {
                    console.log(newRoute);
                }
            )
                .catch(err => {
                    console.log(err);
                }
            );
        }
    });
});