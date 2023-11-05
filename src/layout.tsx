import { ReactNode } from 'react';
import { IScreenProps } from './types';
import { tailwindMerge } from './tailwindMerge';

interface ILayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout = ({ setCurrentScreen, children, className = undefined }: IScreenProps & ILayoutProps) => {
  return (
    <div>
      <div className="w-full px-6">
        <button
          type="button"
          onClick={() => setCurrentScreen('Home')}
          className="px-3 py-2 font-bold hover:bg-black hover:text-white duration-150 transition-all rounded-[0.2rem]">
          Inicio
        </button>
      </div>

      <div className={tailwindMerge('border-t py-4 px-4', className)}>{children}</div>
    </div>
  );
};
