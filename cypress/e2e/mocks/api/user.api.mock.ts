import {ExtendableContext} from 'koa';

export const USER_API_MOCK = [
  {
    route: '/api/user/:group/:id',
    status: 404,
    response: (ctx: ExtendableContext) => ({
      error: 'Not found'
    })
  }
];
