/* global it */
/* global describe */
'use strict';

var moment = require('moment');
var assert = require('assert');
var isInInterval = require('../is-in-interval.js');

describe('isInInterval', function() {

  var testData = {
    '23:00 - 07:00': {
      '15:00': false,
      '2:30': true,
      '23:30': true,
      '22:00': false
    },
    '00:00 - 07:00': {
      '15:00': false,
      '2:30': true,
      '23:30': false,
      '22:00': false
    }
  };
  
  Object.keys(testData).forEach(function(interval) {
    var times = testData[interval];
    
    describe('given an interval of `' + interval + '`', function() {
      
      Object.keys(times).forEach(function(timeSpec) {
        var match = timeSpec.match(/(\d{1,2}:(\d{1,2}))/);
        var time = moment().hour(parseInt(match[1])).minute(parseInt(match[2])).toDate();
        var expected = times[timeSpec];
        
        it('should return `' + (expected ? 'true' : 'false') + '` for ' + timeSpec, function() {
          assert(isInInterval(interval, time) === expected);
        }); 
        
      });
      
    });
    
  });
  
});
