const { DenyXXSsecurityProtection } = require('./main');

describe('DenyXXSsecurityProtection', () => {
 it('should set the correct headers when the middleware is used', () => {
    const req = {};
    const res = {
      setHeader: jest.fn(),
      removeHeader: jest.fn(),
    };
    const next = jest.fn();

    const middleware = DenyXXSsecurityProtection();
    middleware(req, res, next);

    expect(res.setHeader).toHaveBeenCalledTimes(4);
    expect(res.setHeader).toHaveBeenCalledWith('Strict-Transport-Security', 'max-age=31536000');
    expect(res.setHeader).toHaveBeenCalledWith('X-XSS-Protection', '1; mode=block');
    expect(res.setHeader).toHaveBeenCalledWith('X-Frame-Options', 'DENY');
    expect(res.removeHeader).toHaveBeenCalledWith('X-Powered-By', 'Express');

    expect(next).toHaveBeenCalled();
 });

 it('should set the correct headers when options are provided', () => {
    const req = {};
    const res = {
      setHeader: jest.fn(),
      removeHeader: jest.fn(),
    };
    const next = jest.fn();

    const middleware = DenyXXSsecurityProtection({
      enableHSTS: false,
      enableXXSprotection: false,
      enableXFrameOptions: false,
      poweredBy: false,
    });
    middleware(req, res, next);

    expect(res.setHeader).toHaveBeenCalledTimes(0);
    expect(res.removeHeader).toHaveBeenCalledTimes(0);

    expect(next).toHaveBeenCalled();
 });

 it('should call next with an error when a problem occurs', () => {
    const req = {};
    const res = {
      setHeader: () => {
        throw new Error('Error setting header');
      },
    };
    const next = jest.fn();

    const middleware = DenyXXSsecurityProtection();
    middleware(req, res, next);

    expect(next).toHaveBeenCalledWith(new Error('Error setting header'));
 });
});