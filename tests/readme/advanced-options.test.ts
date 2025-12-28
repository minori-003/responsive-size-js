// tests/readme/advanced-options.test.ts
// These tests ensure README examples always stay valid.

import { describe, it, expect } from 'vitest';
import { rClampPx } from '../../src';

describe('README: minViewportDiff', () => {
  it('throws when viewport diff is smaller than minViewportDiff', () => {
    expect(() =>
      rClampPx(16, 24, 768, 769, {
        minViewportDiff: 10,
      })
    ).toThrow();
  });
});
