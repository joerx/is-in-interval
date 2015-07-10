Given a business-hours style interval specification (i.e. `7:00 to 22:00`) and a time it will 
return wether the time is within that interval or not.

## Example: 

```js
var interval = '23:00 - 07:00'; // must be exactly like this, i.e. two digits per number
isInInterval(interval, moment().hours(15).startOf('h').toDate()); // false
isInInterval(interval, moment().hours(23).minute(30).startOf('m').toDate()); // true
```
