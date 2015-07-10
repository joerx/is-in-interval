'use strict';

var assert = require('assert');
var moment = require('moment');

module.exports = function isInInterval(interval, date) {
  var interval = parseIntervalSpec(interval);
  return _isInInterval(interval.start, interval.end, moment(date));
};

function _isInInterval(iStart, iEnd, date) {
  var matches, mStart, mEnd;

  mStart = moment().hour(iStart.h).minute(iStart.m).startOf('m');
  mEnd = moment().hour(iEnd.h).minute(iEnd.m).startOf('m');

  if (mStart.isAfter(mEnd)) {
    // start after end means interval includes midnight. 
    // reverse so we have a single-day interval
    return !_isInInterval(iEnd, iStart, date);
  } else {
    return date.isAfter(mStart) && date.isBefore(mEnd);
  }
}

function parseIntervalSpec(interval) {
  var matches = interval.match(/(\d{2}):(\d{2})\s-\s(\d{2}):(\d{2})/);
  assert(matches);
  return {
    start: {h: parseInt(matches[1]), m: parseInt(matches[2])},
    end: {h: parseInt(matches[3]), m: parseInt(matches[4])}
  }
}
