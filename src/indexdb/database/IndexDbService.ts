export class IndexDbService {
  private readonly databaseName: string;

  private readonly version: number;

  private dbConnection: IDBDatabase | null = null;

  constructor(databaseName: string, version: number) {
    this.databaseName = databaseName;
    this.version = version;
  }

  public async closeConnection(): Promise<void> {
    if (this.dbConnection) {
      this.dbConnection.close();
      this.dbConnection = null;
    }
  }

  public async openConnection(storeName: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this.dbConnection) {
        resolve();
        return;
      }

      const request = indexedDB.open(this.databaseName, this.version);

      request.onerror = (): void => {
        reject(new Error('Error on open db'));
      };

      request.onupgradeneeded = (): void => {
        this.dbConnection = request.result;
        if (!this.dbConnection.objectStoreNames.contains(storeName)) {
          this.dbConnection.createObjectStore(storeName, { keyPath: 'id' }); // primary key
        }
      };

      request.onsuccess = (): void => {
        this.dbConnection = request.result;
        resolve();
      };
    });
  }

  private handleTransaction(storeName: string, transactionType: IDBTransactionMode): [IDBObjectStore, Promise<void>] {
    if (!this.dbConnection) {
      throw new Error('Database connection is not open');
    }

    const transaction = this.dbConnection.transaction(storeName, transactionType);
    const store = transaction.objectStore(storeName);

    const transactionPromise = new Promise<void>((resolve, reject) => {
      transaction.oncomplete = (): void => {
        resolve();
      };
      transaction.onerror = (error): void => {
        reject(error);
      };
    });

    return [store, transactionPromise];
  }

  public async insert<T extends unknown>(storeName: string, data: T): Promise<T> {
    const [store, transactionPromise] = this.handleTransaction(storeName, 'readwrite');
    const request = store.add(data);

    const requestPromise = new Promise<T>((resolve, reject) => {
      request.onsuccess = (): void => {
        resolve(data);
      };
      request.onerror = (error): void => {
        reject(error);
      };
    });

    await transactionPromise;
    return requestPromise;
  }

  public async delete(storeName: string, id: string): Promise<void> {
    const [store, transactionPromise] = this.handleTransaction(storeName, 'readwrite');
    const request = store.delete(id);

    const requestPromise = new Promise<void>((resolve, reject) => {
      request.onsuccess = (): void => {
        resolve();
      };
      request.onerror = (error): void => {
        reject(error);
      };
    });

    await transactionPromise;
    return requestPromise;
  }

  public async update<T extends unknown>(storeName: string, data: T): Promise<T> {
    const [store, transactionPromise] = this.handleTransaction(storeName, 'readwrite');
    const request = store.put(data);
    const requestPromise = new Promise<T>((resolve, reject) => {
      request.onsuccess = (): void => {
        resolve(data);
      };
      request.onerror = (error): void => {
        reject(error);
      };
    });

    await transactionPromise;
    return requestPromise;
  }

  public async select<T extends unknown>(
    storeName: string,
    query?: IDBValidKey | IDBKeyRange | null | undefined,
    count?: number | undefined,
  ): Promise<T[]> {
    const [store, transactionPromise] = this.handleTransaction(storeName, 'readonly');
    const request = store.getAll(query, count);

    const requestPromise = new Promise<T[]>((resolve, reject) => {
      request.onsuccess = (): void => {
        resolve(request.result);
      };
      request.onerror = (error): void => {
        reject(error);
      };
    });

    await transactionPromise;
    return requestPromise;
  }
}
