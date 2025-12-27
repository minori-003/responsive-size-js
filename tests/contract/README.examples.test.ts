// README.examples.test.ts
import { describe, it, expect } from 'vitest';
import { rClampPx, rClampRem } from '../../src/css';

describe('README examples', () => {
  it('basic rClampPx example', () => {
    const fontSize = rClampPx(16, 24, 375, 1440);

    expect(fontSize).toContain('clamp(');
    expect(fontSize).toContain('vw');
    expect(fontSize).toContain('px');
  });

  it('basic rClampRem example', () => {
    const fontSize = rClampRem(16, 24, 375, 1440, {
      baseFontSize: 16,
    });

    expect(fontSize).toContain('clamp(');
    expect(fontSize).toContain('rem');
    expect(fontSize).toContain('vw');
  });

  it('reverse scaling example', () => {
    const fontSize = rClampPx(24, 16, 375, 1440, {
      allowReverse: true,
    });

    expect(fontSize.startsWith('clamp(')).toBe(true);
  });
});
