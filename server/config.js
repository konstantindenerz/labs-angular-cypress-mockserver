module.exports = {
  port: 5005,
  rewrite: [
    {
      from: '/api/(.*)',
      to: `http://original-server:5000/api/$1`,
    },
  ],
  stack: [
    'lws-basic-auth',
    'lws-body-parser',
    'lws-request-monitor',
    'lws-log',
    'lws-cors',
    'lws-json',
    'lws-compress',
    'lws-mock-response',
    'lws-rewrite',
    'lws-blacklist',
    'lws-conditional-get',
    'lws-mime',
    'lws-range',
    'lws-spa',
    'lws-static',
    'lws-index',
  ],
};
