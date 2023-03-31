module.exports = {
  scope: 'baseline',
  mocks: [{
    route: '/api/list', response: {timestamp: Date.now(), list: []},
  }]
}
