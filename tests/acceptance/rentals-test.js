import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /rentals', async function(assert) {
    await visit('/rentals');

    assert.equal(currentURL(), '/rentals');
  });
});
