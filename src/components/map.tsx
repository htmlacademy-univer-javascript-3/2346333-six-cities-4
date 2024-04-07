import { Coordinates, Coordinate } from '../types/coordinate';
import { useRef, useEffect } from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../const';
import { useMap } from '../hooks/use-map';
import { City } from '../types/coordinate';

type MapProps = {
    city: City;
    coordinates: Coordinates;
    selectedPoint: Coordinate | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export function Map({ city, coordinates, selectedPoint }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      coordinates.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, coordinates, selectedPoint]);

  return <div style={{height: '500px'}} ref={mapRef}></div>;
}
