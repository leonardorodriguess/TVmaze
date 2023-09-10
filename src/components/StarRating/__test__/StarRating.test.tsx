import React from 'react';
import {StarRating} from '../StarRating';
import {render} from '@testing-library/react-native';

describe('StarRating', () => {
  describe('rating was passed', () => {
    it('show the averange ', () => {
      const {getByText} = render(<StarRating rating={{average: 7}} />);

      expect(getByText('7')).toBeTruthy();
    });
    it('show the icon', () => {
      const {getByTestId} = render(<StarRating rating={{average: 7}} />);

      expect(getByTestId('starIcon')).toBeTruthy();
    });
  });

  describe('rating was NOT passing', () => {
    it('return nothing', () => {
      const {UNSAFE_root} = render(<StarRating /* rating={{average: 7}} */ />);

      expect(UNSAFE_root.children.length).toEqual(0);
    });
  });
});
