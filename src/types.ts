import { Dispatch, SetStateAction } from 'react';

export type screens = 'Maps' | 'Location' | 'Home' | 'Notify' | 'IndexDb';

export interface IScreenProps {
  setCurrentScreen: Dispatch<SetStateAction<screens>>;
}
