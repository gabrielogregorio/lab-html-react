import { useCallback, useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { positionRef } from './const';

export const LocationMarker = () => {
  const [draggable, setDraggable] = useState(false);
  const [position, setPosition] = useState(positionRef);
  const toggleDraggable = useCallback(() => {
    setDraggable((prev) => !prev);
  }, []);

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(event) {
      setPosition(event.latlng);
      map.flyTo(event.latlng, map.getZoom());
    },
  });

  return (
    <Marker position={position} draggable={draggable}>
      <Popup minWidth={90}>
        <button type="button" onClick={toggleDraggable}>
          {draggable ? 'Marker is draggable' : 'Click here to make marker draggable'}
        </button>
      </Popup>
    </Marker>
  );
};
