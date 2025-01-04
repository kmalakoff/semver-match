const assert = require('assert');

const match = require('match-semver');

describe('match', () => {
  describe('comparators', () => {
    it('eq', () => {
      assert.ok(!match('v1.0.0', { eq: 'v0.0.0' }));
      assert.ok(match('v1.0.0', { eq: 'v1.0.0' }));
      assert.ok(!match('v1.0.0', { eq: 'v2.0.0' }));
    });
    it('lt', () => {
      assert.ok(!match('v1.0.0', { lt: 'v0.0.0' }));
      assert.ok(!match('v1.0.0', { lt: 'v1.0.0' }));
      assert.ok(match('v1.0.0', { lt: 'v2.0.0' }));
    });
    it('lte', () => {
      assert.ok(!match('v1.0.0', { lte: 'v0.0.0' }));
      assert.ok(match('v1.0.0', { lte: 'v1.0.0' }));
      assert.ok(match('v1.0.0', { lte: 'v2.0.0' }));
    });
    it('gt', () => {
      assert.ok(match('v1.0.0', { gt: 'v0.0.0' }));
      assert.ok(!match('v1.0.0', { gt: 'v1.0.0' }));
      assert.ok(!match('v1.0.0', { gt: 'v2.0.0' }));
    });
    it('gte', () => {
      assert.ok(match('v1.0.0', { gte: 'v0.0.0' }));
      assert.ok(match('v1.0.0', { gte: 'v1.0.0' }));
      assert.ok(!match('v1.0.0', { gte: 'v2.0.0' }));
    });
  });
  describe('ranges', () => {
    it('gte,lt', () => {
      assert.ok(!match('v1.0.0', { gte: 'v0.0.0', lt: 'v1.0.0' }));
      assert.ok(match('v1.0.0', { gte: 'v1.0.0', lt: 'v2.0.0' }));
      assert.ok(match('v1.0.0', { gte: 'v0.0.0', lt: 'v2.0.0' }));
    });
    it('gte,lte', () => {
      assert.ok(match('v1.0.0', { gte: 'v0.0.0', lte: 'v1.0.0' }));
      assert.ok(match('v1.0.0', { gte: 'v1.0.0', lte: 'v2.0.0' }));
      assert.ok(match('v1.0.0', { gte: 'v0.0.0', lte: 'v2.0.0' }));
    });
    it('gt,lt', () => {
      assert.ok(!match('v1.0.0', { gt: 'v0.0.0', lt: 'v1.0.0' }));
      assert.ok(!match('v1.0.0', { gt: 'v1.0.0', lt: 'v2.0.0' }));
      assert.ok(match('v1.0.0', { gt: 'v0.0.0', lt: 'v2.0.0' }));
    });
    it('gt,lte', () => {
      assert.ok(match('v1.0.0', { gt: 'v0.0.0', lte: 'v1.0.0' }));
      assert.ok(!match('v1.0.0', { gt: 'v1.0.0', lte: 'v2.0.0' }));
      assert.ok(match('v1.0.0', { gt: 'v0.0.0', lte: 'v2.0.0' }));
    });
  });
});
