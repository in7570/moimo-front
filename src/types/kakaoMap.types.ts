export interface PlaceInfo {
  placeName: string;
  address: string;
  roadAddress: string;
  lat: number;
  lng: number;
}

export interface KakaoMapConfig {
  level?: number;
  center?: { lat: number; lng: number };
}
