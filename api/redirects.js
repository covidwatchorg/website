/*
Redirect code shamelessly borrowed from this tutorial:
https://dev.to/jackabox/handling-redirects-in-nuxt-js-through-middleware-413p
*/
const redirects = require("./redirects.json");

export default function(req, res, next) {
  // Find the redirect if it exists where the from === the requested url
  const redirect = redirects.find(r => r.from === req.url);

  // If it exists, redirect the page with a 301 response else carry on
  if (redirect) {
    res.writeHead(301, { Location: redirect.to });
    res.end();
  } else {
    next();
  }
}
