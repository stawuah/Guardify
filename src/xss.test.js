const  Protection  = require('./main');

describe('Protection', () => {
  it('should set the correct headers when the middleware is used', () => {
    const res = {
      setHeader: jest.fn(),
      removeHeader: jest.fn(),
    };
    const next = jest.fn();

    // Call the middleware
    Protection()(null, res, next);

    // Assertions
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

    // Call the middleware with options
    Protection({
      enableHSTS: false,
      enableXXSprotection: false,
      enableXFrameOptions: false,
      poweredBy: false,
    })(req, res, next);

    // Assertions
    expect(res.setHeader).toHaveBeenCalledTimes(0);
    expect(res.removeHeader).toHaveBeenCalledTimes(0);
    expect(next).toHaveBeenCalled();
  });
})


describe("Protection , With Error logic test case"  , ()=>{
  // Additional test case for error handling
  it('should call next with an error when an exception occurs during header setting', () => {

    const req = {}; // Mock request object
    const res = {
      setHeader: jest.fn(() => {
        throw new Error('Simulated error during header setting');
      }),
      removeHeader: jest.fn(),
    };
    const next = jest.fn(); // Mock next function

    // Act & Assert
    
    expect(() => Protection()(req, res, next)).toThrowError('Error setting security headers');

    // Verify that next was not called
    expect(next).not.toHaveBeenCalled();
  });
})