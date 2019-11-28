# ember-data-numerical-date-transform [![Build Status](https://travis-ci.org/PrecisionNutrition/ember-data-numerical-date-transform.svg?branch=master)](https://travis-ci.org/PrecisionNutrition/ember-data-numerical-date-transform)
==============================================================================

Converts dates represented as seconds since epoch to and from raw Dates.

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-data-numerical-date-transform
```


Usage
------------------------------------------------------------------------------

```javascript
// In your model...
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  myDate: attr('numerical-date')
});
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
