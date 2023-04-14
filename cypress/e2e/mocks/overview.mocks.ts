import {LIST_API_MOCK} from './api/list.api.mock';
import {MockSet} from './model/mock-set.interface';
// 💡 Hint NODE ENVIRONMENT, no window available
export const OVERVIEW: MockSet = {
  scope: 'overview',
  mocks: [
    ...LIST_API_MOCK,
  ]
}
