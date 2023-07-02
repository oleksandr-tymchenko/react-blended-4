import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      name="filter"
      placeholder="Filter list"
      onChange={evt => dispatch(changeFilter(evt.target.value.trim()))}
    />
  );
};
