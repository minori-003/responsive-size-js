import { describe, it, expect } from 'vitest';
import { ptToPx } from '../../src/css/';

describe('ptToPx', () => {
  it('returns a px string', () => {
    const result = ptToPx(72);

    expect(typeof result).toBe('string');
    expect(result).toContain('px');
  });

  it('accepts precision option', () => {
    expect(() => ptToPx(10, { precision: 2 })).not.toThrow();
  });

  it('throws when precision is invalid', () => {
    expect(() => ptToPx(10, { precision: -1 })).toThrow();
    expect(() => ptToPx(10, { precision: 1.5 })).toThrow();
  });
});
