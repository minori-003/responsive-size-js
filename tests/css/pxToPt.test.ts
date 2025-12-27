import { describe, it, expect } from 'vitest';
import { pxToPt } from '../../src/css';

describe('pxToPt', () => {
  it('returns a pt string', () => {
    const result = pxToPt(72);

    expect(typeof result).toBe('string');
    expect(result).toContain('pt');
  });

  it('accepts precision option', () => {
    expect(() => pxToPt(10, { precision: 2 })).not.toThrow();
  });

  it('throws when precision is invalid', () => {
    expect(() => pxToPt(10, { precision: -1 })).toThrow();
    expect(() => pxToPt(10, { precision: 1.5 })).toThrow();
  });
});