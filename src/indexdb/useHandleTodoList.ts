import { useEffect, useState } from 'react';
import { useConnectIndexDb } from './database/useConnectIndexDb';

const database = 'databaseExample';
const store = 'storeExample';
const version = 1;

export interface ITodoList {
  name: string;
  id: string;
}

export const useHandleTodoList = () => {
  const { insert, select, deleteById, status, updateById } = useConnectIndexDb<ITodoList>(database, store, version);
  const [data, setData] = useState<ITodoList[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const getAll = async (): Promise<void> => {
    setData([]);

    return select()
      .then((dataLocal) => {
        setData(dataLocal);
      })
      .catch(() => {
        setErrorMessage('Error on add tasks');
      });
  };
  const addTodo = (dataLocal: ITodoList) => {
    insert(dataLocal)
      .then(() => {
        getAll()
          .then(() => {})
          .catch(() => {});
      })
      .catch((error) => {
        console.error(error);

        if (error?.target?.error?.message === 'Key already exists in the object store.') {
          setErrorMessage('item already exists');
          return;
        }

        setErrorMessage('Error on add tasks');
      });
  };

  const deleteTodo = (id: string) => {
    deleteById(id)
      .then(() => {
        getAll()
          .then(() => {})
          .catch(() => {});
      })
      .catch((error) => {
        console.error(error);

        setErrorMessage('Error on drop task');
      });
  };

  const updateByIdTodo = (dataLocal: ITodoList) => {
    updateById(dataLocal)
      .then(() => {
        getAll()
          .then(() => {})
          .catch(() => {});
      })
      .catch((error) => {
        console.error(error);

        setErrorMessage('Error on update task');
      });
  };

  useEffect(() => {
    if (status === 'DONE') {
      getAll()
        .then(() => {})
        .catch(() => {});
    }
  }, [status]);

  return {
    errorMessage,
    addTodo,
    getAll,
    deleteTodo,
    updateByIdTodo,
    data,
    status,
  };
};
