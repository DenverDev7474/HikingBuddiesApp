class Route {
    constructor(
        routeId,
        mountainId, 
        routeName,
        routeGain,
        routeDistance,
        routeDifficulty,
        routeRiskFactor,
        ){
            this.routeId = routeId,
            this.mountainId = mountainId,
            this.routeName = routeName,
            this.routeGain = routeGain,
            this.routeDistance = routeDistance,
            this.routeDifficulty = routeDifficulty,
            this.routeRiskFactor = routeRiskFactor
    }
}

export default Route