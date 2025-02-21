'use strict';

const Guardify = require('../src/main');

describe('Guardify Middleware', () => {
    let mockReq;
    let mockRes;
    let nextFunction;

    beforeEach(() => {
        mockReq = {};
        mockRes = {
            headers: {},
            setHeader: function(key, value) {
                this.headers[key] = value;
            },
            removeHeader: function(key) {
                delete this.headers[key];
            },
            getHeader: function(key) {
                return this.headers[key];
            }
        };
        nextFunction = jest.fn();
    });

    test('default configuration sets all security headers', () => {
        const middleware = Guardify();
        middleware(mockReq, mockRes, nextFunction);

        // Check HSTS
        expect(mockRes.headers['Strict-Transport-Security'])
            .toBe('max-age=31536000; includeSubDomains; preload');

        // Check XSS Protection
        expect(mockRes.headers['X-XSS-Protection'])
            .toBe('1; mode=block');

        // Check X-Frame-Options
        expect(mockRes.headers['X-Frame-Options'])
            .toBe('DENY');

        // Check Content Security Policy
        expect(mockRes.headers['Content-Security-Policy'])
            .toBe("default-src 'self'; script-src 'self'; style-src 'self'");

        // Check other security headers
        expect(mockRes.headers['X-Content-Type-Options']).toBe('nosniff');
        expect(mockRes.headers['Referrer-Policy']).toBe('no-referrer-when-downgrade');
        expect(mockRes.headers['Permissions-Policy']).toBe('geolocation=(self), microphone=()');
        expect(mockRes.headers['Cache-Control'])
            .toBe('no-store, no-cache, must-revalidate, proxy-revalidate');
        
        // Verify next function was called
        expect(nextFunction).toHaveBeenCalled();
    });

    test('disabling HSTS removes HSTS header', () => {
        const middleware = Guardify({ enableHSTS: false });
        middleware(mockReq, mockRes, nextFunction);

        expect(mockRes.headers['Strict-Transport-Security']).toBeUndefined();
    });

    test('custom HSTS max age is applied', () => {
        const customMaxAge = 7776000;
        const middleware = Guardify({ hstsMaxAge: customMaxAge });
        middleware(mockReq, mockRes, nextFunction);

        expect(mockRes.headers['Strict-Transport-Security'])
            .toBe(`max-age=${customMaxAge}; includeSubDomains; preload`);
    });

    test('disabling X-XSS-Protection removes header', () => {
        const middleware = Guardify({ enableXXSprotection: false });
        middleware(mockReq, mockRes, nextFunction);

        expect(mockRes.headers['X-XSS-Protection']).toBeUndefined();
    });

    test('disabling X-Frame-Options removes header', () => {
        const middleware = Guardify({ enableXFrameOptions: false });
        middleware(mockReq, mockRes, nextFunction);

        expect(mockRes.headers['X-Frame-Options']).toBeUndefined();
    });

    test('CORS headers are set when enabled', () => {
        const middleware = Guardify({
            enableCORS: true,
            corsOrigin: 'https://example.com',
            corsMethods: 'GET, POST',
            corsHeaders: 'Content-Type'
        });
        middleware(mockReq, mockRes, nextFunction);

        expect(mockRes.headers['Access-Control-Allow-Origin']).toBe('https://example.com');
        expect(mockRes.headers['Access-Control-Allow-Methods']).toBe('GET, POST');
        expect(mockRes.headers['Access-Control-Allow-Headers']).toBe('Content-Type');
    });

    test('custom headers are applied', () => {
        const customHeaders = {
            'Custom-Security-Header': 'custom-value',
            'Another-Custom-Header': 'another-value'
        };
        const middleware = Guardify({ customHeaders });
        middleware(mockReq, mockRes, nextFunction);

        expect(mockRes.headers['Custom-Security-Header']).toBe('custom-value');
        expect(mockRes.headers['Another-Custom-Header']).toBe('another-value');
    });

    test('X-Powered-By header is removed when poweredBy is true', () => {
        mockRes.headers['X-Powered-By'] = 'Express';
        const middleware = Guardify({ poweredBy: true });
        middleware(mockReq, mockRes, nextFunction);

        expect(mockRes.headers['X-Powered-By']).toBeUndefined();
    });

    test('handles errors appropriately', () => {
        const mockError = new Error('Test error');
        const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {}); // Mock console.error
    
        mockRes.setHeader = jest.fn(() => {
            throw mockError;
        });
    
        const middleware = Guardify();
        middleware(mockReq, mockRes, nextFunction);
    
        // Verify error was logged
        expect(errorSpy).toHaveBeenCalledWith('Security Middleware Error:', mockError);
        // Verify error was passed to next()
        expect(nextFunction).toHaveBeenCalledWith(mockError);
    
        errorSpy.mockRestore(); // Restore original console.error
    });
    

    test('custom content security policy is applied', () => {
        const customCSP = "default-src 'none'; script-src 'self' 'unsafe-inline'";
        const middleware = Guardify({ contentSecurityPolicy: customCSP });
        middleware(mockReq, mockRes, nextFunction);

        expect(mockRes.headers['Content-Security-Policy']).toBe(customCSP);
    });

    test('custom referrer policy is applied', () => {
        const customReferrerPolicy = 'strict-origin';
        const middleware = Guardify({ referrerPolicy: customReferrerPolicy });
        middleware(mockReq, mockRes, nextFunction);

        expect(mockRes.headers['Referrer-Policy']).toBe(customReferrerPolicy);
    });

    test('custom permissions policy is applied', () => {
        const customPermissionsPolicy = "camera=(), microphone=()";
        const middleware = Guardify({ permissionsPolicy: customPermissionsPolicy });
        middleware(mockReq, mockRes, nextFunction);

        expect(mockRes.headers['Permissions-Policy']).toBe(customPermissionsPolicy);
    });
});