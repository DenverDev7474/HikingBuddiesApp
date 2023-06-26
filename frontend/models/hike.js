class Hike {
    constructor(
        _id, 
        mountainId,
        eventTime, 
        routeId,
        hostId,
        attendeesIds,
        spotsAvailable,
        aboutDetails,
        gasSplit,
        hikePace,
        weatherPrediction,
        weatherPredictionPercentage,
        createdAt
        ){
            this._id = _id,
            this.mountainId= mountainId,
            this.eventTime= eventTime,
            this.routeId = routeId,
            this.hostId = hostId,
            this.attendeesIds = attendeesIds,
            this.spotsAvailable = spotsAvailable,
            this.aboutDetails = aboutDetails,
            this.gasSplit = gasSplit,
            this.hikePace = hikePace,
            this.weatherPrediction = weatherPrediction,
            this.weatherPredictionPercentage = weatherPredictionPercentage
            this.createdAt = createdAt
    }
}

export default Hike