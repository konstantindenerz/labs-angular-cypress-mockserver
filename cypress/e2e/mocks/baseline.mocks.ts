import {Reporting} from '../../../src/app/reporting.model';
import {User} from '../../../src/app/user.model';
import {MockSet} from './model/mock-set.interface';
// 💡 Hint NODE ENVIRONMENT, no window available
export const BASELINE: MockSet = {
  scope: 'baseline',
  mocks: [
    {
      route: '/api/list', response: {timestamp: Date.now(), list: []},
    },
    {
      route: '/api/user', response: {id: '42', name: 'foobar'} as User,
    },
    {
      route: '/api/reporting', response: {id: `${Date.now()}`, data: [1,2,3,4,5]} as Reporting,
    }
  ]
}
