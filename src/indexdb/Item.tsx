import { ITodoList } from './useHandleTodoList';

export const Item = ({
  data,
  deleteTodo,
  updateChange,
}: {
  data: ITodoList;
  deleteTodo: () => void;
  updateChange: (name: string) => void;
}) => {
  return (
    <div>
      <input type="text" name="" id="" value={data.name} onChange={(event) => updateChange(event.target.value)} />{' '}
      <button type="button" onClick={() => deleteTodo()}>
        delete
      </button>
    </div>
  );
};
