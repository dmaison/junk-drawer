/**
 * Retrieves the time delta for the current date object
 * @returns {number}
 */
Date.prototype.getDeltaT = function() {
    const t = ( this.getUTCFullYear() - 2000 ) / 100,
    deltaT = 62.92 + 0.32217 * t + 0.005589 * t * t;
    
    return deltaT;
}

/**
 * Gets the julian ephemeris date for the current date object
 * @returns {number}
 */
Date.prototype.getJulianEphemeris = function () {
    const JD = ( Date.UTC( this.getFullYear(), this.getMonth(), this.getDate() ) / 86400000 ) + 2440587.5,
    JED = JD + ( this.getDeltaT() / 86400 );

    return Math.floor( JED );
};

/**
 * Gets the number of centuries past the epoch for the current date object
 * @returns {number}
 */
Date.prototype.getCenturiesPastEpoch = function(){
    return ( this.getJulianEphemeris() - 2451545.0 ) / 36525;
}