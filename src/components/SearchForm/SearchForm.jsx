import React, { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/todoslices';

// import React from 'react'

export const SearchForm = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleInput = e => setQuery(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();

    const todo = {
      id: nanoid(),
      text: query,
    };

    dispatch(addTodo(todo));

    setQuery('');
  };

  return (
    <div>
      <SearchFormStyled onSubmit={handleSubmit}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>

        <InputSearch
          onChange={handleInput}
          placeholder="What do you want to write?"
          name="search"
          required
          value={query}
          autoFocus
        />
      </SearchFormStyled>
    </div>
  );
};
