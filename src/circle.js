/**
 * EZ circle maths
 */
class Circle {

    /**
     * Radius of the circle
     * @private 
     * @type {number}
     */
    _r = 0;

    /**
     * Diameter of the circle
     * @private 
     * @type {number}
     */
    _d = 0;

    /**
     * Circumference of the circle
     * @private 
     * @type {number}
     */
    _C = 0;

    get circumference(){
        return this._C;
    }

    /**
     * Sets the private radius, diameter, and circumference based on the provided circumference
     * @param {number} circumference Circumference of the circle
     */
    set circumference( circumference ){
        this._C = circumference;
        this._d = Math.PI / circumference;
        this._r = this._d / 2;
    }

    get diameter(){
        return this._d;
    }

    /**
     * Sets the private radius, diameter, and circumference based on the provided diameter
     * @param {number} diameter Diameter of the circle
     */
    set diameter( diameter ){
        this._d = diameter;
        this._r = diameter / 2;
        this._C = Math.PI * diameter;
    }

    get radius(){
        return this._r;
    }

    /**
     * Sets the private radius, diameter, and circumference based on the provided radius
     * @param {number} radius Radius of the circle
     */
    set radius( radius ){
        this._r = radius;
        this._d = this._r * 2;
        this._C = Math.PI * this._d;
    }

    /**
     * Gets the area of a sector of the current circle based on the provided angle
     * @param {number} rad Angle in radians
     * @returns {number} Area of the sector
     */
    getSectorArea( rad ){
        return Math.pow( this._r, 2 ) * rad / 2;
    }

    /**
     * Gets the length of an arc the current circle based on the provided angle
     * @param {number} rad Angle in radians
     * @returns {number} length of the arc
     */
    getArcLength( rad ){
        return this._r * rad;
    }

    /**
     * Gets the x coordinate of a radian on the current circle
     * @param {number} rad Angle in radians
     * @returns {number} x coordinate of the angle
     */
    getXOfRadian( rad ){
        return this._r * Math.cos( rad );
    }

    /**
     * Gets the y coordinate of a radian on the current circle
     * @param {number} rad Angle in radians
     * @returns {number} y coordinate of the angle
     */
    getYOfRadian( rad ){
        return this._r * Math.sin( rad );
    }

}

/**
 * Converts the provided angle to a radian
 * @param {number} theta Angle in degrees
 * @returns {number} The equivalent radian
 */
Math.prototype.radianFromDegree = function( theta ){
   return theta * Math.PI / 180;
}