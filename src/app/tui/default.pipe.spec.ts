import { DefaultPipe } from './default.pipe';

describe('DefaultPipe', () => {
  let pipe;

  beforeEach(() => {
    pipe = new DefaultPipe();
  });

  it('should transform null to -', () => {
    expect(pipe.transform(null)).toBe('-');
  });

  it('should transform undefined to -', () => {
    expect(pipe.transform(undefined)).toBe('-');
  });

  it('should transform empty string to -', () => {
    expect(pipe.transform('')).toBe('-');
  });

  it('should return origin value if it is assigned', () => {
    expect(pipe.transform('hello')).toBe('hello');
    expect(pipe.transform(0)).toBe(0);
    expect(pipe.transform(false)).toBe(false);
  });
});
