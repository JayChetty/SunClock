var assert = require('assert');
var sunClockFactory = require('./sun_clock_factory')
describe('sun_clock', function(){
  var sunClock = sunClockFactory.createSunClock({center:{x:10, y:10}, radius: 10});
  it('should give give complete circle for midnight', function(){
    assert.equal( 2 * Math.PI, sunClock.angleForTime(24,00))
  });
  it('should give give half circle for midday', function(){
    assert.equal( Math.PI, sunClock.angleForTime(12,00))
  });

  it('should be able to plot a position for a time', function(){
    assert.equal(20, sunClock.pointForTime(00,00).x)
    assert.equal(10, sunClock.pointForTime(00,00).y)
  });
})