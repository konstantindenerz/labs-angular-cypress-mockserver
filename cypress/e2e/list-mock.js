module.exports = [
  {
    route: '/api/list',
    response: (ctx) => ctx.body = {
      timestamp: Date.now(), list: [
        new Array(100).fill(0).map((_, index) => index)
      ]
    },
  }
]
