import createRegex from 'dummy/utils/create-regex';
import { module, test } from 'qunit';

module('Unit | Utility | create-regex', function() {

  test('matches regardless of word order', function(assert) {
    let regex = createRegex('one string', false, true, true);
    assert.ok(regex.test('string one'));
  });

  test('matches exact string if used with double quotes', function(assert) {
    let regex = createRegex('one string', false, true, true);
    assert.ok(regex.test('"one string"'));
  });
});
