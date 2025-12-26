// remToPxRaw.test.ts
import { describe, it, expect } from 'vitest';
import { remToPxRaw } from '../../src/raw/remToPxRaw';

describe('remToPxRaw', () => {
  it('converts rem to px correctly', () => {
    expect(remToPxRaw(1, 16)).toBe(16);
  });

  it('supports decimal values', () => {
    expect(remToPxRaw(1.5, 16)).toBe(24);
  });

  it('supports string values with units', () => {
    expect(remToPxRaw('2rem', '10px')).toBe(20);
  });

  it('supports negative values', () => {
    expect(remToPxRaw(-1, 16)).toBe(-16);
  });
});
