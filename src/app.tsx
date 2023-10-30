import { useState } from 'react';

const TIME_TO_CLOSE_IN_MS = 5000;
const browserHasSupport = 'Notification' in window;

export const App = () => {
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
    // /

    try {
      const title = 'I am notify';
      const img = '/foto.jpg';
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
    <div className="flex flex-col gap-4">
      <div>
        {browserHasSupport ? (
          <button
            onClick={() => askPermission()}
            className="border-2 border-[#f9f8fd] px-3 py-2 text-white"
            type="button">
            Receive notifications {hasPermission ? '✅' : '🤔'}
          </button>
        ) : (
          <div>Your browser does not support notifications 🥺</div>
        )}
      </div>
      <div>
        {hasPermission ? (
          <button type="button" onClick={() => sendNotify()} className="border-2 border-[#f9f8fd] px-3 py-2 text-white">
            Send me a notification 💌
          </button>
        ) : undefined}
      </div>
    </div>
  );
};
