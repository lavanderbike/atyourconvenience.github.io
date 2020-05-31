export interface ILocation {
  latitude: number;
  longitude: number;
  address: string;
  country?: string;
  city?: string;
  postalCode?: string;
}

export interface IMap {
  userLocation: ILocation;
  storePoints: ILocation[];
}
