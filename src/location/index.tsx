import { Layout } from '../layout';
import { IScreenProps } from '../types';
import { useGeolocation } from './useGeoLocationApi';

export const Location = ({ setCurrentScreen }: IScreenProps) => {
  const { isLoading, error, timestamp, coords, isReady } = useGeolocation();

  return (
    <Layout setCurrentScreen={setCurrentScreen} className="flex flex-col items-center justify-center p-4">
      <div className="flex flex-col gap-2">
        <div>error={JSON.stringify(error)}</div>
        <div>isLoading={JSON.stringify(isLoading)}</div>
        <div>timestamp={JSON.stringify(timestamp)}</div>
        <div>coords={JSON.stringify(coords)}</div>
        <div>isReady={JSON.stringify(isReady)}</div>
      </div>
    </Layout>
  );
};
