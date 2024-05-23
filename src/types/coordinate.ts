export type Coordinate = {
    lat: number;
    lng: number;
    zoom: number;
};

export type City = {
    title: string;
    coordinates: Coordinate;
};
