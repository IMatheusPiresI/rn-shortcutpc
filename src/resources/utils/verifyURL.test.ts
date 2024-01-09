import { verifyURL } from './verifyURL';

describe('Verify URL Test', () => {
  it('should be render base64 url', () => {
    const result = verifyURL('fakeBase64');

    expect(result).toBe('data:image/png;base64,fakeBase64');
  });

  it('should be render http url', () => {
    const result = verifyURL('http://shortcutpc.com.br');

    expect(result).toBe('http://shortcutpc.com.br');
  });
});
