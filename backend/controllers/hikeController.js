const mongoose = require('mongoose');
const hike = mongoose.model('hike');
const { promisify } = require('es6-promisify');



exports.createHike = (req, res) => {
    const newHike = new hike({
        mountainId: req.body.mountainId,
        eventTime: req.body.eventTime,
        routeId: req.body.routeId,
        hostId: req.body.hostId,
        attendeesIds: req.body.attendeesIds,
        spotsAvailable: req.body.spotsAvailable,
        aboutDetails: req.body.aboutDetails,
        gasSplit: req.body.gasSplit,
        hikePace: req.body.hikePace,
        weatherPrediction: req.body.weatherPrediction,
        weatherPredictionPercentage: req.body.weatherPredictionPercentage
    });


    newHike.save()
        .then((newHike) => {
            res.status(201).json(newHike);
        })
        .catch(err => {
            res.status(404).json({
                message: 'Error creating new hike',
                error: err,
                body: newHike
            });
        });
};

exports.getAllHikes = async (req, res) => {
    const hikes = await hike.find();
    if(!hikes){
        res.status(404).json({
            message: 'Error getting hikes',
            error: err
        });
    }
    res.status(200).json(hikes);    
}   


exports.getHikeById = (req, res) => {
    hike.findById(req.params.id)
        .then(hike => {
            res.status(200).json(hike);
        })
        .catch(err => {
            res.status(404).json({
                message: 'Error getting hike',
                error: err
            });
        }
    );
}


exports.updateHike = (req, res) => {
    const updateHike = {    
        mountainId: req.body.mountainId,
        eventTime: req.body.eventTime,
        routeId: req.body.routeId,
        hostId: req.body.hostId,
        attendeesIds: req.body.attendeesIds,
        spotsAvailable: req.body.spotsAvailable,
        aboutDetails: req.body.aboutDetails,
        gasSplit: req.body.gasSplit,
        hikePace: req.body.hikePace,
        weatherPrediction: req.body.weatherPrediction,
        weatherPredictionPercentage: req.body.weatherPredictionPercentage
    };


    hike.findByIdAndUpdate(req.params.id, updateHike, { new: true })
        .then(hike => {
            res.status(200).json(hike);
        })
        .catch(err => {
            res.status(404).json({
                message: 'Error updating hike',
                error: err
            });
        }
    );
}


exports.deleteHike = (req, res) => {
    hike.findByIdAndRemove(req.params.id)
        .then(hike => {
            res.status(200).json(hike);
        })
        .catch(err => {
            res.status(404).json({
                message: 'Error deleting hike',
                error: err
            });
        }
    );
}