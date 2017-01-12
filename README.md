# ember-data-numerical-date-transform [![Build Status](https://travis-ci.org/PrecisionNutrition/ember-data-numerical-date-transform.svg?branch=master)](https://travis-ci.org/PrecisionNutrition/ember-data-numerical-date-transform)

Converts dates represented as seconds since epoch to and from raw Dates.

## Example

```javascript
// In your model...
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  myDate: attr('numerical-date')
});
```
