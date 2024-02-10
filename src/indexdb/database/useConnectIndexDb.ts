import { useCallback, useEffect, useRef, useState } from 'react';
import { IndexDbService } from './IndexDbService';

type statusType = 'CLOSED' | 'STARTING' | 'ERROR' | 'DONE';

export const useConnectIndexDb = <T>(database: string, store: string, version: number) => {
  const [status, setStatus] = useState<statusType>('CLOSED');
  const connection = useRef(new IndexDbService(database, version));

  const open = useCallback(async () => {
    connection.current
      .openConnection(store)
      .then(() => {
        setStatus('DONE');
      })
      .catch((error) => {
        setStatus('ERROR');
        throw error;
      });
  }, []);

  useEffect(() => {
    setStatus('STARTING');
    open()
      .then(() => {})
      .catch(() => {});
  }, []);

  const close = useCallback(async () => {
    connection.current
      .closeConnection()
      .then(() => {
        setStatus('CLOSED');
      })
      .catch((error) => {
        setStatus('ERROR');
        throw error;
      });
  }, []);

  const insert = useCallback(async (data: T): Promise<T> => connection.current.insert<T>(store, data), []);

  const deleteById = useCallback(async (id: string): Promise<void> => {
    return connection.current.delete(store, id);
  }, []);

  const updateById = useCallback(async (content: T): Promise<T> => connection.current.update(store, content), []);

  const select = useCallback(
    async (query?: IDBValidKey | IDBKeyRange | null | undefined, count?: number | undefined): Promise<T[]> =>
      connection.current.select<T>(store, query, count),
    [],
  );

  return {
    open,
    close,
    insert,
    deleteById,
    updateById,
    select,
    status,
  };
};
