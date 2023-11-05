import { useEffect, useRef, useState } from 'react';

export const useGeolocation = (options: PositionOptions = {}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<GeolocationPositionError | string | null>(null);
  const [state, setState] = useState<GeolocationPosition | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);

  const optionsRef = useRef<PositionOptions>(options);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setIsLoading(false);
      setIsReady(false);
      return () => {};
    }

    const onPosition = (position: GeolocationPosition) => {
      setIsLoading(false);
      setError(null);
      setIsReady(true);
      setState({ ...position });
    };

    const onError = (err: GeolocationPositionError) => {
      setIsLoading(false);
      setIsReady(false);
      setError(err);
    };

    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(onPosition, onError, optionsRef.current);

    const watchId = navigator.geolocation.watchPosition(onPosition, onError, optionsRef.current);

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return { coords: state?.coords, timestamp: state?.timestamp, isLoading, error, isReady };
};
