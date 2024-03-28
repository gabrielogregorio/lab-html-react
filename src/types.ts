import { Dispatch, SetStateAction } from 'react';

export type screens = 'Maps' | 'Location' | 'Home' | 'Notify' | 'IndexDb' | 'Form' | 'Tags';

export interface IScreenProps {
  setCurrentScreen: Dispatch<SetStateAction<screens>>;
}
