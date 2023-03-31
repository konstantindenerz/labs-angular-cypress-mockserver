const overview = require('../cypress/e2e/overview');
const baseline = require('../cypress/e2e/baseline');

const cases = {
  [overview.scope]: overview,
  [baseline.scope]: baseline
};

const routes = Object.values(cases).map((item) => {
  return item.mocks.map(({route}) => route);
}).flat();

/**
 * https://github.com/lwsjs/local-web-server/wiki/How-to-create-a-mock-response
 */
class Mocks {
  mocks() {
    return routes.map(route => ({
      route: route,
      responses: [
        {
          response: (ctx) => {
            let scope = ctx.request.headers['cypress-scope'];
            if(scope === undefined || cases[scope] === undefined){
              scope = baseline.scope;
            }
            if (cases[scope]) {
              const caseItem = cases[scope];
              const mockItem = caseItem.mocks.find(current => current.route === route);
              ctx.body = typeof mockItem?.response === 'function' ? mockItem?.response(ctx) : mockItem?.response;
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
