import {ExtendableContext} from 'koa';

export const LIST_API_MOCK = [
  {
    route: '/api/list',
    // TODO Check if a typings is available for mock-server context api
    response: (ctx: ExtendableContext) =>
      ctx.body = {
        timestamp: Date.now(), list: [
          new Array(100).fill(0).map((_, index) => index)
        ]
      },
  }
];
