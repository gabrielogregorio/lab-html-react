// https://react-leaflet.js.org/docs/example-vector-layers/

import { CircleMarker, MapContainer, Polygon, Popup, Rectangle, TileLayer, Tooltip, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngBoundsExpression, LatLngExpression } from 'leaflet';
import { positionRef } from './const';
import { LocationMarker } from './locationMarker';
import { IScreenProps } from '../types';
import { Layout } from '../layout';

const multiPolygon = [
  [
    [-22.985735589671137, -45.01141548156739],
    [-22.983681160330867, -44.971590042114265],
    [-23.01038630389091, -44.960088729858406],
    [-23.03566440972176, -44.96747016906739],
    [-23.031557040041672, -45.01450538635254],
  ],

  [
    [-23.05967421878916, -45.00248908996583],
    [-22.99742943837671, -45.042142868042],
    [-23.020814096787504, -45.067205429077156],
    [-23.030135229062992, -45.03561973571777],
    [-23.055093730424332, -45.05776405334473],
  ],
];

const rectangle = [
  [-22.99, -45],
  [-23.05, -45.03],
];
const purpleOptions = { color: 'purple' };
const redOptions = { color: 'red' };
const blackOptions = { color: 'black' };

const LocationFinderDummy = () => {
  useMapEvents({
    click(event) {
      console.log(event.latlng);
    },
  });
  return null;
};

export const Map = ({ setCurrentScreen }: IScreenProps) => {
  return (
    <Layout setCurrentScreen={setCurrentScreen} className="flex flex-col gap-4">
      <MapContainer center={positionRef} zoom={13} scrollWheelZoom>
        <CircleMarker center={[-23, -45]} pathOptions={redOptions} radius={20}>
          <Popup>Popup in CircleMarker</Popup>
        </CircleMarker>
        <Polygon pathOptions={purpleOptions} positions={multiPolygon as unknown as LatLngExpression[][][]} />
        <LocationMarker />
        <LocationFinderDummy />
        <TileLayer
          attribution='TITLE &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors TITLE'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Rectangle bounds={rectangle as unknown as LatLngBoundsExpression} pathOptions={blackOptions}>
          <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent={false}>
            permanent Tooltip for Rectangle
          </Tooltip>
        </Rectangle>
      </MapContainer>
    </Layout>
  );
};
