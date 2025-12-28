// tests/readme/rClampPx.test.ts
// These tests ensure README examples always stay valid.

import { describe, it, expect } from 'vitest';
import { rClampPx } from '../../src';

describe('README: rClampPx', () => {
    it('returns a valid clamp() string', () => {
    const result = rClampPx(16, 24, 375, 1440);

    expect(result).toContain('clamp(');
    expect(result).toContain('vw');
    expect(result).toContain('px');

    // 最小・最大が含まれていることだけ保証
    expect(result.startsWith('clamp(16px')).toBe(true);
    expect(result.endsWith('24px)')).toBe(true);
    });
});
