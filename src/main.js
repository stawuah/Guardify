'use strict';

const Guardify = (options = {}) => {
    const {
        enableHSTS = true,
        hstsMaxAge = 31536000,
        enableXXSprotection = true,
        enableXFrameOptions = true,
        poweredBy = true,
        enableCORS = false,
        corsOrigin = '*',
        corsMethods = 'GET, POST, PUT, DELETE',
        corsHeaders = 'Content-Type, Authorization',
        contentSecurityPolicy = "default-src 'self'; script-src 'self'; style-src 'self'",
        referrerPolicy = "no-referrer-when-downgrade",
        permissionsPolicy = "geolocation=(self), microphone=()",
        customHeaders = {}
    } = options;

    return (req, res, next) => {
        try {
            if (enableHSTS) {
                res.setHeader('Strict-Transport-Security', `max-age=${hstsMaxAge}; includeSubDomains; preload`);
            }
            if (enableXXSprotection) {
                res.setHeader('X-XSS-Protection', '1; mode=block');
            }
            if (enableXFrameOptions) {
                res.setHeader('X-Frame-Options', 'DENY');
            }
            if (poweredBy) {
                res.removeHeader('X-Powered-By');
            }

            // Additional security headers
            res.setHeader('Content-Security-Policy', contentSecurityPolicy);
            res.setHeader('Referrer-Policy', referrerPolicy);
            res.setHeader('Permissions-Policy', permissionsPolicy);
            res.setHeader('X-Content-Type-Options', 'nosniff');
            res.setHeader('Expect-CT', 'max-age=86400, enforce');
            res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
            res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
            res.setHeader('Cross-Origin-Resource-Policy', 'same-origin');
            res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
            res.setHeader('Pragma', 'no-cache');
            res.setHeader('Expires', '0');
            res.setHeader('X-DNS-Prefetch-Control', 'off');
            res.removeHeader('Server');

            // Enable CORS if needed
            if (enableCORS) {
                res.setHeader('Access-Control-Allow-Origin', corsOrigin);
                res.setHeader('Access-Control-Allow-Methods', corsMethods);
                res.setHeader('Access-Control-Allow-Headers', corsHeaders);
            }

            // Custom headers
            Object.entries(customHeaders).forEach(([key, value]) => {
                res.setHeader(key, value);
            });

            next();
        } catch (error) {
            console.error('Security Middleware Error:', error);
            next(error);
        }
    };
};

module.exports = Guardify;




