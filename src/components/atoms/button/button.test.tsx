import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { button } from '@/components/atoms/button';

describe('button rendering test', () => {
  it('button', () => {
    const { asFragment } = render(<button />);
    expect(asFragment()).toMatchSnapshot();
  });
});
