import Transform from 'ember-data/transform';

/**
 * Converts an attribute representing a Date as seconds since epoch into a Date
 * object, and vice-versa.
 */
export default Transform.extend({
  deserialize(serialized) {
    if (serialized) {
      let msSinceEpoch = serialized * 1000;

      return new Date(msSinceEpoch);
    } else {
      return serialized;
    }
  },

  serialize(deserialized) {
    if (deserialized) {
      let msSinceEpoch = deserialized.getTime();
      let secondsSinceEpoch = msSinceEpoch / 1000;

      return secondsSinceEpoch;
    } else {
      return deserialized;
    }
  }
});
