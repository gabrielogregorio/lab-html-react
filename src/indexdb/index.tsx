import { Layout } from '../layout';
import { IScreenProps } from '../types';
import { useHandleTodoList } from './useHandleTodoList';
import { Item } from './Item';

export const IndexDb = ({ setCurrentScreen }: IScreenProps) => {
  const { addTodo, status, data, errorMessage, deleteTodo, updateByIdTodo } = useHandleTodoList();

  return (
    <Layout setCurrentScreen={setCurrentScreen} className="flex flex-col items-center justify-center p-4">
      <div className="flex flex-col gap-2">
        <div>isReady={JSON.stringify(status)}</div>
        <div>errorMessage={errorMessage}</div>

        <div>
          {data.map((item) => {
            return (
              <Item
                updateChange={(name) => updateByIdTodo({ name, id: item.id })}
                data={item}
                key={item.id}
                deleteTodo={() => deleteTodo(item.id)}
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => {
            addTodo({ name: 'example', id: new Date().getTime().toString() });
          }}>
          Add Item
        </button>
      </div>
    </Layout>
  );
};
