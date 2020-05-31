var assert = require('assert');

var match = require('../..');

describe('match', function () {
  describe('comparators', function () {
    it('eq', function () {
      assert.ok(!match('v1.0.0', { eq: 'v0.0.0' }));
      assert.ok(match('v1.0.0', { eq: 'v1.0.0' }));
      assert.ok(!match('v1.0.0', { eq: 'v2.0.0' }));
    });
    it('lt', function () {
      assert.ok(!match('v1.0.0', { lt: 'v0.0.0' }));
      assert.ok(!match('v1.0.0', { lt: 'v1.0.0' }));
      assert.ok(match('v1.0.0', { lt: 'v2.0.0' }));
    });
    it('lte', function () {
      assert.ok(!match('v1.0.0', { lte: 'v0.0.0' }));
      assert.ok(match('v1.0.0', { lte: 'v1.0.0' }));
      assert.ok(match('v1.0.0', { lte: 'v2.0.0' }));
    });
    it('gt', function () {
      assert.ok(match('v1.0.0', { gt: 'v0.0.0' }));
      assert.ok(!match('v1.0.0', { gt: 'v1.0.0' }));
      assert.ok(!match('v1.0.0', { gt: 'v2.0.0' }));
    });
    it('gte', function () {
      assert.ok(match('v1.0.0', { gte: 'v0.0.0' }));
      assert.ok(match('v1.0.0', { gte: 'v1.0.0' }));
      assert.ok(!match('v1.0.0', { gte: 'v2.0.0' }));
    });
  });
  describe('ranges', function () {
    it('gte,lt', function () {
      assert.ok(!match('v1.0.0', { gte: 'v0.0.0', lt: 'v1.0.0' }));
      assert.ok(match('v1.0.0', { gte: 'v1.0.0', lt: 'v2.0.0' }));
      assert.ok(match('v1.0.0', { gte: 'v0.0.0', lt: 'v2.0.0' }));
    });
    it('gte,lte', function () {
      assert.ok(match('v1.0.0', { gte: 'v0.0.0', lte: 'v1.0.0' }));
      assert.ok(match('v1.0.0', { gte: 'v1.0.0', lte: 'v2.0.0' }));
      assert.ok(match('v1.0.0', { gte: 'v0.0.0', lte: 'v2.0.0' }));
    });
    it('gt,lt', function () {
      assert.ok(!match('v1.0.0', { gt: 'v0.0.0', lt: 'v1.0.0' }));
      assert.ok(!match('v1.0.0', { gt: 'v1.0.0', lt: 'v2.0.0' }));
      assert.ok(match('v1.0.0', { gt: 'v0.0.0', lt: 'v2.0.0' }));
    });
    it('gt,lte', function () {
      assert.ok(match('v1.0.0', { gt: 'v0.0.0', lte: 'v1.0.0' }));
      assert.ok(!match('v1.0.0', { gt: 'v1.0.0', lte: 'v2.0.0' }));
      assert.ok(match('v1.0.0', { gt: 'v0.0.0', lte: 'v2.0.0' }));
    });
  });
});
