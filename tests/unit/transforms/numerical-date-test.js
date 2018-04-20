import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Transform | numerical date', function(hooks) {
  setupTest(hooks);

  test('#serialize', function(assert) {
    let transform = this.owner.lookup('transform:numerical-date');
    let deserialized = new Date('February 10, 2016 11:03 AM EST');
    let expectedVal = 1455120180;

    let actualVal = transform.serialize(deserialized);

    assert.equal(actualVal, expectedVal, 'converts a Date object to seconds since epoch');

    actualVal = transform.serialize(null);

    assert.ok(!actualVal, 'does not blow up with falsey values');
  });

  test('#deserialize', function(assert) {
    let transform = this.owner.lookup('transform:numerical-date');
    let serialized = 1455120180.000;
    let expectedVal = new Date('February 10, 2016 11:03 AM EST');

    let actualVal = transform.deserialize(serialized);

    assert.deepEqual(actualVal, expectedVal, 'converts seconds since epoch to a Date object');

    actualVal = transform.deserialize(null);

    assert.ok(!actualVal, 'does not blow up with falsey values');
  });
});