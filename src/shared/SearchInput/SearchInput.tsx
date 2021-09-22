import {
  FormEventHandler,
  ChangeEventHandler,
  ReactElement,
  HTMLAttributes,
} from 'react';

import { ReactComponent as SearchIcon } from 'assets/icons/magnifying-glass.svg';

interface SearchInputProps extends HTMLAttributes<HTMLInputElement> {
  searchTerm: string;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
  handleFormSubmit: FormEventHandler<HTMLFormElement>;
  submitButton?: ReactElement;
}

const SearchInput = ({
  searchTerm,
  handleInputChange,
  handleFormSubmit,
  submitButton,
  ...rest
}: SearchInputProps) => (
  <div className='search-input'>
    <form
      className='search-input__form'
      role='search'
      onSubmit={handleFormSubmit}
    >
      <span className='search-input__form__icon'>
        <SearchIcon />
      </span>
      <input
        className='search-input__form__input'
        type='search'
        value={searchTerm}
        onChange={handleInputChange}
        autoComplete='off'
        required
        {...rest}
      />
      {submitButton && submitButton}
    </form>
  </div>
);

export default SearchInput;
