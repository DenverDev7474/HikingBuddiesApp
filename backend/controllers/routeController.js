const mongoose = require('mongoose');
const route = mongoose.model('route');
const { promisify } = require('es6-promisify');



exports.getAllRoutes = (req, res) => {
    route.find()
        .then(routes => {
            res.status(200).json(routes);
        })
        .catch(err => {
            res.status(404).json({
                message: 'Error getting routes',
                error: err
            });
        });
};

exports.getRouteById = (req, res) => {
    route.findById(req.params.id)
        .then(route => {
            res.status(200).json(route);
        })
        .catch(err => {
            res.status(404).json({
                message: 'Error getting route',
                error: err
            });
        });
}

exports.getAllRoutesByMountainId = (req, res) => {
    route.find({ mountainId: req.params.id })
        .then(routes => {
            res.status(200).json(routes);
        })
        .catch(err => {
            res.status(404).json({
                message: 'Error getting routes',
                error: err
            });
        });
}
