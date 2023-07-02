import { Grid, GridItem, Todo } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';
import { visibleTodos } from 'redux/selectors';

export const TodoList = () => {
  const todos = useSelector(visibleTodos);

  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <Todo id={todo.id} text={todo.text} counter={index + 1} />
        </GridItem>
      ))}
    </Grid>
  );
};
