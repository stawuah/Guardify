const { expect } = require('chai');
const { DenyXXSsecurityProtection } = require('./main'); // Replace with your actual module path
const sinon = require('sinon'); // For mocking/responses


describe('DenyXXSsecurityProtection Middleware', () => {
  it('should set security headers based on options', () => {
    const req = {};
    const res = {
      setHeader: sinon.spy(),
      removeHeader: sinon.spy(),
    };
    const next = sinon.spy();

    const options = {
      enableHSTS: true,
      hstsMaxAge: 31536000,
      enableXXSprotection: true,
      enableXFrameOptions: true,
      poweredBy: true,
    };

    const middleware = DenyXXSsecurityProtection(options);

    middleware(req, res, next);

    // Expectations for each security header
    expect(res.setHeader.calledWith('Strict-Transport-Security', 'max-age=31536000')).to.be.true;
    expect(res.setHeader.calledWith('X-XSS-Protection', '1; mode=block')).to.be.true;
    expect(res.setHeader.calledWith('X-Frame-Options', 'DENY')).to.be.true;
    expect(res.removeHeader.calledWith('X-Powered-By', 'Express')).to.be.true;

    // Ensure next() is called
    expect(next.called).to.be.true;
  });

  it('should remove X-Powered-By header if poweredBy option is false', () => {
    const req = {};
    const res = {
      setHeader: sinon.spy(),
      removeHeader: sinon.spy(),
    };
    const next = sinon.spy();

    const options = {
      poweredBy: false,
    };

    const middleware = DenyXXSsecurityProtection(options);

    middleware(req, res, next);

    // Expectation: X-Powered-By header should not be removed
    expect(res.removeHeader.calledWith('X-Powered-By', 'Express')).to.be.false;

    // Ensure next() is called
    expect(next.called).to.be.true;
  });

  // Add more test cases as needed
});

