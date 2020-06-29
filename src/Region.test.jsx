import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import Region from './Region';

import { regions } from '../fixtures/regions';

jest.mock('react-redux');

describe('Region', () => {
  it('props로 받은 지역 리스트를 보여준다.', () => {
    const { getByText } = render(<Region regions={regions} />);
    expect(getByText('서울')).not.toBeNull();
    expect(getByText('대전')).not.toBeNull();
    expect(getByText('대구')).not.toBeNull();
  });

  it('지역버튼을 클릭 할 수 있다.', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({ regions }));

    const { getByText } = render(<Region regions={regions} />);
    fireEvent.click(getByText('서울'));
    expect(dispatch).toBeCalled();
  });
});
