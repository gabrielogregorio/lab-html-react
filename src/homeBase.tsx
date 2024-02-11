import { IScreenProps } from './types';

export const HomeBase = ({ setCurrentScreen }: IScreenProps) => {
  return (
    <div className="grid grid-cols-3 p-4 px-6 gap-4">
      <button
        type="button"
        onClick={() => setCurrentScreen('Maps')}
        className="border-2 border-black text-black px-3 py-2 hover:text-white hover:bg-black transition-all duration-150 font-sans font-bold ">
        Maps
      </button>

      <button
        type="button"
        onClick={() => setCurrentScreen('Location')}
        className="border-2 border-black text-black px-3 py-2 hover:text-white hover:bg-black transition-all duration-150 font-sans font-bold ">
        LocationAPi
      </button>

      <button
        type="button"
        onClick={() => setCurrentScreen('Notify')}
        className="border-2 border-black text-black px-3 py-2 hover:text-white hover:bg-black transition-all duration-150 font-sans font-bold ">
        Notify
      </button>

      <button
        type="button"
        onClick={() => setCurrentScreen('IndexDb')}
        className="border-2 border-black text-black px-3 py-2 hover:text-white hover:bg-black transition-all duration-150 font-sans font-bold ">
        IndexDb
      </button>

      <button
        type="button"
        onClick={() => setCurrentScreen('Form')}
        className="border-2 border-black text-black px-3 py-2 hover:text-white hover:bg-black transition-all duration-150 font-sans font-bold ">
        Form
      </button>
    </div>
  );
};
