const  mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const routeScheme  = new Schema({
    mountainId: {
        type: mongoose.Types.ObjectId,
        ref: 'Mountain',
        required: true
    },
    routeName: {
        type: String,
        required: true
    },
    routeGain: {
        type: String,
        required: true
    },
    routeDistance: {
        type: String,
        required: true
    },
    routeDifficulty: {
        type: String,
        required: true
    },  
    routeRiskFactor: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('route', routeScheme);
