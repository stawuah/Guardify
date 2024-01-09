'use strict';

const Guardify = (options = {}) => {
    const { enableHSTS = true, hstsMaxAge = 31536000, enableXXSprotection = true, enableXFrameOptions = true, poweredBy = true} = options;

    return (req, res, next) => {
        try {


            if (enableHSTS) {
                res.setHeader('Strict-Transport-Security', `max-age=${hstsMaxAge}`);
            }

            if (enableXXSprotection) {
                res.setHeader('X-XSS-Protection', '1; mode=block');
            }

            if (enableXFrameOptions) {
                res.setHeader('X-Frame-Options', 'DENY');
            }

            if (poweredBy) {
                res.removeHeader('X-Powered-By', 'Express');
            }

            next();
        } catch (error) {
            throw new Error('Error setting security headers')
        }
    };
};

module.exports = Guardify;



