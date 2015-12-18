var sunClockFactory = {
  createSunClock: function(spec){

    var angleForFraction = function(fraction){
      return( Math.PI*2 * fraction );
    };

    var fractionOfDay = function(hours, mins){
      var minutesInDay = 24 * 60;
      var timeInMinutes = (hours* 60) + mins;
      return(timeInMinutes / minutesInDay);
    };

    var polarToCartesian = function(radius, angle){
      return { 
        x:radius*Math.cos(angle),
        y:radius*Math.sin(angle)
      }
    };

    var clockPrototype = {
      angleForTime: function(hours, mins){
        return angleForFraction( fractionOfDay(hours, mins) );
      },
      pointForTime: function(hours,mins){
        return this.pointOnOutline( fractionOfDay(hours, mins));
      },
      pointOnOutline: function(fraction){
        var angle = angleForFraction(fraction);
        var unadjustedCenterPoint = polarToCartesian(this.radius, angle);
        return {
          x: unadjustedCenterPoint.x + this.center.x,
          y: unadjustedCenterPoint.y + this.center.y
        }
      }
    };

    var clock = Object.create( clockPrototype );
    clock.center = spec.center;
    clock.radius = spec.radius;
    return clock;
  }
}

module.exports = sunClockFactory;