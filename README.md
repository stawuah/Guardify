

# Guardify Middleware (express.js)

[Guardify Middleware (express.js)](https://www.npmjs.com/package/headerguard)

Guardify is a Node.js middleware designed to enhance the security of your web applications by setting various HTTP security headers. It is easy to integrate and customizable based on your specific security requirements.


## Installation

`npm i guardify`

### Usage

Integrate the `Guardify` middleware into your Express application to effortlessly enhance its security. The middleware comes with default settings, but you can easily customize its behavior based on your specific security requirements.

Ensure to place the middleware early in your middleware stack to ensure that security headers are set for every incoming request. Refer to the example above for a quick setup with both default and custom options.

Feel free to explore and adapt the provided options to strike the right balance between security and functionality for your web application.

```
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
}));

// Your routes and application logic go here

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
```
> [!NOTE]
>  **By Defualt it comes with a well configured options, but also flexible to adjust the options**.

> [!TIP]
>  **It has it's defualt config which automatically disables the technology behind the web application**.

> [!WARNING]
> **when using security middleware like Guardify, it is generally recommended to place it at the top of your middleware stack. This ensures that the security headers are set for every incoming request before other middleware or route handlers are executed. The order of middleware matters because they are executed in the order they are declared**.

## Options

- `enableHSTS`: Enables HTTP Strict Transport Security (HSTS) header. When set to `true` (default), it instructs the browser to only communicate with the server over HTTPS. This is crucial for protecting against man-in-the-middle attacks. For optimal security, it's recommended to keep this option enabled.

- `hstsMaxAge`: Sets the max age for HSTS in seconds. The default is `31536000` seconds (1 year). Consider adjusting this value based on your application's needs. A longer duration provides better security but might make it more challenging to switch back to HTTP if needed.

- `enableXXSprotection`: Enables X-XSS-Protection header. This header helps prevent cross-site scripting (XSS) attacks by enabling the browser's built-in XSS protection. It's advisable to keep this option enabled (`true`) to enhance the security of your application.

- `enableXFrameOptions`: Enables X-Frame-Options header. This header protects against clickjacking attacks by preventing the content from being embedded into other websites using frames. It's generally recommended to enable this option (`true`) to bolster your application's security.

- `poweredBy`: Removes the 'X-Powered-By' header. This header exposes information about the server technology (e.g., Express). While removing it (`true`) doesn't directly enhance security, it follows the principle of security through obscurity. Attackers may find it slightly more challenging to identify vulnerabilities in specific server technologies if this information is not disclosed.

### Best Practices

- For optimal security, it's recommended to enable all options (`enableHSTS`, `enableXXSprotection`, `enableXFrameOptions`, and `poweredBy`) unless specific requirements dictate otherwise.

- Adjust the `hstsMaxAge` based on your application's needs. Be cautious with extremely long durations, as it may pose challenges if you need to switch back to HTTP or change the domain's security policy.

- Regularly review and update security headers based on emerging best practices and changes in your application's requirements.

## Security Headers

- **Strict-Transport-Security (HSTS)**: Protects against man-in-the-middle attacks by enforcing the use of HTTPS.

- **X-XSS-Protection**: Prevents cross-site scripting (XSS) attacks by enabling the browser's built-in XSS protection.

- **X-Frame-Options**: Protects against clickjacking attacks by preventing content from being embedded into other websites using frames.

- **X-Powered-By**: Optional - Removes the 'X-Powered-By' header for security through obscurity.
