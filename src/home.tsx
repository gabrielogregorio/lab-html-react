import { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import { Form } from './form';
import { Map } from './map';
import { Location } from './location';
import { screens } from './types';
import { HomeBase } from './homeBase';
import { Notify } from './notify';
import { IndexDb } from './indexdb';

type specialScreensType = { [key in screens]: (setCurrentScreen: Dispatch<SetStateAction<screens>>) => ReactElement };
const specialScreens: specialScreensType = {
  Maps: (setCurrentScreen) => <Map setCurrentScreen={setCurrentScreen} />,
  Location: (setCurrentScreen) => <Location setCurrentScreen={setCurrentScreen} />,
  Home: (setCurrentScreen) => <HomeBase setCurrentScreen={setCurrentScreen} />,
  Notify: (setCurrentScreen) => <Notify setCurrentScreen={setCurrentScreen} />,
  IndexDb: (setCurrentScreen) => <IndexDb setCurrentScreen={setCurrentScreen} />,
  Form: (setCurrentScreen) => <Form setCurrentScreen={setCurrentScreen} />,
};

export const Home = () => {
  const [currentScreen, setCurrentScreen] = useState<screens>('Home');

  return (
    <div>
      <h1 className="text-4xl text-black text-center py-16 font-black">Lab web tools</h1>

      {specialScreens[currentScreen](setCurrentScreen)}
    </div>
  );
};
