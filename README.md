# Guardify Middleware (Express.js) ![Test Coverage](./coverage/badges.svg)


[Guardify Middleware (Express.js)](https://www.npmjs.com/package/headerguard)

Guardify is a Node.js middleware designed to enhance the security of your web applications by setting various HTTP security headers. It is easy to integrate and customizable based on your specific security requirements.

## Installation

```sh
npm i guardify
```

### Usage

Integrate the `Guardify` middleware into your Express application to effortlessly enhance its security. The middleware comes with default settings, but you can easily customize its behavior based on your specific security requirements.

Ensure to place the middleware early in your middleware stack to ensure that security headers are set for every incoming request. Refer to the example below for a quick setup with both default and custom options.

```javascript
const express = require('express');
const Guardify = require('guardify');

const app = express();

// Use Guardify middleware with default options
app.use(Guardify());

// Or customize options
app.use(Guardify({
    enableHSTS: true,
    hstsMaxAge: 31536000,
    enableXXSprotection: true,
    enableXFrameOptions: true,
    poweredBy: true,
    enableCORS: true,
    corsOrigin: '*',
    corsMethods: 'GET, POST, PUT, DELETE',
    corsHeaders: 'Content-Type, Authorization',
    referrerPolicy: 'no-referrer-when-downgrade',
    permissionsPolicy: 'geolocation=(self), microphone=()',
    customHeaders: {
        'X-Custom-Header': 'CustomValue'
    }
}));

// Your routes and application logic go here

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
```

> **Note:** By default, Guardify comes with a well-configured set of security headers but is flexible enough to adjust the options as needed.

> **Tip:** Guardify's default configuration automatically disables exposure of the technology behind the web application, enhancing security.

> **Warning:** When using security middleware like Guardify, it is generally recommended to place it at the top of your middleware stack. This ensures that the security headers are set for every incoming request before other middleware or route handlers are executed.

## Options

| Option                | Default | Description |
|-----------------------|---------|-------------|
| `enableHSTS`         | `true`  | Enables HTTP Strict Transport Security (HSTS) to enforce HTTPS-only communication. |
| `hstsMaxAge`        | `31536000` | Sets the max age for HSTS in seconds (default: 1 year). |
| `enableXXSprotection` | `true`  | Enables `X-XSS-Protection` header to prevent cross-site scripting (XSS) attacks. |
| `enableXFrameOptions` | `true`  | Enables `X-Frame-Options` header to protect against clickjacking attacks. |
| `poweredBy`         | `true`  | Removes the `X-Powered-By` header for security through obscurity. |
| `enableCORS`        | `false` | Enables Cross-Origin Resource Sharing (CORS) headers. |
| `corsOrigin`        | `*` | Specifies allowed origins for CORS (default: `*`). |
| `corsMethods`       | `'GET, POST, PUT, DELETE'` | Specifies allowed HTTP methods for CORS. |
| `corsHeaders`       | `'Content-Type, Authorization'` | Specifies allowed HTTP headers for CORS. |
| `referrerPolicy`    | `'no-referrer-when-downgrade'` | Controls how much referrer information is included with requests. |
| `permissionsPolicy` | `'geolocation=(self), microphone=()'` | Defines browser feature permissions. |
| `customHeaders`     | `{}` | Allows adding additional custom headers as key-value pairs. |

### Best Practices

- Place Guardify at the top of your middleware stack to ensure security headers are applied before other middleware.
- Keep `enableHSTS`, `enableXXSprotection`, and `enableXFrameOptions` enabled unless specific application requirements dictate otherwise.
- Adjust `hstsMaxAge` based on your application's needs.
- Regularly review and update security headers based on emerging best practices and changes in your application's requirements.

## Security Headers

- **Strict-Transport-Security (HSTS)**: Protects against man-in-the-middle attacks by enforcing HTTPS usage.
- **X-XSS-Protection**: Prevents cross-site scripting (XSS) attacks.
- **X-Frame-Options**: Protects against clickjacking attacks.
- **X-Powered-By**: Optional - Removes the 'X-Powered-By' header for security through obscurity.
- **Referrer-Policy**: Controls how much referrer information is included with requests.
- **Permissions-Policy**: Restricts the use of certain browser features to improve security.
- **CORS Headers (Optional)**: Allows cross-origin requests when enabled.

With Guardify, you can ensure your application is well-protected while maintaining flexibility for customization. 🚀

