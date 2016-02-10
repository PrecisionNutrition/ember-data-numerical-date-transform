# ember-data-numerical-date-transform

Converts dates represented as seconds since epoch to and from raw Dates.

## Example

```javascript
// In your model...
import DS from 'ember-data';

const {
  attr,
  Model
} = DS;

export default Model.extend({
  myDate: attr('numerical-date')
});
```
