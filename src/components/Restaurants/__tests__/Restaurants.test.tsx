import { ReactNode } from 'react';
import { render, fireEvent } from '@testing-library/react';

import Restaurants from 'components/Restaurants/Restaurants';
import { UserContext } from 'context/userContext';
import { user } from 'service/__mocks__/user';
import * as hooks from 'hooks/useDebounce';

const renderWithUserContext = (children: ReactNode) =>
  render(<UserContext.Provider value={user}>{children}</UserContext.Provider>);

describe('<Restaurants />', () => {
  it('render', () => {
    const { getByTestId } = renderWithUserContext(<Restaurants />);

    expect(getByTestId('restaurants-wrapper')).toBeInTheDocument();
  });

  it('render getting restaurants loading first', () => {
    jest.spyOn(hooks, 'useDebounce').mockImplementation(() => ({
      debouncedValue: '',
      isDebouncing: true,
    }));

    const { queryByTestId, getByText } = renderWithUserContext(<Restaurants />);

    expect(getByText('Getting restaurants...')).toBeInTheDocument();
    expect(queryByTestId('restaurants__list')).not.toBeInTheDocument();
  });

  it('render correct amount of restaurant cards', () => {
    jest.spyOn(hooks, 'useDebounce').mockImplementation(() => ({
      debouncedValue: 'dennis',
      isDebouncing: false,
    }));

    const { getByTestId, getAllByTestId } = renderWithUserContext(
      <Restaurants />,
    );

    expect(getByTestId('restaurants__list')).toBeInTheDocument();
    expect(getAllByTestId('restaurant-card')).toHaveLength(1);
  });

  it('change the input value', () => {
    jest.spyOn(hooks, 'useDebounce').mockImplementation(() => ({
      debouncedValue: '',
      isDebouncing: false,
    }));

    const { getByTestId } = renderWithUserContext(<Restaurants />);

    const searchInput = getByTestId(
      'search-restaurants-input',
    ) as HTMLInputElement;

    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'denn' } });

    expect(searchInput.value as string).toBe('denn');
  });
});
