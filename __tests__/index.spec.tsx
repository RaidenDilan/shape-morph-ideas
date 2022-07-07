import { createRoot } from 'react-dom/client';

jest.mock('react-dom/client', () => ({
  render: {
    createRoot: () => {
      return {
        render: jest.fn(),
      };
    },
  },
}));

describe('test ReactDOM.render', () => {
  // test case skipped due to this issues in React 18
  it.skip('should render without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    require('../src/index.tsx');
    expect(createRoot).toHaveBeenCalledWith(div);
  });
});
