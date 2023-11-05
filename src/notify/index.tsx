import { useState } from 'react';
import { envs } from '../env';
import { IScreenProps } from '../types';
import { Layout } from '../layout';

const TIME_TO_CLOSE_IN_MS = 5000;
const browserHasSupport = 'Notification' in window;

export const Notify = ({ setCurrentScreen }: IScreenProps) => {
  const [hasPermission, setHasPermission] = useState(false);

  const askPermission = () => {
    window.Notification.requestPermission()
      .then((permission) => {
        setHasPermission(permission === 'granted');
      })
      .catch(() => {
        //
      });
  };

  const sendNotify = () => {
    try {
      const title = 'I am notify';
      const img = envs.VITE_BASE_URL ? './foto.jpg' : '/foto.jpg';
      const text = `I' am a text`;
      const notification = new Notification(title, { body: text, icon: img });
      setTimeout(() => {
        notification.close();
      }, TIME_TO_CLOSE_IN_MS);
    } catch (error: unknown) {
      //
    }
  };

  return (
    <Layout setCurrentScreen={setCurrentScreen} className="flex items-center justify-center flex-col gap-4">
      <div>
        {browserHasSupport ? (
          <button
            onClick={() => askPermission()}
            className="border-2 border-black px-3 py-2 text-black hover:bg-black hover:text-white transition-all duration-150"
            type="button">
            Receive notifications {hasPermission ? '✅' : '🤔'}
          </button>
        ) : (
          <div>Your browser does not support notifications 🥺</div>
        )}
      </div>
      <div>
        {hasPermission ? (
          <button
            type="button"
            onClick={() => sendNotify()}
            className="border-2 border-black px-3 py-2 text-black hover:bg-black hover:text-white transition-all duration-150">
            Send me a notification 💌
          </button>
        ) : undefined}
      </div>
    </Layout>
  );
};
