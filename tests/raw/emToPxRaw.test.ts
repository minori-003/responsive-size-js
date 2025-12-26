// emToPxRaw.test.ts
import { describe, it, expect } from 'vitest';
import { emToPxRaw } from '../../src/raw/emToPxRaw';

describe('emToPxRaw', () => {
  it('converts em to px correctly', () => {
    expect(emToPxRaw(1, 16)).toBe(16);
  });

  it('supports decimal values', () => {
    expect(emToPxRaw(1.5, 16)).toBe(24);
  });

  it('supports string values with units', () => {
    expect(emToPxRaw('2em', '10px')).toBe(20);
  });

  it('supports negative values', () => {
    expect(emToPxRaw(-1, 16)).toBe(-16);
  });
});
