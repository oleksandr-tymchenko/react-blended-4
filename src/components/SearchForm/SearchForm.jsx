import React, { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from 'redux/todoslices';
import { selectTodo } from 'redux/selectors';

// import React from 'react'

export const SearchForm = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(selectTodo);
  const handleInput = e => setQuery(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();
    const existTodo = todos.find(el => el.text === query);
    const todo = {
      id: nanoid(),
      text: query,
    };
    if (existTodo) {
      alert(`ToDo ${query} is exist!`);
      return;
    }

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
