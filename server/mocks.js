// https://www.npmjs.com/package/@koa/cors
const fs = require('fs');
const path = require('path');
const {BASELINE} = require('../dist/mock-server/api/cypress/e2e/mocks/baseline.mocks');

const cases = {
  [BASELINE.scope]: BASELINE,
};

const directory = path.join(__dirname, '../dist/mock-server/api/cypress/e2e/mocks/');
fs.readdir(directory, (err, list) => {
  if (err) {
    console.error(err);
    return;
  }
  const files = list.filter(file => file.endsWith('.mocks.js'));
  files.forEach(file => {
    const [{scope, mocks}] = Object.values(require(path.join(directory, file)));
    cases[scope] = {scope, mocks};
  })
});


const routes = Object.values(cases).map((item) => {
  return item.mocks.map(({route}) => route);
}).flat();

/**
 * https://github.com/lwsjs/local-web-server/wiki/How-to-create-a-mock-response
 */
class Mocks {
  mocks() {
    return routes.map(route => ({
      route: route, // api/list
      responses: [
        {
          response: (ctx, ...params) => {
            console.log('route', route)
            let scope = ctx.request.headers['cypress-scope'];
            if (scope === undefined || cases[scope] === undefined) {
              scope = BASELINE.scope;
            }
            if (cases[scope]) {
              const caseItem = cases[scope];
              let mockItem = caseItem.mocks.reverse().find(current => current.route === route);
              if (!mockItem) {
                mockItem = BASELINE.mocks.reverse().find(current => current.route === route);
              }

              ctx.body = typeof mockItem?.response === 'function' ? mockItem?.response(ctx) : mockItem?.response;
              if (ctx.body !== undefined) {
                [...route.matchAll(/[:]([a-zA-Z]*)/g)].forEach(([key, name], index) => {
                  ctx.body = {...ctx.body, [name]: params[index]};
                })
              }

            } else {
              ctx.body = '';
            }
          },
        },
      ],
    }));
  }
}

module.exports = Mocks;
