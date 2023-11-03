import { useContext } from 'react';
import Button from './Button';
import { TodoDispatcherContext } from '../context/TodoContext';

export default function TodoItem({ todo }) {
  const dispatch = useContext(TodoDispatcherContext);

  return (
    <li
      onClick={() =>
        dispatch({
          type: 'SELECT_TODO',
          id: todo.id,
        })
      }
      className={`mb-10 d-flex flex-row justify-content-center align-items-center p-10 ${
        todo.selected ? 'selected' : ''
      }  `}
    >
      <span className="flex-fill">
        {todo.content} {todo.done && '✅'}
      </span>
      <Button
        text="Valider"
        className="mr-15"
        onClick={(e) => {
          e.stopPropagation();
          dispatch({
            type: 'TOGGLE_TODO',
            id: todo.id,
          });
        }}
      />
      <Button
        text="Modifier"
        className="mr-15"
        onClick={(e) => {
          e.stopPropagation();
          dispatch({
            type: 'TOGGLE_EDIT_TODO',
            id: todo.id,
          });
        }}
      />
      <Button
        text="Supprimer"
        onClick={(e) => {
          e.stopPropagation();
          dispatch({
            type: 'DELETE_TODO',
            id: todo.id,
          });
        }}
      />
    </li>
  );
}