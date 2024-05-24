import {LIST_API_MOCK} from './api/list.api.mock';
import {USER_API_MOCK} from './api/user.api.mock';
import {MockSet} from './model/mock-set.interface';
// 💡 Hint NODE ENVIRONMENT, no window available
export const OVERVIEW: MockSet = {
  scope: 'overview',
  mocks: [
    ...LIST_API_MOCK,
    ...USER_API_MOCK,
  ]
}
